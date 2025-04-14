'use client';
import React, { useMemo } from 'react';
import { ThemeProvider } from 'next-theme-kit';

type ProvidersProps = {
  children: React.ReactNode;
};

const ThemeAppProvider: React.FC<ProvidersProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider  defaultTheme="light"  useLocalStorage={true} useSystem={false}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeAppProvider;
