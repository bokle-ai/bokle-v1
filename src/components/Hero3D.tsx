import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Sphere, Box, Torus, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 3D AI Node Component
function AINode({ position, color, delay = 0 }: { position: [number, number, number], color: string, delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + delay) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 + delay;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Floating AI Elements Scene
function AIScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const aiNodes = useMemo(() => [
    { position: [-3, 2, 0] as [number, number, number], color: "#15621B", delay: 0 },     // Official brand green
    { position: [3, -1, 1] as [number, number, number], color: "#2A8B2F", delay: 1 },    // Lighter brand green
    { position: [0, 3, -2] as [number, number, number], color: "#0F4515", delay: 2 },    // Darker brand green
    { position: [-2, -2, 2] as [number, number, number], color: "#1A6B1F", delay: 3 },  // Mid brand green
    { position: [4, 1, -1] as [number, number, number], color: "#238528", delay: 4 },   // Variant green
  ], []);

  return (
    <group ref={groupRef}>
      {aiNodes.map((node, index) => (
        <AINode key={index} {...node} />
      ))}
      
      {/* Central Torus representing AI connectivity */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[1.5, 0.3, 16, 100]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#15621B"
            emissive="#15621B" 
            emissiveIntensity={0.4}
            transparent
            opacity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </Torus>
      </Float>

      {/* Ambient particles */}
      <Sphere args={[0.1]} position={[5, 3, 2]}>
        <meshBasicMaterial color="#2A8B2F" transparent opacity={0.6} />
      </Sphere>
      <Sphere args={[0.15]} position={[-4, -3, 1]}>
        <meshBasicMaterial color="#1A6B1F" transparent opacity={0.5} />
      </Sphere>
      <Sphere args={[0.08]} position={[2, 4, -3]}>
        <meshBasicMaterial color="#238528" transparent opacity={0.7} />
      </Sphere>
    </group>
  );
}

// Main Hero 3D Component
export default function Hero3D() {
  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#15621B" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2A8B2F" />
        
        <Environment preset="night" />
        
        <AIScene />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
    </div>
  );
}