# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app

# Install necessary build tools and set npm config
RUN apk add --no-cache libc6-compat && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000

COPY package.json package-lock.json ./

# Install dependencies with retry logic
RUN npm ci --prefer-offline --no-audit || \
    (npm cache clean --force && npm ci --prefer-offline --no-audit) || \
    (npm cache clean --force && npm install --prefer-offline --no-audit)

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN mkdir -p /app/.next && chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 