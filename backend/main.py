from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2
import psycopg2.extras
import os
from typing import Optional
from dotenv import load_dotenv
from contextlib import asynccontextmanager

load_dotenv()


# --- Database connection ---
def get_db_connection():
    return psycopg2.connect(
        host=os.getenv("POSTGRES_HOST", "localhost"),
        port=os.getenv("POSTGRES_PORT", "5432"),
        dbname=os.getenv("POSTGRES_DB", "postgres"),
        user=os.getenv("POSTGRES_USER", "postgres"),
        password=os.getenv("POSTGRES_PASSWORD", ""),
    )


# --- Lifespan (Startup + Shutdown) ---
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: create table if not exists
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS contact_messages (
            id SERIAL PRIMARY KEY,
            first_name TEXT,
            last_name TEXT,
            email TEXT,
            phone TEXT,
            message TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    """)
    conn.commit()
    cur.close()
    conn.close()
    print("✅ Table contact_messages is ready.")

    yield

    # Shutdown (optional)
    print("🛑 Steel Shop API shutting down...")


app = FastAPI(
    title="Steel Shop API",
    lifespan=lifespan
)


# --- CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        os.getenv("FRONTEND_URL", ""),
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Request model ---
class ContactMessage(BaseModel):
    first_name: Optional[str] = ""
    last_name: Optional[str] = ""
    email: Optional[str] = ""
    phone: Optional[str] = ""
    message: Optional[str] = ""


# --- POST /api/contact ---
@app.post("/api/contact")
def save_contact(data: ContactMessage):
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute(
            """
            INSERT INTO contact_messages (first_name, last_name, email, phone, message)
            VALUES (%s, %s, %s, %s, %s)
            RETURNING id, created_at
            """,
            (data.first_name, data.last_name, data.email, data.phone, data.message),
        )
        row = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()

        return {
            "success": True,
            "message": "Tin nhắn đã được gửi thành công!",
            "id": row[0],
            "created_at": row[1].isoformat(),
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# --- GET /api/contact ---
@app.get("/api/contact")
def get_contacts():
    try:
        conn = get_db_connection()
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cur.execute("SELECT * FROM contact_messages ORDER BY created_at DESC;")
        rows = cur.fetchall()
        cur.close()
        conn.close()

        return {"data": rows}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/")
def root():
    return {"status": "Steel Shop API is running"}