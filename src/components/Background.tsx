import styled from 'styled-components';
import { useEffect, useState } from 'react';
import React from 'react';
import Stars from './animations/Stars';
import Globe from './animations/Globe';
import { useAppSelector } from '../store';
import LoadedContainer from './LoadedContainer';

const Container = styled.div<any>`
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  right: 0;
  display: contents;
  width: 100%;
  height: ${({ height }) => `${height}`}px;
  z-index: -1000;
`

const Space = styled.div<any>`
  position: absolute;
  height: ${({ height }) => height + 100}px;
  width: 100%;
  z-index: inherit;
  background: linear-gradient(180deg, rgba(22,22,29,1) 0%, rgba(31,31,58,1) 35%, rgba(59,47,74,1) 71%,  rgba(84,62,110,1) 100%);
`


export default function Background({ size: { height, width } }) {
  const [stars, setStars]: any = useState([])
  const { load } = useAppSelector((state) => state)
  const { loading } = load;
  const starCount = (height * width) / 10000;
  
  



  useEffect(() => {
    

    let stars: any[] = []

    for (let i = 0; i < 3; i++) {
      let circles: any[] = []
      for (let i = 0; i < starCount / 10; i++) {
        const cx = Math.round(Math.random() * 10000) / 100 + '%';
        const cy = Math.round(Math.random() * 10000) / 100 + '%';
        const r = Math.round((Math.random() + 0.5) * 10) / 10;
        circles.push({ cx, cy, r })
      }
      stars.push({ circles })
    }
    setStars(stars)
  }, [height])


  return (
    <Container height={height}>
      <Space height={height} />
      {
        stars.map(({ circles }, index) =>
          <Stars height={height} key={index} circles={circles} index={index}></Stars>
        )
      }
        <Globe></Globe>
    </Container >
  )
}
