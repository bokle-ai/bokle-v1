import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, OrbitControls, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FlowingWave({ position, color, delay = 0 }: { position: [number, number, number], color: string, delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[2, 0.4, 16, 100]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          distort={0.6}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function OrganicBlob({ position, color, scale = 1, delay = 0 }: { position: [number, number, number], color: string, scale?: number, delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + delay;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          distort={0.5}
          speed={2}
          roughness={0.0}
          metalness={1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function FlowingScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const organicElements = useMemo(() => [
    { position: [-4, 1, -2] as [number, number, number], color: "#10b981", scale: 1.2, delay: 0 },
    { position: [4, -1, -1] as [number, number, number], color: "#059669", scale: 1, delay: 1 },
    { position: [0, 2, -3] as [number, number, number], color: "#34d399", scale: 0.8, delay: 2 },
    { position: [-3, -2, 1] as [number, number, number], color: "#6ee7b7", scale: 1.1, delay: 3 },
  ], []);

  const waveElements = useMemo(() => [
    { position: [0, 0, -4] as [number, number, number], color: "#10b981", delay: 0 },
    { position: [0, 0, -2] as [number, number, number], color: "#059669", delay: 1.5 },
    { position: [0, 0, 0] as [number, number, number], color: "#047857", delay: 3 },
  ], []);

  return (
    <group ref={groupRef}>
      {waveElements.map((wave, index) => (
        <FlowingWave key={`wave-${index}`} {...wave} />
      ))}

      {organicElements.map((element, index) => (
        <OrganicBlob key={`blob-${index}`} {...element} />
      ))}

      <mesh position={[0, 0, -1]} scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#10b981"
          emissive="#059669"
          emissiveIntensity={0.6}
          distort={0.4}
          speed={1.5}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.3}
        />
      </mesh>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <Sphere args={[0.15]} position={[6, 3, 2]}>
          <meshStandardMaterial color="#34d399" emissive="#10b981" emissiveIntensity={0.8} transparent opacity={0.9} />
        </Sphere>
        <Sphere args={[0.2]} position={[-6, -2, 1]}>
          <meshStandardMaterial color="#6ee7b7" emissive="#059669" emissiveIntensity={0.7} transparent opacity={0.8} />
        </Sphere>
        <Sphere args={[0.12]} position={[5, -3, -2]}>
          <meshStandardMaterial color="#10b981" emissive="#047857" emissiveIntensity={0.9} transparent opacity={0.85} />
        </Sphere>
        <Sphere args={[0.18]} position={[-5, 4, -1]}>
          <meshStandardMaterial color="#059669" emissive="#10b981" emissiveIntensity={0.6} transparent opacity={0.75} />
        </Sphere>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#059669" />
        <pointLight position={[0, 10, 5]} intensity={1.5} color="#34d399" />
        <spotLight position={[0, 15, 0]} intensity={1.8} color="#6ee7b7" angle={0.6} penumbra={1} />

        <Environment preset="night" />

        <FlowingScene />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/70 pointer-events-none" />
    </div>
  );
}