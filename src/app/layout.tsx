import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "ABC Mutual Fund | Wealth & Investment Advisory",
  description:
    'Systematic mutual fund wealth creation, SIP architecture, and multi-asset compounding by ABC founder.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`
          ${inter.className}
          antialiased
          overflow-x-hidden
          transition-colors
          duration-300
          min-h-screen
          flex
          flex-col
        `}
      >
        <Navbar />

        <div className="flex-1 w-full">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
