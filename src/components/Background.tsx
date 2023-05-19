import Head from 'next/head';

import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import { useEffect, useState } from 'react';
import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import Galaxy from './animations/Galaxy';

const Container = styled.div`
  display:contents;
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
  

  const [comet, setComet]: any = useState({ rotate: Math.random() * 360, cx: Math.random() * 100, cy: Math.random() * 100, rx: Math.random() * 10, ry: Math.random() * 10 })
  const { width, height } = useWindowSize();
  
  useEffect(() => {
  
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
      <Galaxy></Galaxy>
      {/* <svg style={{ width: "100%", height: "100%" }}>
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,255,255,.8)"></stop>
            <stop offset="100%" stopColor="rgba(255,255,255,0)"></stop>
          </radialGradient>
        </defs>
        <g transform={`rotate(${comet.rotate})`}>
          <Comet fill="url(#comet-gradient)" cx={comet.cx} cy={comet.cy} rx={comet.rx} ry={comet.ry}></Comet>
        </g>
      </svg> */}
    </Container>
  )
}
