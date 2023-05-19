import { useFrame, Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextureLoader } from 'three';
import Stars from './Stars';



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


export default function Galaxy() {
  const [stars, setStars]: any = useState([])

  useEffect(() => {
    
    let stars: any[] = []

    for (let i = 0; i < 3; i++) {
      let circles: any[] = []
      for (let i = 0; i < 200; i++) {
        const cx = Math.round(Math.random() * 10000) / 100 + '%';
        const cy = Math.round(Math.random() * 10000) / 100 + '%';
        const r = Math.round((Math.random() + 0.5) * 10) / 10;
        circles.push({ cx, cy, r })
      }
      stars.push({ circles })
    }
    setStars(stars)

   

  }, [])

  return (
    <>
      {
        stars.map(({ circles }, index) =>
         <Stars circles={circles} index={index}></Stars>
        )
      }
    </>
  )
}
