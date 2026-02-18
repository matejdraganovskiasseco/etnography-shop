'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/lib/context';
import { getTranslation } from '@/lib/i18n';
import { formatPrice } from '@/lib/utils';
import { Eye } from 'lucide-react';

interface Product {
  id: number;
  slug: string;
  name: {
    en: string;
    mk: string;
  };
  brand: string;
  category: string;
  condition: string;
  priceEUR: number;
  priceMKD: number;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { language, currency } = useApp();

  const price = currency === 'EUR' ? product.priceEUR : product.priceMKD;
  const formattedPrice = formatPrice(price, currency);
  const productName = product.name[language];
  const conditionText = getTranslation(language, `catalog.conditions.${product.condition.replace(' ', '')}`);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-w-16 aspect-h-12 bg-gray-100">
          {/* Camera Image */}
          <Image
            src={product.images[0] || '/placeholder-product.jpg'}
            alt={productName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium">
            {conditionText}
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{product.brand}</span>
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {productName}
          </h3>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-gray-900">
            {formattedPrice}
          </span>
          <span className="text-sm text-gray-500 capitalize">
            {getTranslation(language, `catalog.categories.${product.category}`)}
          </span>
        </div>
        
        {/* Camera Image in Details */}
        <div className="mb-3 flex justify-center">
          <img 
            src={product.images[0] || '/placeholder-product.jpg'}
            alt="Etnography Camera"
            className="w-144 h-144 object-cover rounded-lg opacity-100"
          />
        </div>
        
        <Link
          href={`/product/${product.slug}`}
          className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <Eye className="h-4 w-4" />
          <span>{getTranslation(language, 'common.viewDetails')}</span>
        </Link>
      </div>
    </div>
  );
}
