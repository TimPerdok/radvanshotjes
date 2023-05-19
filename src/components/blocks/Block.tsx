import React, { LegacyRef, useEffect } from 'react';
import styled from 'styled-components';
import useIntersect from '../../hooks/useIntersect';
import { useEffectOnce } from 'usehooks-ts';


const Section = styled.section`
  width: 100%;
`


export default function Block({ children }) {
  return (
    <Section>
      {children}
    </Section>
  )
}
