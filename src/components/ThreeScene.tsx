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
  
  // Local photography images - bridal and couple photos
  const textures = useMemo(() => {
    const loader = new THREE.TextureLoader();
    
    const bridalPhotos = [
      '/protected-photos/bridal/IMG_1407.JPG.jpeg',
      '/protected-photos/bridal/IMG_1424.JPG.jpeg',
      '/protected-photos/bridal/IMG_3007.JPG.jpeg',
      '/protected-photos/bridal/IMG_3011.JPG.jpeg',
      '/protected-photos/bridal/IMG_4298.JPG.jpeg',
      '/protected-photos/bridal/IMG_4344.JPG.jpeg',
      '/protected-photos/bridal/IMG_4345.JPG.jpeg',
      '/protected-photos/bridal/IMG_4751.JPG.jpeg',
      '/protected-photos/bridal/IMG_4803.JPG.jpeg',
      '/protected-photos/bridal/IMG_4805.JPG.jpeg',
      '/protected-photos/bridal/IMG_5161.JPG.jpeg',
      '/protected-photos/bridal/IMG_5162.JPG.jpeg',
    ];
    
    const couplePhotos = [
      '/protected-photos/couplePhotos/IMG_1848.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_2172.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_4147.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_4276.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_4288.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_4348.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_4372.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_4376.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_4381.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_4383.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_4791.JPG.jpeg',
      '/protected-photos/couplePhotos/IMG_5065.JPG.jpeg',
    ];
    
    // First two cubes use bridal photos, next two cubes use couple photos, fifth cube uses remaining images
    const cubePhotos = [];
    if (index < 2) {
      // Cube 0-1: bridal photos (12 photos total)
      const startIndex = index * 6;
      for (let i = 0; i < 6; i++) {
        cubePhotos.push(loader.load(bridalPhotos[startIndex + i]));
      }
    } else if (index < 4) {
      // Cube 2-3: couple photos (12 photos total)
      const startIndex = (index - 2) * 6;
      for (let i = 0; i < 6; i++) {
        cubePhotos.push(loader.load(couplePhotos[startIndex + i]));
      }
    } else if (index === 4) {
      // Cube 4: Use any remaining images (create a mix from both sets without duplicates)
      const remainingImages = [
        bridalPhotos[0], // First bridal photo
        couplePhotos[0], // First couple photo
        bridalPhotos[6], // Seventh bridal photo
        couplePhotos[6], // Seventh couple photo
        bridalPhotos[11], // Last bridal photo
        couplePhotos[11], // Last couple photo
      ];
      for (let i = 0; i < 6; i++) {
        cubePhotos.push(loader.load(remainingImages[i]));
      }
    } else {
      // Additional cubes get blank textures
      for (let i = 0; i < 6; i++) {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const context = canvas.getContext('2d')!;
        context.fillStyle = '#cccccc';
        context.fillRect(0, 0, 1, 1);
        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        cubePhotos.push(texture);
      }
    }
    
    return cubePhotos.map((texture) => {
      if (texture.colorSpace !== undefined) {
        texture.colorSpace = THREE.SRGBColorSpace;
      }
      return texture;
    });
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
      args={[3, 3, 3]}
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
    const cubeCount = viewport.width < 768 ? 4 : 4; // Show exactly 4 cubes
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
