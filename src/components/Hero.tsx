import { siteConfig } from '../data/site-config';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center overflow-hidden border-b-4 border-brand-amber pt-16">
      <div className="px-4 sm:px-8 mt-12 md:mt-0 relative z-10">
        <div className="max-w-screen-2xl">
          <p className="font-body text-brand-amber font-bold tracking-widest uppercase mb-2 md:mb-8 text-xs md:text-lg reveal-1">
            &frasl;&frasl;&frasl; Structural Integrity &amp; Design
          </p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.85] md:leading-[0.8] tracking-tight text-white mb-8 md:mb-10 reveal-2 mix-blend-exclusion uppercase">
            We Forge. <span className="text-brand-amber">We Install.</span>
            <br /> 
            We Protect.
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between reveal-3">
            <div className="space-y-6 max-w-3xl">
              <p className="font-body text-brand-gray text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Houston’s premier metal experts for industrial-grade gates, custom art, and heavy-duty privacy. 
                From professional repairs and precision installations to custom fabrication from scratch—we deliver 
                elite craftsmanship across Houston and all surrounding areas. Built to outlast the Texas elements, 
                designed to impress.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-brand-steel pt-6">
                <div>
                  <p className="font-display text-brand-amber text-lg mb-1 tracking-wider uppercase">English</p>
                  <a href={`tel:${siteConfig.phones.english.value}`} className="font-display text-2xl md:text-3xl text-white hover:text-brand-amber block transition-colors leading-none">
                    {siteConfig.phones.english.label}
                  </a>
                  <a href={siteConfig.phones.english.whatsapp} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-brand-gray hover:text-white underline uppercase tracking-widest mt-2 block">
                    WhatsApp Available
                  </a>
                </div>
                <div>
                  <p className="font-display text-brand-amber text-lg mb-1 tracking-wider uppercase">Español</p>
                  <a href={`tel:${siteConfig.phones.spanish.value}`} className="font-display text-2xl md:text-3xl text-white hover:text-brand-amber block transition-colors leading-none">
                    {siteConfig.phones.spanish.label}
                  </a>
                  <a href={siteConfig.phones.spanish.whatsapp} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-brand-gray hover:text-white underline uppercase tracking-widest mt-2 block">
                    WhatsApp Disponible
                  </a>
                </div>
              </div>
            </div>
            
            <a 
              href={siteConfig.phones.english.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center border-2 border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-brand-black font-display text-xl md:text-3xl px-6 py-3 md:px-10 md:py-5 transition-colors duration-0 w-full md:w-max mb-1 uppercase"
            >
              Get a Quote &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 w-full bg-brand-amber py-2 md:py-3 overflow-hidden border-t-2 border-black z-20">
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
