import { Metadata } from 'next';

export function generateMetadata(
  title: string,
  description: string,
  path: string,
  locale: string = 'en'
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://etnography.com';
  const fullUrl = `${baseUrl}${path}`;
  
  return {
    title,
    description,
    keywords: 'camera, photography, lenses, analog, digital, photo equipment, etnography, Macedonia',
    authors: [{ name: 'Etnography' }],
    creator: 'Etnography',
    publisher: 'Etnography',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
      languages: {
        'en': `${baseUrl}${path}`,
        'mk': `${baseUrl}${path}?lang=mk`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'mk' ? 'mk_MK' : 'en_US',
      url: fullUrl,
      title,
      description,
      siteName: 'Etnography',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
      creator: '@_etnography',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export const defaultMetadata = {
  title: 'Etnography - Professional Photography Equipment',
  description: 'Discover premium analog and digital cameras, lenses, and accessories for professional and amateur photographers in Skopje, Macedonia.',
  keywords: 'camera, photography, lenses, analog, digital, photo equipment, etnography, skopje, macedonia',
};
