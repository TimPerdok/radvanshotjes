import * as React from "react";
import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Label } from "../Label.tsx";
import { Howl } from "howler";
import { Loader } from "../Loader.tsx";
import type { Sector } from "../../forms/SectorFormValues.ts";
import WheelManager from "./WheelManager.ts";
import useLocalStorage, {
  LocalStorageKeys,
} from "../../hooks/useLocalStorage.ts";
import { SettingsFormValues } from "../../forms/SettingsFormValues.ts";

const Arrow = styled.div`
  height: 0;
  width: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 100px solid black;
  position: absolute; 
  top: 9vh;
  z-index: 9999;
`;

const Canvas = styled.canvas`
  width: 100vw;
  position: absolute;
  top: 10vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export default function Wheel({ finish, sectors }: {
  finish: (sector: Sector) => void;
  sectors: Sector[];
}) {
  const [currentChoice, setCurrentSector] = React.useState<Sector>();
  // const currentChoiceRef = useRef<Sector | undefined>(undefined);
  const [{ minSpeed, maxSpeed, minFriction, maxFriction }] = useLocalStorage(
    LocalStorageKeys.SETTINGS,
    new SettingsFormValues(),
  );
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const wheelRef: React.MutableRefObject<WheelManager | null> = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    wheelRef.current = new WheelManager(
      canvasRef,
      sectors,
      {
        onNewChoice: (sector: Sector) => {
          setCurrentSector(sector);
        },
        onFinish: (sector: Sector) => {
          finish(sector);
        },
      },
      minSpeed / 10,
      maxSpeed / 10,
      minFriction,
      maxFriction,
    );
    wheelRef.current.start();
    return () => {
      wheelRef.current?.stop();
    };
  }, [canvasRef.current]);

  const [velocity, setVelocity] = React.useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateVelocity = () => {
      if (!wheelRef.current) return;
      setVelocity(wheelRef.current.getAngularVelocity());
      animationFrameId = requestAnimationFrame(updateVelocity);
    };

    updateVelocity();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (
    <>
      <Container>
        <Arrow></Arrow>
        <Canvas width="1000" height="1000" ref={canvasRef}></Canvas>
        {
        currentChoice && <Label blur={velocity * (sectors.length * 10)} winner={currentChoice}></Label>
        }
      </Container>
    </>
  );
}
