import Head from 'next/head';

import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import { useEffect, useState } from 'react';
import React from 'react';
import { useWindowSize } from 'usehooks-ts';

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

const Comet = styled.ellipse`
	transform-origin: center center;
	animation: comet 5s linear infinite;

	@keyframes comet {
		0%,
		40% {
			transform: translateX(0);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		60%,
		100% {
			transform: translateX(-100vmax);
			opacity: 0;
		}
	}
}
`

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default function Background() {
  const [stars, setStars]: any = useState([])
  const [comet, setComet]: any = useState({ rotate: Math.random() * 360, cx: Math.random() * 100, cy: Math.random() * 100, rx: Math.random() * 10, ry: Math.random() * 10 })
  const { width, height } = useWindowSize();
  useEffect(() => {
    let stars: any[] = []
    for (let i = 0; i < 4; i++) {
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

    window.addEventListener('scroll', () => {
      const scroll = window.scrollY

      document.querySelectorAll('.stars').forEach((star, index) => {
        (star as HTMLElement).style.transform = `translateY(${scroll * (index + 1) * -0.1}px)`
      })
    })

    setInterval(() => {
      const left = Math.random() > 0.5

      setComet({ // fix
        rotate: left ? Math.random() * -360 : Math.random() * 360,
        cx: left ? 0 : width,
        cy: getRandomNumber(0, height),
        rx: getRandomNumber(100, 200),
        ry: getRandomNumber(1, 3)
      })
    }, 5_000)

  }, [width, height])


  return (
    <Container>
      {
        stars.map(({ circles }, index) =>
          <Stars className='stars' key={index}>
            {circles.map(({ cx, cy, r }, index) => <Star key={index} cx={cx} cy={cy} r={r} />)}
          </Stars>
        )
      }
      <svg style={{ width: "100%", height: "100%" }}>
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,255,255,.8)"></stop>
            <stop offset="100%" stopColor="rgba(255,255,255,0)"></stop>
          </radialGradient>
        </defs>
        <g transform={`rotate(${comet.rotate})`}>
          <Comet fill="url(#comet-gradient)" cx={comet.cx} cy={comet.cy} rx={comet.rx} ry={comet.ry}></Comet>
        </g>
      </svg>
    </Container>
  )
}
