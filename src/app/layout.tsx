import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const font = Montserrat({ subsets: ['latin'] });

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

        <div className=" flex flex-col justify-center md:flex-row">
          {/* <div className="w-full md:w-auto">
            <Sidebar />
          </div> */}
          <main className="flex-1 flex flex-grow flex-col md:px-1 md:py-1 overflow-y-auto items-center md:items-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
