import { siteConfig } from '../data/site-config';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b-4 border-brand-orange">
      <div className="px-4 sm:px-8 mt-24 md:mt-0 relative z-10">
        <div className="max-w-screen-2xl">
          <p className="font-body text-brand-orange font-bold tracking-widest uppercase mb-4 md:mb-8 text-sm md:text-lg reveal-1">
            &frasl;&frasl;&frasl; Structural Integrity &amp; Design
          </p>
          <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-[0.8] tracking-tight text-white mb-6 md:mb-10 reveal-2 mix-blend-exclusion">
            WE <span className="text-brand-orange">FORGE</span>
            <br /> 
            HOUSTON
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between reveal-3">
            <p className="font-body text-brand-gray text-lg md:text-2xl max-w-xl font-medium leading-relaxed">
              Industrial grade gates, custom metal art, and heavy-duty privacy perimeters built to outlast the Texas elements.
            </p>
            
            <a 
              href={siteConfig.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-black font-display text-3xl px-10 py-5 transition-colors duration-0 w-max"
            >
              Get a Quote &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 w-full bg-brand-orange py-3 overflow-hidden border-t-2 border-black z-20">
        <div className="flex whitespace-nowrap font-display text-4xl text-brand-black uppercase">
          <div className="animate-marquee inline-flex gap-8 px-4">
            <span>CUSTOM METAL ART</span> <span className="text-white">+++</span>
            <span>WROUGHT IRON GATES</span> <span className="text-white">+++</span>
            <span>CORRUGATED FENCES</span> <span className="text-white">+++</span>
            <span>SLIDING SYSTEMS</span> <span className="text-white">+++</span>
            <span>ALUMINUM</span> <span className="text-white">+++</span>
            <span>STRUCTURAL FABRICATION</span> <span className="text-white">+++</span>
          </div>
          <div className="animate-marquee inline-flex gap-8 px-4" aria-hidden="true">
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
