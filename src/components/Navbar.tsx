import { siteConfig } from '../data/site-config';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="font-black text-xl md:text-2xl tracking-tighter text-white">
              DLV <span className="text-amber-500">FENCE & GATE</span>
            </span>
          </div>
          <div>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-400 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
