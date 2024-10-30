import * as React from 'react';
import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { Label } from '../Label.tsx';
import { Howl } from 'howler';
import { Loader } from '../Loader.tsx';
import type { Sector } from "../../forms/Sector.ts";
import WheelManager from "./WheelManager.ts";

const Arrow = styled.div`
  height: 0;
  width: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 100px solid black;
  position: absolute; 
  top: 9vh;
  z-index: 9999;
`


const Canvas = styled.canvas`
  width: 100vw;
  position: absolute;
  top: 10vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: relative;
`




export default function Wheel({ finish, sectors }: {
  finish: (sector: Sector) => void;
  sectors: Sector[];
}) {
  const [currentChoice, setCurrentSector] = React.useState<Sector>()
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const wheel = new WheelManager(canvasRef, sectors, {
      onNewChoice: (sector: Sector) => {
        setCurrentSector(sector)
      },
      onFinish: (sector: Sector) => {
        finish(sector)
      }
    });
    wheel.start()
    return () => {
      wheel.stop()
    }
  }, [canvasRef.current]);

  return (
    <>
      <Container>
        <Arrow></Arrow>
        <Canvas width="1000" height="1000" ref={canvasRef} ></Canvas>
        <Label blur={200} winner={currentChoice}></Label>
      </Container>
    </>
  );
}
