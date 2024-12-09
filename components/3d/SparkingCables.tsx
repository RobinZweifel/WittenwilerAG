"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SparkParticles({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-10, 0, 0),
      new THREE.Vector3(-5, 5, 5),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(5, -5, 5),
      new THREE.Vector3(10, 0, 0),
    ]);

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const point = curve.getPoint(t);
      const spread = 2;
      
      positions[i * 3] = point.x + (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = point.y + (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = point.z + (Math.random() - 0.5) * spread;
    }
    
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      if (points.current.geometry.attributes.position.array instanceof Float32Array) {
        points.current.geometry.attributes.position.array[i3 + 1] += Math.sin(time + i) * 0.01;
      }
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={points}>
      <PointMaterial
        transparent
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#ff4444"
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
    </Points>
  );
}

export default function SparkingCables() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        style={{ background: 'rgb(17, 17, 17)' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SparkParticles />
      </Canvas>
    </div>
  );
}