import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, Sphere, Torus, OrbitControls, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Sugar Glider Placeholder (geometric representation)
function SugarGliderModel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={position}>
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial 
            color="#2A8B2F"
            emissive="#15621B"
            emissiveIntensity={0.3}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
        
        {/* Head */}
        <mesh position={[0, 0.6, 0.3]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial 
            color="#2A8B2F"
            emissive="#15621B"
            emissiveIntensity={0.3}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
        
        {/* Gliding membranes - left */}
        <mesh position={[-0.8, 0, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[1.2, 0.05, 0.8]} />
          <meshStandardMaterial 
            color="#238528"
            emissive="#15621B"
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
        
        {/* Gliding membranes - right */}
        <mesh position={[0.8, 0, 0]} rotation={[0, 0, -0.3]}>
          <boxGeometry args={[1.2, 0.05, 0.8]} />
          <meshStandardMaterial 
            color="#238528"
            emissive="#15621B"
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
        
        {/* Tail */}
        <mesh position={[0, -0.3, -0.5]} rotation={[0.5, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.05, 0.8, 16]} />
          <meshStandardMaterial 
            color="#1A6B1F"
            emissive="#15621B"
            emissiveIntensity={0.2}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
      </group>
    </Float>
  );
}

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
        <octahedronGeometry args={[0.5]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
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
      {/* 3D Mascot - Sugar Glider */}
      <SugarGliderModel position={[-4, 1, 0]} />
      
      {aiNodes.map((node, index) => (
        <AINode key={index} {...node} />
      ))}
      
      {/* Central rotating ring */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1}>
        <Torus args={[2, 0.15, 16, 100]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#15621B"
            emissive="#15621B" 
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
            roughness={0.1}
            metalness={0.9}
          />
        </Torus>
      </Float>

      {/* Distorted sphere - AI core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#15621B"
          emissive="#2A8B2F"
          emissiveIntensity={0.3}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Ambient particles */}
      <Sphere args={[0.12]} position={[5, 3, 2]}>
        <meshBasicMaterial color="#2A8B2F" transparent opacity={0.7} />
      </Sphere>
      <Sphere args={[0.15]} position={[-5, -2, 1]}>
        <meshBasicMaterial color="#1A6B1F" transparent opacity={0.6} />
      </Sphere>
      <Sphere args={[0.1]} position={[3, 4, -3]}>
        <meshBasicMaterial color="#238528" transparent opacity={0.8} />
      </Sphere>
      <Sphere args={[0.08]} position={[-3, -4, -2]}>
        <meshBasicMaterial color="#15621B" transparent opacity={0.5} />
      </Sphere>
    </group>
  );
}

// Main Hero 3D Component
export default function Hero3D() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#15621B" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#2A8B2F" />
        <pointLight position={[0, 10, 5]} intensity={1} color="#238528" />
        
        <Environment preset="night" />
        
        <AIScene />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={0.3}
        />
      </Canvas>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 pointer-events-none" />
    </div>
  );
}