import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Edgar - Votre compagnon végétal intelligent',
  description: 'Edgar rend les plantes accessibles à tous grâce à son pot connecté et son application intuitive. Découvrez une nouvelle façon de prendre soin de vos plantes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}