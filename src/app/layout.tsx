import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

const font = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soccer Matches',
  description: 'Soccer Matches Results',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <header>{/* <Navbar /> */}</header>
        <main className="px-2 md:px-1 md:py-2 flex gap-5">
          {/* <Sidebar /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
