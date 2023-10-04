import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

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
        <header>
          <Navbar />
        </header>
        <main className="px-2 md:px-1 md:py-2 flex flex-col lg:flex-row">
          <Sidebar />
          <div className="flex-1 flex justify-center items-center ">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
