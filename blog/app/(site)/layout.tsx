import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';

import Header from '../components/Header/Header';

import Footer from '../components/Footer/Footer';

import ServerPostLists from '../serverComponents/ServerPostLists';
import ThemeAppProvider from '@/context/ThemeProvider';

import { UserContext } from '@/context/UserContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} ${styles.wrapper}`}>
        <UserContext>
          <ThemeAppProvider>
            <nav className={styles.header}>
              <Header />
            </nav>
            <main className={styles.body}>
              {children}
            </main>
            <footer className={styles.footer}>
              <Footer />
            </footer>
          </ThemeAppProvider>
        </UserContext>
      </body>
    </html>
  );
}
