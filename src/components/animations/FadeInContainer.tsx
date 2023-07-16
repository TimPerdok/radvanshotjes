import { useFrame, Canvas } from '@react-three/fiber';
import React from 'react';
import styled from 'styled-components';
import { TextureLoader } from 'three';
import useIntersect from '../../hooks/useIntersect';

const Container = styled.div`
  &.active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
  opacity: 0;
  transform: translateY(20px);
`


export default function FadeInContainer({
  children,
  delay = 1000
}) {
  const ref = React.useRef() as any
  const { isIntersecting, first, hasIntersected } = useIntersect(ref, delay)

  return (
    <Container ref={ref} className={hasIntersected ? "active" : "hidden"}>
      {children}
    </Container>
  )
}
