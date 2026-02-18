'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Currency } from './i18n';

interface AppContextType {
  language: Language;
  currency: Currency;
  setLanguage: (lang: Language) => void;
  setCurrency: (curr: Currency) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [currency, setCurrencyState] = useState<Currency>('EUR');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      const savedCurr = localStorage.getItem('currency') as Currency;
      
      if (savedLang && (savedLang === 'en' || savedLang === 'mk')) {
        setLanguageState(savedLang);
      } else {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('mk') || browserLang.startsWith('sr')) {
          setLanguageState('mk');
        }
      }
      
      if (savedCurr && (savedCurr === 'EUR' || savedCurr === 'MKD')) {
        setCurrencyState(savedCurr);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const setCurrency = (curr: Currency) => {
    setCurrencyState(curr);
    if (typeof window !== 'undefined') {
      localStorage.setItem('currency', curr);
    }
  };

  return (
    <AppContext.Provider value={{
      language,
      currency,
      setLanguage,
      setCurrency
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
