import React, { LegacyRef, useEffect } from 'react';
import styled from 'styled-components';
import useIntersect from '../../hooks/useIntersect';
import { useEffectOnce } from 'usehooks-ts';


const FadeInContainer = styled.section`
  width: 100%;
  &.active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }
  opacity: 0;
  transform: translateY(20px);
`

export default function Block({ children }) {
  const ref = React.useRef() as any
  const { isIntersecting, first, hasIntersected } = useIntersect(ref)
  return (
    <FadeInContainer ref={ref} className={hasIntersected ? "active" : "hidden"}>
      {children}
    </FadeInContainer>
  )
}
