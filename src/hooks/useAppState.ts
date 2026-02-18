'use client';

export function useAppState() {
  return {
    language: 'en',
    currency: 'EUR',
    setLanguage: (lang: string) => console.log('Set language:', lang),
    setCurrency: (curr: string) => console.log('Set currency:', curr)
  };
}
