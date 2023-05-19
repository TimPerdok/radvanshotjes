import { useFrame, Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextureLoader } from 'three';


const SVG = styled.svg<any>`
  animation: twinkle var(--twinkle-duration) ease-in-out infinite;
  position: absolute;
	overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1000;
  transform: ${({translate,scale})=> `translateZ(${translate}px) scale(${scale});`}

  &:nth-child(2) {
    animation-delay: calc(var(--twinkle-duration) * -0.33);
  }
  &:nth-child(3) {
    animation-delay: calc(var(--twinkle-duration) * -0.66);
  }

  @keyframes twinkle {
    25% {
      opacity: 0;
    }
  }
`

const Star = styled.circle`
  fill: white;

  &:nth-child(3n) {
    opacity: 0.8;
  }
  &:nth-child(7n) {
    opacity: 0.6;
  }
  &:nth-child(13n) {
    opacity: 0.4;
  }
  &:nth-child(19n) {
    opacity: 0.2;
  }
`

export default function Stars({circles, index}) {
  const translate = index * -10
  const scale = 1 + index
  return (
  <SVG translate={translate} scale={scale}>
      {circles.map(({ cx, cy, r }, index) => <Star key={index} cx={cx} cy={cy} r={r} />)}
    </SVG>
  )
}
