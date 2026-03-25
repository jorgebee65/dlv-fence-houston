export default function Services() {
  const services = [
    { title: "Custom Gates", desc: "Sliding, swing, and automated iron gate systems." },
    { title: "Wrought Iron Fencing", desc: "Tubular, spear-top, and ornamental boundaries." },
    { title: "Corrugated Metal", desc: "High-privacy, ultra-durable property enclosures." },
    { title: "Custom Metal Art", desc: "Plasma cut designs, logos, and custom scenes." },
    { title: "Commercial Fencing", desc: "Flat-top steel, expanded metal, and security barriers." }
  ];

  return (
    <section id="services" className="py-16 md:py-24 border-b-4 border-brand-steel relative bg-brand-black">
      <div className="px-4 sm:px-8 max-w-screen-2xl mx-auto relative z-10">
        <h2 className="font-display text-4xl sm:text-6xl md:text-8xl text-brand-steel uppercase tracking-tighter mb-8 md:mb-12 mix-blend-difference">
          Our Capabilities
        </h2>
        
        <div className="border-t-2 border-brand-steel">
          {services.map((service, i) => (
            <div 
              key={service.title} 
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 md:py-16 border-b-2 border-brand-steel hover:bg-brand-orange hover:px-2 md:hover:px-6 transition-all duration-300"
            >
              <div className="flex gap-4 md:gap-6 items-baseline mb-2 md:mb-0">
                <span className="font-display text-xl md:text-4xl text-brand-gray group-hover:text-black">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl sm:text-5xl md:text-7xl text-white group-hover:text-black m-0 uppercase leading-none">
                  {service.title}
                </h3>
              </div>
              <p className="font-body text-sm md:text-xl text-brand-gray group-hover:text-brand-black font-semibold max-w-sm text-left md:text-right mt-2 md:mt-0">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
