import Image from 'next/image';

const SERVICES = [
  {
    id: "iron",
    title: "Iron & Wrought Iron",
    desc: "Extreme durability, perimeter security, and classic hand-forged elegance for luxury estates.",
    icon: "/icons/iron.webp"
  },
  {
    id: "aluminum",
    title: "Aluminum",
    desc: "Maintenance-free, lightweight, and corrosion-resistant solutions for modern residential fencing.",
    icon: "/icons/aluminum.webp"
  },
  {
    id: "sheet-metal",
    title: "Sheet Metal & Corrugated",
    desc: "Total privacy and a bold modern/industrial aesthetic for contemporary properties.",
    icon: "/icons/sheet-metal.webp"
  },
  {
    id: "chainlink",
    title: "Chainlink",
    desc: "Functional, cost-effective, and clear delimitation for commercial and industrial perimeters.",
    icon: "/icons/chainlink.svg"
  },
  {
    id: "custom-art",
    title: "Custom Metal Art",
    desc: "Unique plasma-cut designs, logos, and signature pieces crafted for specialized architectural projects.",
    icon: "/icons/custom-art.svg"
  },
  {
    id: "automated",
    title: "Automated Systems",
    desc: "Smart access solutions including sliding and swinging gates for high security and daily convenience.",
    icon: "/icons/automated.webp"
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
              className="group p-8 border-2 border-brand-steel bg-brand-steel/30 hover:border-brand-amber transition-all duration-300 flex flex-col items-start gap-6"
            >
              <div className="w-16 h-16 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  fill 
                  className="object-contain"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-brand-amber transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-brand-gray text-base md:text-lg leading-relaxed">
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
