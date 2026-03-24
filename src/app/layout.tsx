import type { Metadata } from 'next';
import { Bebas_Neue, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-bebas' 
});

const manrope = Manrope({ 
  subsets: ['latin'], 
  variable: '--font-manrope' 
});

export const metadata: Metadata = {
  title: 'DLV FENCE & GATE | Industrial Grade Fabrication | Houston',
  description: 'Heavy duty custom iron, corrugated metal, and security gates. Houston-based structural fabrication.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebas.variable} ${manrope.variable} bg-brand-black text-white antialiased selection:bg-brand-orange selection:text-brand-black`}>
        <div className="noise-overlay"></div>
        <div className="bg-blueprint fixed inset-0 -z-50 pointer-events-none"></div>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
