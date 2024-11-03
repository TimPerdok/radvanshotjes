import { Howl } from 'howler';
import * as React from 'react';
import type { Sector } from "../../forms/SectorFormValues.ts";
import WheelCanvas from "./WheelCanvas.ts";

type WheelListeners = {
  onSpinning?: (starts: boolean) => void;
  onNewChoice?: (sector: Sector) => void;
  onFinish?: (sector: Sector) => void;
}

const TAU: number = Math.PI * 2

enum WheelState {
  IDLE,
  SPINNING,
  STOPPED
}

const SOUNDS = {
  spin: new Howl({
    src: ['assets/spin.mp3'],
    preload: true,
    volume: 0.5,
    sprite: {
      spin: [200, 1000],
    }
  })
}


export default class WheelManager {

  private previousChoice: Sector | null;
  private friction: number;
  private angle: number;
  private angularVelocity: number;
  private framecount = 0
  private canvas: WheelCanvas;

  private state: WheelState;

  constructor(
    private canvasRef: React.RefObject<HTMLCanvasElement>,
    private sectors: Sector[],
    private listeners: WheelListeners,
    private minSpeed: number = 0.1,
    private maxSpeed: number = 0.2,
    private minFriction: number = 0.995,
    private maxFriction: number = 0.998,
  ) {

    this.previousChoice = null;

    this.friction = this.randomBetween(this.minFriction, this.maxFriction)
    this.angle = 0 // Angle in radians
    this.angularVelocity = 0 // Angular velocity
    this.state = WheelState.IDLE;

    this.canvas = new WheelCanvas(
      this.canvasRef.current.getContext('2d'),
      this.sectors,
    );
  }

  public start() {
    this.canvas.draw()
    this.engine() // Start frame loop
    this.spin();
  }

  public stop() {
    this.state = WheelState.STOPPED;
  }

  public getAngularVelocity() {
    return this.angularVelocity
  }

  private get sectorCount() {
    return this.sectors.length;
  }

  private randomBetween = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  }

  private setCurrentSector(sector: Sector) {
    if (this.previousChoice == sector) return;
    this.previousChoice = sector
    SOUNDS.spin.play('spin')
    this.listeners.onNewChoice?.(sector)
  }

  private get currentIndex() {
    return Math.floor(this.sectorCount - (this.angle / TAU) * this.sectorCount) % this.sectorCount
  }

  private finish() {
    this.state = WheelState.STOPPED;
    this.angularVelocity = 0 // Fully bring to stop
    const { onSpinning, onNewChoice, onFinish } = this.listeners;
    onSpinning?.(false)
    onNewChoice?.(this.sectors[this.currentIndex])
    onFinish?.(this.sectors[this.currentIndex]);
  }

  private frame() {
    if (this.state != WheelState.SPINNING) return;
    if (this.isStopped) this.finish();
    this.rotate()
  }

  private rotate() {
    this.angularVelocity = this.applyFriction(this.angularVelocity)

    this.angle += this.angularVelocity // Update angle
    this.angle %= TAU // Normalize angle
    this.canvas.rotate(this.angle) // Rotate wheel canvas
    this.setCurrentSector(this.sectors[this.currentIndex])
  }

  private applyFriction(angularVelocity: number): number {
    return angularVelocity *= this.friction
  }

  private get isStopped() {
    return this.angularVelocity < 0.0005;
  }

  private engine() {
    this.frame()
    this.framecount++;
    if (this.state == WheelState.STOPPED) return;
    requestAnimationFrame(this.engine.bind(this));
  }

  private spin() {
    if (this.state === WheelState.SPINNING) return;
    this.angularVelocity = this.randomBetween(this.minSpeed, this.maxSpeed)
    this.state = WheelState.SPINNING;
  }
}