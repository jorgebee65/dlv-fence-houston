import { siteConfig } from '../data/site-config';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-brand-black border-b-2 border-brand-steel mix-blend-difference">
      <div className="px-4 sm:px-8">
        <div className="flex justify-between items-center h-14 md:h-20">
          <div className="flex-shrink-0">
            <span className="font-display text-2xl md:text-5xl tracking-normal text-white">
              DLV <span className="text-brand-orange">MASTERS</span>
            </span>
          </div>
          <div>
            <a 
              href={siteConfig.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-display text-base md:text-2xl px-4 py-1.5 md:px-6 md:py-2 bg-brand-orange text-brand-black uppercase leading-none hover:bg-white hover:text-brand-black transition-colors duration-0"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
