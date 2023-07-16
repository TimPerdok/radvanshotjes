import React, {  } from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../store';


const getNone = (mode, cLoading) => {
  if (!cLoading) return 'initial';
  if (mode === 'visibility') return 'hidden';
  return 'none';
}

const Container = styled.div<any>`
  ${({mode}) => mode}: ${({cLoading, mode}) => getNone(mode, cLoading)};
`


export default function LoadedContainer({children, mode = "display"}) {
  const {loading} = useAppSelector((state) => state.load)
  return (
    <Container cLoading={loading} mode={mode}>
      {children}
    </Container>
  )
}