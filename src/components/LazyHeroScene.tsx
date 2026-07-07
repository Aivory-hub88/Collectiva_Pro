"use client";

import dynamic from "next/dynamic";

// Lazy load to keep initial HTML payload light
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-[var(--background)]" />,
});

export default function LazyHeroScene() {
  return <HeroScene />;
}
