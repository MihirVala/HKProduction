import React, { useRef, useMemo, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Plane } from '@react-three/drei';
import * as THREE from 'three';

interface ThreeSceneProps {
  isDarkMode: boolean;
}

// Photo Cube Component with performance optimizations
const PhotoCube: React.FC<{ 
  position: [number, number, number]; 
  rotation: [number, number, number]; 
  scale: number;
  index: number;
}> = ({ position, rotation, scale, index }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Sample photography images - using placeholder images with caching
  const textures = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [
      loader.load(`https://picsum.photos/seed/photo${index * 6 + 1}/400/400`),
      loader.load(`https://picsum.photos/seed/photo${index * 6 + 2}/400/400`),
      loader.load(`https://picsum.photos/seed/photo${index * 6 + 3}/400/400`),
      loader.load(`https://picsum.photos/seed/photo${index * 6 + 4}/400/400`),
      loader.load(`https://picsum.photos/seed/photo${index * 6 + 5}/400/400`),
      loader.load(`https://picsum.photos/seed/photo${index * 6 + 6}/400/400`),
    ];
  }, [index]);

  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Box
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      args={[2, 2, 2]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={textures[index]}
          side={THREE.DoubleSide}
        />
      ))}
    </Box>
  );
};

// Perspective Grid Component with optimizations
const PerspectiveGrid: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const gridRef = useRef<THREE.Mesh>(null);
  
  return (
    <Plane
      ref={gridRef}
      args={[100, 100]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -5, 0]}
    >
      <meshBasicMaterial
        color={isDarkMode ? '#333333' : '#cccccc'}
        opacity={0.3}
        transparent
        wireframe
      />
    </Plane>
  );
};

const ThreeScene: React.FC<ThreeSceneProps> = ({ isDarkMode }) => {
  const { viewport } = useThree();
  
  // Generate responsive cube positions based on viewport
  const cubes = useMemo(() => {
    const cubeCount = viewport.width < 768 ? 3 : 6; // Fewer cubes on mobile
    return Array.from({ length: cubeCount }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * (viewport.width < 768 ? 10 : 15),
        Math.random() * 3 - 1,
        Math.random() * (viewport.width < 768 ? 6 : 10) - (viewport.width < 768 ? 3 : 5)
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: 0.5 + Math.random() * (viewport.width < 768 ? 0.8 : 1.5)
    }));
  }, [viewport.width]);

  return (
    <>
      {/* Optimized Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.4} color="#4a90e2" />
      
      {/* Perspective Grid */}
      <PerspectiveGrid isDarkMode={isDarkMode} />
      
      {/* Photo Cubes */}
      {cubes.map((cube) => (
        <PhotoCube
          key={cube.id}
          position={cube.position}
          rotation={cube.rotation}
          scale={cube.scale}
          index={cube.id}
        />
      ))}
    </>
  );
};

export default ThreeScene;
