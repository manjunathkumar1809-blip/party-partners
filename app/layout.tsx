import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Party Partners - Event Rentals & Decorations | Bengaluru',
  description: 'Luxury event rentals and decorations in Banashankari 3rd Stage, Bengaluru. 4.9 ★ rated (450+ reviews). Backdrops starting at ₹4,000.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Party Partners - Event Rentals & Decorations Bengaluru',
    description: 'Luxury event rentals and decorations. 4.9 ★ (450+ Reviews) • Backdrops Starting at ₹4,000. Banashankari 3rd Stage, Bengaluru.',
    images: [
      {
        url: '/og-party-partners.png',
        width: 1200,
        height: 630,
        alt: 'Party Partners Event Rentals & Decorations',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-obsidian text-white selection:bg-gold selection:text-obsidian`}>
        {children}
      </body>
    </html>
  );
}