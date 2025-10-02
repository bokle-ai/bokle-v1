import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { Float, Sphere, OrbitControls, Environment, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FlowingWave({ position, color, delay = 0 }: { position: [number, number, number], color: string, delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.5;
      
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={2}>
      <mesh 
        ref={meshRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusGeometry args={[2, 0.4, 16, 100]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          distort={0.6}
          speed={hovered ? 5 : 3}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={hovered ? 0.9 : 0.7}
        />
      </mesh>
    </Float>
  );
}

function OrganicBlob({ position, color, scale = 1, delay = 0 }: { position: [number, number, number], color: string, scale?: number, delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * (hovered ? 0.4 : 0.2) + delay;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.5;
      
      const targetScale = hovered ? scale * 1.3 : scale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={hovered ? 2.5 : 1.5} rotationIntensity={hovered ? 0.8 : 0.5} floatIntensity={hovered ? 4 : 3}>
      <mesh 
        ref={meshRef} 
        position={position} 
        scale={scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.9 : 0.5}
          distort={hovered ? 0.7 : 0.5}
          speed={hovered ? 4 : 2}
          roughness={0.0}
          metalness={1}
          transparent
          opacity={hovered ? 0.95 : 0.8}
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
    { position: [-4, 1, -2] as [number, number, number], color: "#2D8C34", scale: 1.2, delay: 0 },
    { position: [4, -1, -1] as [number, number, number], color: "#15621B", scale: 1, delay: 1 },
    { position: [0, 2, -3] as [number, number, number], color: "#3AA342", scale: 0.8, delay: 2 },
    { position: [-3, -2, 1] as [number, number, number], color: "#48B752", scale: 1.1, delay: 3 },
  ], []);

  const waveElements = useMemo(() => [
    { position: [0, 0, -4] as [number, number, number], color: "#2D8C34", delay: 0 },
    { position: [0, 0, -2] as [number, number, number], color: "#15621B", delay: 1.5 },
    { position: [0, 0, 0] as [number, number, number], color: "#1F7526", delay: 3 },
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
          color="#2D8C34"
          emissive="#15621B"
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
          <meshStandardMaterial color="#3AA342" emissive="#2D8C34" emissiveIntensity={0.8} transparent opacity={0.9} />
        </Sphere>
        <Sphere args={[0.2]} position={[-6, -2, 1]}>
          <meshStandardMaterial color="#48B752" emissive="#15621B" emissiveIntensity={0.7} transparent opacity={0.8} />
        </Sphere>
        <Sphere args={[0.12]} position={[5, -3, -2]}>
          <meshStandardMaterial color="#2D8C34" emissive="#1F7526" emissiveIntensity={0.9} transparent opacity={0.85} />
        </Sphere>
        <Sphere args={[0.18]} position={[-5, 4, -1]}>
          <meshStandardMaterial color="#15621B" emissive="#2D8C34" emissiveIntensity={0.6} transparent opacity={0.75} />
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
        <pointLight position={[10, 10, 10]} intensity={2} color="#2D8C34" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#15621B" />
        <pointLight position={[0, 10, 5]} intensity={1.5} color="#3AA342" />
        <spotLight position={[0, 15, 0]} intensity={1.8} color="#48B752" angle={0.6} penumbra={1} />

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