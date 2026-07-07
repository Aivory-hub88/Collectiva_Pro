"use client";

import { useRef, useMemo } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Center, Float, Environment } from "@react-three/drei";
import * as THREE from "three";

// Function to generate a stylized 'Spade' like shape
function createSpadeShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 12);
  shape.bezierCurveTo(15, 0, 20, -8, 10, -12);
  shape.bezierCurveTo(5, -14, 0, -8, 0, -8);
  shape.bezierCurveTo(0, -8, -5, -14, -10, -12);
  shape.bezierCurveTo(-20, -8, -15, 0, 0, 12);
  return shape;
}

function createStemShape() {
  const shape = new THREE.Shape();
  shape.moveTo(0, -8);
  shape.lineTo(4, -18);
  shape.lineTo(-4, -18);
  shape.lineTo(0, -8);
  return shape;
}

const scaleKeyframes = [
  { x: 0, y: 0.25 }, { x: 1, y: 0.12 }, { x: 2.5, y: 0.12 },
  { x: 3.5, y: 0.2 }, { x: 4.5, y: 0.2 }, { x: 5.5, y: 0.15 }, { x: 10, y: 0.15 }
];
const posXKeyframes = [
  { x: 0, y: 0 }, { x: 1, y: 4 }, { x: 2.5, y: 4 },
  { x: 3.5, y: 7.5 }, { x: 4.5, y: 7.5 }, { x: 5.5, y: 4.0 }, { x: 10, y: 4.0 }
];
const posYKeyframes = [
  { x: 0, y: 0 }, { x: 1, y: -2 }, { x: 2.5, y: -2 },
  { x: 3.5, y: 0 }, { x: 4.5, y: 0 }, { x: 5.5, y: 0.5 }, { x: 10, y: 0.5 }
];
const rotXKeyframes = [
  { x: 0, y: 0 }, { x: 1, y: 0.5 }, { x: 2.5, y: 0.5 },
  { x: 3.5, y: -0.2 }, { x: 4.5, y: -0.2 }, { x: 5.5, y: 0 }, { x: 10, y: 0 }
];

function getInterp(x: number, frames: {x: number, y: number}[]) {
  if (x <= frames[0].x) return frames[0].y;
  if (x >= frames[frames.length - 1].x) return frames[frames.length - 1].y;
  for (let i = 0; i < frames.length - 1; i++) {
    if (x >= frames[i].x && x <= frames[i+1].x) {
      const p = (x - frames[i].x) / (frames[i+1].x - frames[i].x);
      return THREE.MathUtils.lerp(frames[i].y, frames[i+1].y, p);
    }
  }
  return 0;
}

export default function Spade3D() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 10;
  
  const spadeShape = useMemo(() => createSpadeShape(), []);
  const stemShape = useMemo(() => createStemShape(), []);

  const extrudeSettings = {
    depth: 4,
    bevelEnabled: true,
    bevelSegments: 8,
    curveSegments: 36, // Increased for smoother curves without heavy performance hit
    steps: 2,
    bevelSize: 1.5,
    bevelThickness: 1.5,
  };

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      const vh = typeof window !== 'undefined' ? window.innerHeight : 1000;
      const scrollRatio = scrollY / vh;
      const wobbleX = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      const baseScale = getInterp(scrollRatio, scaleKeyframes);
      const targetScale = isMobile ? baseScale * 0.7 : baseScale;
      
      const basePosX = getInterp(scrollRatio, posXKeyframes);
      // On mobile, reduce X offset so it doesn't go offscreen
      const targetPosX = isMobile ? basePosX * 0.3 : basePosX;

      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.1));
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPosX, 0.1);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, getInterp(scrollRatio, posYKeyframes), 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, getInterp(scrollRatio, rotXKeyframes) + wobbleX, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={0.25}>
        <Center>
          {/* Main Spade Body */}
          <mesh castShadow receiveShadow>
            <extrudeGeometry args={[spadeShape, extrudeSettings]} />
            <meshPhysicalMaterial 
              color="#b3b3b3"
              metalness={0.9}
              roughness={0.35}
              clearcoat={0.4}
              clearcoatRoughness={0.2}
              envMapIntensity={2.5}
            />
          </mesh>
          {/* Stem */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <extrudeGeometry args={[stemShape, extrudeSettings]} />
            <meshPhysicalMaterial 
              color="#b3b3b3"
              metalness={0.9}
              roughness={0.35}
              clearcoat={0.4}
              clearcoatRoughness={0.2}
              envMapIntensity={2.5}
            />
          </mesh>
        </Center>
      </group>
      
      {/* 
        Procedural Environment: 
        This renders the meshes below into an invisible 360 map used ONLY for reflections.
        Zero downloads = No CSP errors!
      */}
      <Environment resolution={256}>
        <group>
          {/* Main ceiling light (white reflection) */}
          <mesh position={[0, 50, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          {/* Side fill light (soft blueish reflection) */}
          <mesh position={[-50, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial color="#e0f2fe" />
          </mesh>
          {/* Back fill light */}
          <mesh position={[50, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial color="#fdf4ff" />
          </mesh>
          {/* Dark floor for contrast */}
          <mesh position={[0, -50, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        </group>
      </Environment>

      {/* Main directional light for specular highlights and shadows */}
      <directionalLight position={[10, 20, 10]} intensity={2} color="#ffffff" castShadow />
      <ambientLight intensity={0.5} />
    </Float>
  );
}
