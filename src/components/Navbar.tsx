import { siteConfig } from '../data/site-config';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-brand-black/95 backdrop-blur-md border-b-2 border-brand-steel transition-all duration-300">
      <div className="px-4 sm:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          <div className="flex-shrink-0 flex flex-col">
            <span className="font-display text-xl sm:text-2xl md:text-5xl tracking-normal text-white uppercase leading-none">
              DLV GATE <span className="text-brand-copper">MASTERS</span>
            </span>
            <span className="font-body text-[7px] sm:text-[9px] md:text-xs text-brand-gray uppercase tracking-[0.2em] mt-1 md:mt-1.5 leading-none opacity-80">
              DLV Fence and Gate Masters LLC
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end mr-4">
              <a href={`tel:${siteConfig.phones.english.value}`} className="font-display text-lg text-white hover:text-brand-amber leading-none mb-1">
                {siteConfig.phones.english.label} (EN)
              </a>
              <a href={`tel:${siteConfig.phones.spanish.value}`} className="font-display text-lg text-white hover:text-brand-amber leading-none">
                {siteConfig.phones.spanish.label} (ES)
              </a>
            </div>
            <a 
              href={siteConfig.phones.spanish.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-display text-base md:text-2xl px-4 py-1.5 md:px-6 md:py-2 bg-brand-amber text-brand-black uppercase leading-none hover:bg-white hover:text-brand-black transition-colors duration-0"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
