'use client';

import React, { createContext, useContext, ReactNode } from 'react';

interface TestContextType {
  language: string;
  currency: string;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export function TestProvider({ children }: { children: ReactNode }) {
  const value = { language: 'en', currency: 'EUR' };
  return (
    <TestContext.Provider value={value}>
      {children}
    </TestContext.Provider>
  );
}

export function useTestApp() {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTestApp must be used within a TestProvider');
  }
  return context;
}
