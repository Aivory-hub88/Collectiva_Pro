"use client";

import React from 'react';

export default function LogoMarquee() {
  const logos = [
    { name: 'Expo City Dubai', src: 'https://uaelogos.ae/storage/4242/conversions/Expo-City-Dubai-thumb.png', type: 'image' },
    { name: 'Nuitree', src: '/images/logo-nuitree.png', type: 'image' },
    { name: 'Aivory', src: '/images/logo-aivory.png', type: 'image' },
    { name: 'Artifisial', src: '/images/logo-artifisial.png', type: 'image' },
    { name: 'Heinz', src: '/images/heinz_2026_logo.svg', type: 'image' },
    { name: 'Coca Cola', src: '/images/Coca_Cola_logo%202026.svg', type: 'image' },
    { name: 'Piattos', src: 'https://www.urc.co.id/wp-content/uploads/2026/04/logo-piattos.png', type: 'image' },
  ];

  // Duplicate for seamless infinite scrolling
  const marqueeLogos = [...logos, ...logos];

  return (
    <div className="w-full py-16 overflow-hidden relative border-y border-[var(--foreground)]/10 mt-8">
      
      <div className="flex w-max animate-marquee">
        {marqueeLogos.map((logo, index) => (
          <div key={`${logo.name}-${index}`} className="flex items-center justify-center w-[250px] mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {logo.type === 'image' && logo.src ? (
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="max-h-[60px] max-w-[200px] object-contain brightness-0 invert"
              />
            ) : (
              <h3 className="text-4xl font-black tracking-tighter uppercase text-white">{logo.name}</h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
