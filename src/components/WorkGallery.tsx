'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import inventoryData from '../data/inventory.json';

const TABS = ["All", "Iron", "Aluminum", "Sheet Metal", "Chainlink", "Custom"];

export default function WorkGallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayData, setDisplayData] = useState(inventoryData);

  const filteredItems = useMemo(() => {
    return inventoryData.filter((item) => {
      if (activeTab === "All") return true;
      const mat = (item.material || "").toLowerCase();
      
      switch (activeTab) {
        case "Iron":
          return mat.includes("iron");
        case "Aluminum":
          return mat.includes("alumin");
        case "Sheet Metal":
          return mat.includes("corrugated") || mat.includes("sheet");
        case "Chainlink":
          return mat.includes("chain");
        case "Custom":
          return mat.includes("custom") || mat.includes("wood"); // Grouping wood into custom
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
    }, 300); // 300ms fade transition
  };

  // Ensure data updates on first tab switch
  useEffect(() => {
    setDisplayData(filteredItems);
  }, [filteredItems]);

  return (
    <section id="gallery" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Our <span className="text-amber-500">Portfolio</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Heavy duty fabrication for Houston&apos;s toughest environments.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          {displayData.map((item, idx) => {
            const isVideo = item.archivo.endsWith('.mp4');
            const materialShort = item.material.split('/')[0].trim();

            return (
              <div
                key={item.archivo + idx}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg hover:shadow-amber-500/20 transition-all duration-500"
              >
                {isVideo ? (
                  <video
                    src={`/portfolio/${item.archivo}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  />
                ) : (
                  <Image
                    src={`/portfolio/${item.archivo}`}
                    alt={item.notas || `${item.categoria} - ${item.material}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-70 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-amber-500 font-black text-xs tracking-widest uppercase mb-1 drop-shadow-md">
                    {item.categoria}
                  </span>
                  <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">
                    {materialShort}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {displayData.length === 0 && !isAnimating && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
