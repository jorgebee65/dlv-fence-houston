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
  title: 'DLV Gate Masters | Custom Gates & Professional Fences in Houston',
  description: 'DLV Fence and Gate Masters LLC: Expert fabrication, professional installation, and reliable repairs in Houston. Specializing in LiftMaster™ automated systems and custom metal art.',
  keywords: [
    'Gate installation Houston',
    'Custom wrought iron gates',
    'Fence repair Houston',
    'LiftMaster gate operators',
    'Commercial fencing Houston',
    'Metal art fabrication',
    'Driveway gates Texas',
    'Residential security fences'
  ],
  alternates: {
    canonical: 'https://dlv-gate-masters.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'DLV Gate Masters | Custom Gates & Professional Fences in Houston',
    description: 'DLV Fence and Gate Masters LLC: Expert fabrication, professional installation, and reliable repairs in Houston. Specializing in LiftMaster™ automated systems and custom metal art.',
    url: 'https://dlv-gate-masters.com',
    siteName: 'DLV Gate Masters LLC',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'DLV Gate Masters | Custom Gates & Perimeter Security',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DLV Gate Masters | Custom Gates & Professional Fences in Houston',
    description: 'Expert fabrication, professional installation, and reliable repairs in Houston.',
    images: ['/og-image.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebas.variable} ${manrope.variable} bg-brand-black text-white antialiased selection:bg-brand-amber selection:text-brand-black`}>
        <div className="noise-overlay"></div>
        <div className="bg-blueprint fixed inset-0 -z-50 pointer-events-none"></div>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
