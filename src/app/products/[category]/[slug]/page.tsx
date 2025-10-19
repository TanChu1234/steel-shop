import ProductPageClient from './ProductPageClient';

// Generate static params for all possible product combinations
export async function generateStaticParams() {
  // Define your product categories and slugs
  const categories = ['construction-steel', 'shape-steel', 'c-purlin', 'i-beam'];
  const slugs = ['cb400-v-phi10', 'cb400-v-phi12', 'cb400-v-phi14', 'cb400-v-phi16'];
  
  const params = [];
  for (const category of categories) {
    for (const slug of slugs) {
      params.push({ category, slug });
    }
  }
  
  return params;
}

export default function ProductPage() {
  return <ProductPageClient />;
} 