import products from '@/data/products.json';

type Product = {
  id: number;
  slug: string;
  name: { en: string; mk: string };
  brand: string;
  category: string;
  filmDigital: string;
  filmType?: string;
  mount: string;
  condition: string;
  priceEUR: number | null;
  priceMKD: number | null;
  description: { en: string; mk: string };
  specs: Record<string, any>;
  images: string[];
  status?: 'available' | 'sold';
};

const allProducts = products as unknown as Product[];

export function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}
