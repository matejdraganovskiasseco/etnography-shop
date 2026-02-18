'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useApp } from '@/lib/context';
import { getTranslation } from '@/lib/i18n';
import { formatPrice, createInstagramDM } from '@/lib/utils';
import products from '@/data/products.json';
import { ArrowLeft, ChevronLeft, ChevronRight, Instagram, Share2, Camera } from 'lucide-react';

export default function ProductPage() {
  const { language, currency } = useApp();
  const params = useParams();
  const slug = params.slug as string;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Product Not Found' : 'Производот не е пронајден'}
            </h1>
            <p className="text-gray-600">
              {language === 'en' 
                ? 'The product you are looking for does not exist.'
                : 'Производот што го барате не постои.'
              }
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const price = currency === 'EUR' ? product.priceEUR : product.priceMKD;
  const formattedPrice = formatPrice(price, currency);
  const productName = product.name[language];
  const description = product.description[language];
  const conditionText = getTranslation(language, `catalog.conditions.${product.condition.replace(' ', '')}`);
  const categoryText = getTranslation(language, `catalog.categories.${product.category}`);
  const typeText = getTranslation(language, `catalog.types.${product.filmDigital}`);

  const handleInstagramDM = () => {
    const url = createInstagramDM(
      '_etnography',
      productName,
      formattedPrice,
      typeof window !== 'undefined' ? window.location.href : ''
    );
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productName,
          text: description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert(language === 'en' ? 'Link copied to clipboard!' : 'Врската е копирана во клипборд!');
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>{getTranslation(language, 'common.back')}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[currentImageIndex] || '/placeholder-product.jpg'}
                alt={productName}
                className="w-full h-full object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-blue-500 opacity-100' 
                        : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${productName} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-500">{product.brand}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{categoryText}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{typeText}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {productName}
              </h1>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  {formattedPrice}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {conditionText}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {getTranslation(language, 'product.description')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {getTranslation(language, 'product.specifications')}
              </h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <dl className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <dt className="text-sm font-medium text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </dt>
                      <dd className="text-sm text-gray-900 font-medium">
                        {value}
                      </dd>
                    </div>
                  ))}
                  <div className="flex justify-between pt-3 border-t border-gray-200">
                    <dt className="text-sm font-medium text-gray-500">
                      {getTranslation(language, 'product.condition')}
                    </dt>
                    <dd className="text-sm text-gray-900 font-medium">
                      {conditionText}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleInstagramDM}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:from-accent hover:to-primary transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Instagram className="h-5 w-5" />
                <span>{language === 'en' ? 'DM to Buy' : 'Порака за Купување'}</span>
              </button>
              
              <button
                onClick={handleShare}
                className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Share2 className="h-5 w-5" />
                <span>{getTranslation(language, 'product.shareProduct')}</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Instagram className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">
                    {language === 'en' ? 'How to Purchase' : 'Како да купите'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? 'Click the "DM to Buy" button to contact us via Instagram (@_etnography) with your inquiry. Our team will respond promptly with availability and payment details.'
                      : 'Кликнете на "Порака за Купување" за да не контактирате преку Instagram (@_etnography) со вашето прашање. Нашиот тим ќе одговори брзо со информации за достапност и детали за плаќање.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
