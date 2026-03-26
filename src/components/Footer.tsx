import { siteConfig } from '../data/site-config';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t-2 border-brand-steel py-12 md:py-20">
      <div className="px-4 sm:px-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-display text-3xl md:text-5xl text-white uppercase leading-none mb-2">
                DLV GATE <span className="text-brand-copper">MASTERS</span>
              </span>
              <span className="font-body text-xs md:text-sm text-brand-gray uppercase tracking-widest opacity-80">
                DLV Fence and Gate Masters LLC
              </span>
            </div>
            <p className="font-body text-brand-gray text-sm md:text-base max-w-md">
              Elite metal fabrication and perimeter security solutions. 
              Serving Houston, TX and all surrounding areas with professional 
              craftsmanship and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h4 className="font-display text-brand-amber text-xl mb-4 tracking-wider uppercase">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href={`tel:${siteConfig.phones.english.value}`} className="font-body text-white hover:text-brand-amber transition-colors">
                    {siteConfig.phones.english.label} (English)
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phones.spanish.value}`} className="font-body text-white hover:text-brand-amber transition-colors">
                    {siteConfig.phones.spanish.label} (Español)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-brand-amber text-xl mb-4 tracking-wider uppercase">Service Area</h4>
              <p className="font-body text-brand-gray text-sm md:text-base">
                Houston, Cypress, Sugar Land, <br />
                The Woodlands, Katy, and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 pt-8 border-t border-brand-steel flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-brand-gray text-[10px] md:text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} DLV Fence and Gate Masters LLC. All rights reserved.
          </p>
          <p className="font-body text-brand-gray text-[10px] md:text-xs uppercase tracking-widest">
            Designed & Forge by <span className="text-white font-bold">George 🐳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
