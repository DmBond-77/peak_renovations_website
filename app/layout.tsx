import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title:
    'Peak Renovations PDX — Professional Renovation & Remodeling in Portland',
  description:
    'Peak Renovations PDX offers expert home and commercial renovation and remodeling services in Portland. Quality work you can trust.',
  keywords: [
    'renovation',
    'remodeling',
    'construction',
    'Portland',
    'home repair',
    'commercial renovation',
    'Peak Renovations PDX',
  ],
  authors: [{ name: 'Peak Renovations PDX' }],
  openGraph: {
    title: 'Peak Renovations PDX — Professional Renovation & Remodeling',
    description:
      'Expert home and commercial renovation services in Portland. Quality workmanship you can rely on.',
    type: 'website',
    url: 'https://peakrenovationspdx.wordpress.com/',
    images: [
      {
        url: 'https://peakrenovationspdx.wordpress.com/path-to-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Peak Renovations PDX Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peak Renovations PDX — Professional Renovation & Remodeling',
    description:
      'Expert home and commercial renovation services in Portland. Quality workmanship you can rely on.',
    images: ['https://peakrenovationspdx.wordpress.com/path-to-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
