"use client";

import { Canvas } from "@react-three/fiber";
import Spade3D from "./Spade3D";
import React, { useState, useEffect } from "react";

// WebGLErrorBoundary prevents a complete white screen if WebGL fails
class WebGLErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <div className="fixed inset-0 z-0 bg-[var(--background)] opacity-50" />;
    }
    return this.props.children;
  }
}

export default function HeroScene() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <WebGLErrorBoundary>
        <Canvas 
          shadows
          camera={{ position: [0, 0, 15], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <Spade3D />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
