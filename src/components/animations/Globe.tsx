import { useFrame, Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { TextureLoader } from 'three';
import { useAppDispatch } from '../../store';
import { setImagesLoaded } from '../../reducers/loadSlice';
import styled from 'styled-components';



const GlobeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  max-width: 100vw;
  max-height: 100vh;
  height: 1000px;
  z-index: -999;
  `


const Sphere = () => {
  const sphereRef = React.useRef<any>();
  const [image, setImage] = useState<any>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const texture = new TextureLoader().loadAsync('./images/globe4.jpg').then((texture) => {
      console.log("done loading")
      setImage(texture);
      dispatch(setImagesLoaded(true));
    });
  }, [dispatch]);

  useFrame(() => {
    if (!sphereRef.current) return;
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
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  const handleCanvasCreated = () => {
    setCanvasLoaded(true);
  };

  return (
    <GlobeContainer>
      <Canvas onCreated={handleCanvasCreated}>
      {canvasLoaded && (
        <>
          <pointLight intensity={3} position={[-5, 5, 5]} />
          <Sphere />
        </>
      )}
    </Canvas>
    </GlobeContainer>
  );
}