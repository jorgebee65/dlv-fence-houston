import { siteConfig } from '../data/site-config';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 uppercase">
          Expert Fence & Gate <br className="hidden md:block" />
          <span className="text-amber-500">Solutions in Houston, TX</span>
        </h1>
        <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto mb-10">
          From custom wrought iron to high-privacy corrugated metal. We build durable, secure, and stunning perimeters for residential and commercial properties.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-950 bg-amber-500 rounded-md hover:bg-amber-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
            Get a Free Quote
          </a>
          <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-slate-700 rounded-md hover:border-slate-500 hover:bg-slate-800 transition-all">
            View Our Services
          </a>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
