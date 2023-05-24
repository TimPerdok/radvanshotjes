import { useFrame, Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import { TextureLoader } from 'three';


const Sphere = () => {
  const sphereRef: any = React.useRef();
  const texture = new TextureLoader().load('./images/globe4.jpg');

  useFrame(() => {
    if (!sphereRef?.current) return;
    sphereRef.current.rotation.x = Math.PI / 8; // Tilt angle (adjust as needed)
    sphereRef.current.rotation.y += 0.0005; // Rotation speed (adjust as needed)
  });

  return (
    <mesh ref={sphereRef} position={[3,0, -5]}>
      <sphereBufferGeometry args={[6, 64, 64]} />
      <meshStandardMaterial map={texture}  metalness={0.6} roughness={0.8}></meshStandardMaterial>
    </mesh>
  );
};

export default function Globe() {
  return (
    <Canvas>
      <pointLight intensity={3} position={[-5, 5, 5]} />
      <Sphere />
    </Canvas>
  )
}
