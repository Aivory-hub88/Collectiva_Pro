"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// Function to generate a stylized 'Spade' like shape
function createSpadeShape() {
  const shape = new THREE.Shape();
  
  // Tip of the spade
  shape.moveTo(0, 12);
  
  // Right side curve
  shape.bezierCurveTo(15, 0, 20, -8, 10, -12);
  shape.bezierCurveTo(5, -14, 0, -8, 0, -8);
  
  // Left side curve
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
  { x: 0, y: 0.25 },
  { x: 1, y: 0.12 },
  { x: 2.5, y: 0.12 },
  { x: 3.5, y: 0.2 },
  { x: 4.5, y: 0.2 },
  { x: 5.5, y: 0.15 },
  { x: 10, y: 0.15 }
];

const posXKeyframes = [
  { x: 0, y: 0 },
  { x: 1, y: 4 },
  { x: 2.5, y: 4 },
  { x: 3.5, y: 7.5 },
  { x: 4.5, y: 7.5 },
  { x: 5.5, y: 4.0 },
  { x: 10, y: 4.0 }
];

const posYKeyframes = [
  { x: 0, y: 0 },
  { x: 1, y: -2 },
  { x: 2.5, y: -2 },
  { x: 3.5, y: 0 },
  { x: 4.5, y: 0 },
  { x: 5.5, y: 1.0 },
  { x: 10, y: 1.0 }
];

const rotXKeyframes = [
  { x: 0, y: 0 },
  { x: 1, y: 0.5 },
  { x: 2.5, y: 0.5 },
  { x: 3.5, y: -0.2 },
  { x: 4.5, y: -0.2 },
  { x: 5.5, y: 0 },
  { x: 10, y: 0 }
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
  
  const spadeShape = useMemo(() => createSpadeShape(), []);
  const stemShape = useMemo(() => createStemShape(), []);

  const extrudeSettings = {
    depth: 4,
    bevelEnabled: true,
    bevelSegments: 4,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1,
  };

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Base continuous rotation
      groupRef.current.rotation.y += delta * 0.5;
      
      const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      const vh = typeof window !== 'undefined' ? window.innerHeight : 1000;
      const scrollRatio = scrollY / vh;
      
      const wobbleX = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      const targetScale = getInterp(scrollRatio, scaleKeyframes);
      const targetPosX = getInterp(scrollRatio, posXKeyframes);
      const targetPosY = getInterp(scrollRatio, posYKeyframes);
      const targetRotX = getInterp(scrollRatio, rotXKeyframes) + wobbleX;
      
      // Smoothly interpolate current values towards targets
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.1));
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPosX, 0.1);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPosY, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1);
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
              color="#FFFFFF"
              emissive="#222222"
              metalness={1}
              roughness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.05}
              envMapIntensity={3}
            />
          </mesh>
          
          {/* Stem */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <extrudeGeometry args={[stemShape, extrudeSettings]} />
            <meshPhysicalMaterial 
              color="#FFFFFF"
              emissive="#222222"
              metalness={1}
              roughness={0.1}
              clearcoat={1}
              clearcoatRoughness={0.05}
              envMapIntensity={3}
            />
          </mesh>
        </Center>
      </group>
      
      {/* Studio lighting environment for reflections */}
      <Environment preset="studio" />
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 10]} intensity={4} />
      <directionalLight position={[-10, -10, 10]} intensity={2} color="#FFFFFF" />
      <spotLight position={[-10, 10, -10]} intensity={4} color="#FFFFFF" />
    </Float>
  );
}
