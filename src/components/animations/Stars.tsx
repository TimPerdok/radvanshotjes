import { useFrame, Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextureLoader } from 'three';

const SVG = styled.svg<any>`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1000;
  transform: ${({ translate, scale }) => `translateZ(${translate}px) scale(${scale});`}


  
`

const Star = styled.circle<any>`
  fill: white;
  
  

  animation: twinkle var(--twinkle-duration) ease-in-out infinite;

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

  @keyframes twinkle {
    25% {
      opacity: 0;
    }
  }

`

export default function Stars({ circles, index }) {
  const [stars, setStars] = useState([]);
  index = index + 3
  const translate = index * -10;
  const scale = 1 + index;

  useEffect(() => {
    const stars = circles.map(({ cx, cy, r }, index) => (
      <Star key={index} cx={cx} cy={cy} r={r} style={{
        animationDelay: `${generateRandomInteger(0, 3)}s`
      }} />
    ))
    setStars(stars)
  }, [])

  function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
  }


  return (
    <SVG translate={translate} scale={scale}>
      {stars}
    </SVG>
  );
}
