import { siteConfig } from '../data/site-config';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Our <span className="text-amber-500">Services</span></h2>
          <p className="mt-4 text-slate-400 text-lg">Premium materials and expert craftsmanship.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service) => (
            <div key={service} className="group relative bg-slate-950 border border-slate-800 p-8 rounded-xl hover:border-amber-500/50 transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{service}</h3>
              <p className="text-slate-400">Custom fabrication and installation of high-quality {service.toLowerCase()} fencing and gates in Houston.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
