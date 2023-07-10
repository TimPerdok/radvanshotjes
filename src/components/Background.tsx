import styled from 'styled-components';
import { useEffect, useState } from 'react';
import React from 'react';
import Stars from './animations/Stars';
import Globe from './animations/Globe';

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

export default function Background({ height }) {
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
    <Container height={height}>
      {
        stars.map(({ circles }, index) =>
          <Stars height={height} key={index} circles={circles} index={index}></Stars>
        )
      }
      {/* <GlobeContainer>
        <Globe></Globe>
      </GlobeContainer> */}
    </Container >
  )
}
