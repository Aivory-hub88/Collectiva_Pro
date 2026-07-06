"use client";

import { Canvas } from "@react-three/fiber";
import Spade3D from "./Spade3D";
import { Suspense } from "react";

export default function HeroScene() {
  return (
    <div className="fixed inset-0 z-0 opacity-100 pointer-events-none transition-all duration-300">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <Suspense fallback={null}>
          <Spade3D />
        </Suspense>
      </Canvas>
    </div>
  );
}
