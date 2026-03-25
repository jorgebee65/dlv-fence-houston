import { siteConfig } from '../data/site-config';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center overflow-hidden border-b-4 border-brand-orange pt-16">
      <div className="px-4 sm:px-8 mt-12 md:mt-0 relative z-10">
        <div className="max-w-screen-2xl">
          <p className="font-body text-brand-orange font-bold tracking-widest uppercase mb-2 md:mb-8 text-xs md:text-lg reveal-1">
            &frasl;&frasl;&frasl; Structural Integrity &amp; Design
          </p>
          <h1 className="font-display text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.85] md:leading-[0.8] tracking-tight text-white mb-8 md:mb-10 reveal-2 mix-blend-exclusion">
            WE <span className="text-brand-orange">FORGE</span>
            <br /> 
            HOUSTON
          </h1>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-end justify-between reveal-3">
            <p className="font-body text-brand-gray text-base sm:text-lg md:text-2xl max-w-xl font-medium leading-relaxed">
              Industrial grade gates, custom metal art, and heavy-duty privacy perimeters built to outlast the Texas elements.
            </p>
            
            <a 
              href={siteConfig.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-black font-display text-xl md:text-3xl px-6 py-3 md:px-10 md:py-5 transition-colors duration-0 w-full md:w-max"
            >
              Get a Quote &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 w-full bg-brand-orange py-2 md:py-3 overflow-hidden border-t-2 border-black z-20">
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
