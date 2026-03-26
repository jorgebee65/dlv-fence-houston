import { siteConfig } from '../data/site-config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col border-b-4 border-brand-amber pt-20">
      {/* Main Content Area */}
      <div className="flex-grow flex flex-col justify-center px-4 sm:px-8 py-12 relative z-10">
        <div className="max-w-screen-2xl mx-auto w-full">
          <p className="font-body text-brand-amber font-bold tracking-widest uppercase mb-4 md:mb-8 text-xs md:text-lg reveal-1">
            &frasl;&frasl;&frasl; Structural Integrity &amp; Design
          </p>
          
          <h1 className="font-display text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.85] md:leading-[0.8] tracking-tight text-white mb-10 md:mb-12 reveal-2 mix-blend-exclusion uppercase">
            We Forge. <span className="text-brand-amber">We Install.</span>
            <br /> 
            We Protect.
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between reveal-3">
            <div className="space-y-8 max-w-3xl">
              <p className="font-body text-brand-gray text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Houston’s premier metal experts for industrial-grade gates, custom art, and heavy-duty privacy. 
                From professional repairs and precision installations to custom fabrication from scratch—we deliver 
                elite craftsmanship across Houston and all surrounding areas. Built to outlast the Texas elements, 
                designed to impress.
              </p>
              
              <div className="border-t border-brand-steel pt-8 space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <p className="font-display text-brand-amber text-lg tracking-wider uppercase min-w-[120px]">Office Number:</p>
                  <a href={`tel:${siteConfig.phones.office.value}`} className="font-display text-3xl md:text-5xl text-white hover:text-brand-amber transition-colors leading-none">
                    {siteConfig.phones.office.label}
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  <div>
                    <p className="font-display text-brand-amber text-lg mb-2 tracking-wider uppercase text-sm opacity-70">Direct English</p>
                    <a href={`tel:${siteConfig.phones.english.value}`} className="font-display text-2xl md:text-3xl text-white hover:text-brand-amber block transition-colors leading-none">
                      {siteConfig.phones.english.label}
                    </a>
                    <a href={siteConfig.phones.english.whatsapp} target="_blank" rel="noopener noreferrer" className="font-body text-[10px] text-brand-gray hover:text-white underline uppercase tracking-widest mt-3 block">
                      WhatsApp Available
                    </a>
                  </div>
                  <div>
                    <p className="font-display text-brand-amber text-lg mb-2 tracking-wider uppercase text-sm opacity-70">Direct Español</p>
                    <a href={`tel:${siteConfig.phones.spanish.value}`} className="font-display text-2xl md:text-3xl text-white hover:text-brand-amber block transition-colors leading-none">
                      {siteConfig.phones.spanish.label}
                    </a>
                    <a href={siteConfig.phones.spanish.whatsapp} target="_blank" rel="noopener noreferrer" className="font-body text-[10px] text-brand-gray hover:text-white underline uppercase tracking-widest mt-3 block">
                      WhatsApp Disponible
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href={siteConfig.phones.english.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center border-2 border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-brand-black font-display text-2xl md:text-4xl px-8 py-4 md:px-12 md:py-6 transition-colors duration-0 w-full lg:w-max uppercase mb-2"
            >
              Get a Quote &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Banner - No longer absolute bottom to prevent overlap */}
      <div className="w-full bg-brand-amber py-3 md:py-4 overflow-hidden border-t-2 border-black z-20">
        <div className="flex whitespace-nowrap font-display text-xl md:text-4xl text-brand-black uppercase items-center">
          <div className="animate-marquee inline-flex gap-4 md:gap-8 px-2 md:px-4">
            <span>CUSTOM METAL ART</span> <span className="text-white">+++</span>
            <span>WROUGHT IRON GATES</span> <span className="text-white">+++</span>
            <span>CORRUGATED FENCES</span> <span className="text-white">+++</span>
            <span>SLIDING SYSTEMS</span> <span className="text-white">+++</span>
            <span>ALUMINUM</span> <span className="text-white">+++</span>
            <span>STRUCTURAL FABRICATION</span> <span className="text-white">+++</span>
          </div>
          <div className="animate-marquee inline-flex gap-4 md:gap-8 px-2 md:px-4" aria-hidden="true">
            <span>CUSTOM METAL ART</span> <span className="text-white">+++</span>
            <span>WROUGHT IRON GATES</span> <span className="text-white">+++</span>
            <span>CORRUGATED FENCES</span> <span className="text-white">+++</span>
            <span>SLIDING SYSTEMS</span> <span className="text-white">+++</span>
            <span>ALUMINUM</span> <span className="text-white">+++</span>
            <span>STRUCTURAL FABRICATION</span> <span className="text-white">+++</span>
          </div>
        </div>
      </div>
    </section>
  );
}
