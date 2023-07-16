import { useFrame, Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import { TextureLoader } from 'three';
import useIntersect from '../../hooks/useIntersect';

const Container = styled.div<any>`

  opacity: 0;
  transform: translateY(20px);

  &.active {
    animation: 1s ease ${({delay}) => delay}s normal forwards 1 fadein;

    @keyframes fadein{    
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
    }
  }

`


export default function FadeInContainer({
  children,
  delay = 1
}) {
  const ref = React.useRef() as any
  const { isIntersecting, first, hasIntersected } = useIntersect(ref)

  return (
    <Container ref={ref} delay={delay} className={hasIntersected ? "active" : "hidden"}  >
      {children}
    </Container>
  )
}
