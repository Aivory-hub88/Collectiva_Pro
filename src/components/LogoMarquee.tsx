"use client";

import React from 'react';

export default function LogoMarquee() {
  const logos = [
    { name: 'Expo City Dubai', src: 'https://uaelogos.ae/storage/4242/conversions/Expo-City-Dubai-thumb.png', type: 'image' },
    { name: 'Roast & Bake', src: '/images/roast_bake.svg', type: 'image' },
    { name: 'Nuitree', src: '/images/logo-nuitree.png', type: 'image' },
    { name: 'Aivory', src: '/images/logo-aivory.png', type: 'image' },
    { name: 'Heinz', src: '/images/heinz_2026_logo.svg', type: 'image' },
    { name: 'Coca Cola', src: '/images/Coca_Cola_logo%202026.svg', type: 'image' },
    { name: 'Fiat', src: '/images/fiat.svg', type: 'image' },
    { name: 'Farmers Market', src: '/images/farmers-market-99.svg', type: 'image' },
    { name: 'Nike', src: '/images/nike_Logo.svg', type: 'image' },
    { name: 'ZenSend', src: '/images/ZenSendLogo_white.svg', type: 'image' },
    { name: 'Chip Happens', src: '/images/chip_happens.svg', type: 'image' },
  ];

  // Duplicate for seamless infinite scrolling
  const marqueeLogos = [...logos, ...logos];

  return (
    <div className="w-full py-16 overflow-hidden relative border-y border-[var(--foreground)]/10 mt-8">
      
      <div className="flex w-max animate-marquee">
        {marqueeLogos.map((logo, index) => (
          <div key={`${logo.name}-${index}`} className="flex items-center justify-center w-[250px] mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {logo.type === 'image' && logo.src ? (
              <div 
                aria-label={`${logo.name} logo`}
                className="h-[60px] w-[200px] bg-[var(--foreground)]"
                style={{
                  maskImage: `url('${logo.src}')`,
                  WebkitMaskImage: `url('${logo.src}')`,
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain',
                  maskPosition: 'center',
                  WebkitMaskPosition: 'center',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                }}
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
