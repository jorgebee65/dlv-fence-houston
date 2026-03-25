'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import inventoryData from '../data/inventory.json';

const TABS = ["ALL", "GATES", "FENCES", "CORRUGATED", "CUSTOM ART", "WOOD"];

export default function WorkGallery() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayData, setDisplayData] = useState(inventoryData);

  const filteredItems = useMemo(() => {
    return inventoryData.filter((item) => {
      if (activeTab === "ALL") return true;
      const mat = (item.material || "").toLowerCase();
      const cat = (item.categoria || "").toLowerCase();
      
      switch (activeTab) {
        case "GATES":
          return cat.includes("gate");
        case "FENCES":
          return cat.includes("fence");
        case "CORRUGATED":
          return mat.includes("corrugated");
        case "CUSTOM ART":
          return mat.includes("custom") || mat.includes("laser");
        case "WOOD":
          return mat.includes("wood");
        default:
          return true;
      }
    });
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setDisplayData(filteredItems);
      setIsAnimating(false);
    }, 200);
  };

  useEffect(() => {
    setDisplayData(filteredItems);
  }, [filteredItems]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
      <div className="px-4 sm:px-8 max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-8">
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none m-0">
            THE <span className="text-brand-amber">ARCHIVE</span>
          </h2>
          <p className="font-body text-brand-gray font-bold uppercase tracking-widest text-xs md:text-sm max-w-sm text-left md:text-right">
            Heavy duty fabrication for Houston&apos;s toughest environments. Filter by specification.
          </p>
        </div>

        {/* Brutalist Filters */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10 md:mb-16">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`font-display text-base md:text-3xl px-4 py-1.5 md:px-6 md:py-2 uppercase transition-all duration-0 border-2 flex-grow sm:flex-grow-0 text-center ${
                activeTab === tab
                  ? "bg-brand-amber text-brand-black border-brand-amber"
                  : "bg-transparent text-brand-gray border-brand-steel hover:border-brand-amber hover:text-brand-amber"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 transition-opacity duration-200 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {displayData.map((item, idx) => {
            const isVideo = item.archivo.endsWith('.mp4');
            const materialShort = item.material.split('/')[0].trim().toUpperCase();

            return (
              <div
                key={item.archivo + idx}
                className="group relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] bg-brand-steel overflow-hidden border-2 md:border-4 border-transparent hover:border-brand-amber transition-all duration-0"
              >
                {isVideo ? (
                  <video
                    src={`/portfolio/${item.archivo}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full grayscale-0"
                    onError={(e) => {
                      // Remove broken videos from view
                      const target = e.currentTarget.parentElement;
                      if (target) target.style.display = 'none';
                    }}
                  />
                ) : (
                  <Image
                    src={`/portfolio/${item.archivo}`}
                    alt={item.notas || `${item.categoria} - ${item.material}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale-0"
                    loading="lazy"
                    onError={(e) => {
                      // Remove broken images from view
                      const target = e.currentTarget.parentElement;
                      if (target) target.style.display = 'none';
                    }}
                  />
                )}

                {/* Industrial Hover Block - Always visible on mobile, hover on desktop */}
                <div className="absolute bottom-0 left-0 w-full bg-brand-amber text-brand-black p-4 md:p-6 transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-end">
                  <span className="font-body font-bold text-[10px] md:text-xs tracking-widest uppercase mb-1 md:mb-2 text-black/60">
                    ID: {item.archivo.slice(0, 10)}
                  </span>
                  <h3 className="font-display text-2xl md:text-4xl leading-none m-0">
                    {item.categoria.toUpperCase()}
                  </h3>
                  <p className="font-display text-lg md:text-2xl m-0 text-black/80 md:mt-1">
                    {materialShort}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {displayData.length === 0 && !isAnimating && (
          <div className="border-2 md:border-4 border-brand-amber p-8 md:p-12 text-center mt-8 md:mt-12 bg-brand-steel/10">
            <p className="font-display text-2xl md:text-4xl text-brand-amber uppercase">NO ASSETS MATCH CURRENT FILTERS.</p>
          </div>
        )}
      </div>
    </section>
  );
}
