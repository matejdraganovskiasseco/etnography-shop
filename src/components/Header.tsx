'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getTranslation } from '@/lib/i18n';
import { useApp } from '@/lib/context';
import { Search, Menu, X, Globe, DollarSign } from 'lucide-react';

export function Header() {
  const { language, currency, setLanguage, setCurrency } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mk' : 'en');
  };

  const toggleCurrency = () => {
    setCurrency(currency === 'EUR' ? 'MKD' : 'EUR');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/catalog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-card border-border border-b sticky top-0 z-50 relative overflow-hidden">
      {/* Macedonian Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpattern id='macedonian-pattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Crect width='20' height='20' fill='%238B0000'/%3E%3Cpath d='M0 10 L10 0 L20 10 L10 20 Z' fill='%23000000'/%3E%3Cpath d='M0 0 L20 20' stroke='%23000000' stroke-width='0.5' fill='none'/%3E%3Cpath d='M5 0 L15 20' stroke='%238B0000' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='5' cy='5' r='1' fill='%238B0000'/%3E%3Ccircle cx='15' cy='15' r='1' fill='%238B0000'/%3E%3C/pattern%3E%3Crect width='100' height='100' fill='url(%23macedonian-pattern)'/%3E%3C/svg%3E") repeat`
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Etnography Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-primary">
              Etnography
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              {getTranslation(language, 'nav.home')}
            </Link>
            <Link
              href="/catalog"
              className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              {getTranslation(language, 'nav.catalog')}
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              {getTranslation(language, 'nav.about')}
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
            >
              {getTranslation(language, 'nav.contact')}
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={getTranslation(language, 'common.search')}
                className="w-64 pl-10 pr-4 py-2 bg-input border-border border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </form>

          {/* Language & Currency Toggles */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 text-sm border-border border rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={toggleCurrency}
              className="flex items-center space-x-1 px-3 py-2 text-sm border-border border rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              <DollarSign className="h-4 w-4" />
              <span>{currency}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-border border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {getTranslation(language, 'nav.home')}
              </Link>
              <Link
                href="/catalog"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {getTranslation(language, 'nav.catalog')}
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {getTranslation(language, 'nav.about')}
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {getTranslation(language, 'nav.contact')}
              </Link>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-3 py-2">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={getTranslation(language, 'common.search')}
                    className="w-full pl-10 pr-4 py-2 bg-input border-border border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </form>

              {/* Mobile Language & Currency */}
              <div className="px-3 py-2 space-y-2">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center space-x-1 px-3 py-2 text-sm border-border border rounded-lg hover:bg-muted transition-colors text-foreground"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
                <button
                  onClick={toggleCurrency}
                  className="w-full flex items-center justify-center space-x-1 px-3 py-2 text-sm border-border border rounded-lg hover:bg-muted transition-colors text-foreground"
                >
                  <DollarSign className="h-4 w-4" />
                  <span>{currency}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
