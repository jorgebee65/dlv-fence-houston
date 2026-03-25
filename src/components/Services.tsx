import Image from 'next/image';

const SERVICES = [
  {
    id: "iron",
    title: "Iron & Wrought Iron",
    desc: "Extreme durability, perimeter security, and classic hand-forged elegance for luxury estates.",
    image: "/icons/iron.webp"
  },
  {
    id: "aluminum",
    title: "Aluminum",
    desc: "Maintenance-free, lightweight, and corrosion-resistant solutions for modern residential fencing.",
    image: "/icons/aluminum.webp"
  },
  {
    id: "sheet-metal",
    title: "Sheet Metal & Corrugated",
    desc: "Total privacy and a bold modern/industrial aesthetic for contemporary properties.",
    image: "/icons/sheet-metal.webp"
  },
  {
    id: "chainlink",
    title: "Chainlink",
    desc: "Functional, cost-effective, and clear delimitation for commercial and industrial perimeters.",
    image: "/icons/chainlink.webp"
  },
  {
    id: "custom-art",
    title: "Custom Metal Art",
    desc: "Unique plasma-cut designs, logos, and signature pieces crafted for specialized architectural projects.",
    image: "/icons/custom-art.webp"
  },
  {
    id: "automated",
    title: "Premier LiftMaster™ Automation",
    desc: "We specialize in the professional installation of LiftMaster™ residential and commercial operators.",
    image: "/icons/automated.webp"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-brand-black relative">
      <div className="px-4 sm:px-8 max-w-screen-2xl mx-auto relative z-10">
        <h2 className="font-display text-4xl sm:text-6xl md:text-8xl text-brand-copper uppercase tracking-tighter mb-12 md:mb-20">
          Our Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative h-[400px] md:h-[500px] overflow-hidden border-2 border-brand-steel transition-all duration-500 hover:border-brand-amber"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transition-transform duration-700 md:group-hover:scale-110 opacity-60 md:group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10" />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end gap-4 transform transition-transform duration-500">
                <div className="h-1 w-full md:w-12 bg-brand-amber mb-2 transition-all duration-500 md:group-hover:w-full" />
                <h3 className="font-display text-3xl md:text-5xl text-white leading-none uppercase">
                  {service.title}
                </h3>
                <p className="font-body text-brand-gray text-base md:text-lg leading-snug max-w-[90%] md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform md:translate-y-4 md:group-hover:translate-y-0 text-white font-medium opacity-100 translate-y-0">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
