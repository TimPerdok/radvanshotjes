import { useFrame, Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextureLoader } from 'three';


const StarryNight = styled.svg`
  width: 100%;
  height: 200%;
  position: fixed;
  animation: twinkle var(--twinkle-duration) ease-in-out infinite;

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
  width: 100%;
  height: 100%;

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
  const [starTranslateY, setStarTransformY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setStarTransformY(window.scrollY * index * -0.1)
    })
  }, [starTranslateY])

  return (
    <StarryNight style={{transform: `translateY(${starTranslateY}px)`}}>
      {circles.map(({ cx, cy, r }, index) => <Star key={index} cx={cx} cy={cy} r={r} />)}
    </StarryNight>
  )
}
