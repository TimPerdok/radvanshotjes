import Head from 'next/head';

import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import { useEffect, useState } from 'react';

const Container = styled.div`
  display:contents;
`


const Stars = styled.svg`
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

export default function Background() {
  const [stars, setStars] = useState([])
  useEffect(() => {
    let stars = []
    for (let i = 0; i < 4; i++) {
      let circles = []
      for (let i = 0; i < 200; i++) {
        const cx = Math.round(Math.random() * 10000) / 100 + '%';
        const cy = Math.round(Math.random() * 10000) / 100 + '%';
        const r = Math.round((Math.random() + 0.5) * 10) / 10;
        circles.push({ cx, cy, r })
      }
      stars.push({ circles })
    }
    setStars(stars)

    window.addEventListener('scroll', () => {
      const scroll = window.scrollY
      
      document.querySelectorAll('.stars').forEach((star: HTMLElement, index) => {
        console.log(star.style.transform)
        star.style.transform = `translateY(${scroll * (index + 1) * -0.1}px)`
      })
    })
  }, [])


  return (
    <Container>
      {
        stars.map(({ circles }, index) =>
          <Stars className='stars' key={index}>
            {circles.map(({ cx, cy, r }) => <Star cx={cx} cy={cy} r={r} />)}
          </Stars>
        )
      }
    </Container>
  )
}
