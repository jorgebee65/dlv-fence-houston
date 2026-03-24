import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DLV Fence & Gate Masters LLC | Houston, TX',
  description: 'Expert Fence & Gate Solutions in Houston, TX. Iron, Aluminum, Sheet Metal, Chainlink, and Custom Fabrication.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased selection:bg-amber-500 selection:text-slate-950`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
