import { useFrame, Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { TextureLoader } from 'three';
import { useAppDispatch } from '../../store';
import { setImagesLoaded } from '../../reducers/loadSlice';


const Sphere = () => {
  const sphereRef: any = React.useRef();
  const [image, setImage] = useState<any>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const texture = new TextureLoader().loadAsync('./images/globe4.jpg').then((texture) => {
      setImage(texture);
      // dispatch(setImagesLoaded(true)) // bug hier
    })
  }, [])
  useFrame(() => {
    if (!sphereRef?.current) return;
    sphereRef.current.rotation.x = Math.PI / 8; // Tilt angle (adjust as needed)
    sphereRef.current.rotation.y += 0.0005; // Rotation speed (adjust as needed)
  });

  if (!image) return null;

  return (
    <mesh ref={sphereRef} position={[3, 0, -5]}>
      <sphereGeometry args={[6, 64, 64]} />
      <meshStandardMaterial map={image} metalness={0.6} roughness={0.8}></meshStandardMaterial>
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

