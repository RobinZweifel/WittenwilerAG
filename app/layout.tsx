import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'R. Wittenwiler AG - Ihr Elektropartner',
  description: 'Professionelle Elektroinstallationen in Watt-Regensdorf und Umgebung'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={outfit.variable}>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}