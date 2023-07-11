import React, {  } from 'react'
import styled from 'styled-components';
import { useAppSelector } from '../store';


const getNone = (mode) => {
  if (mode === 'visibility') return 'hidden';
  return 'none';
}

const Container = styled.div<any>`
${({mode}) => mode}: ${({cLoading, mode}) => cLoading ? getNone(mode) : 'initial'};
  
`


export default function LoadedContainer({children, mode = "display"}) {
  const {loading} = useAppSelector((state) => state.load)
  
  return (
    <Container cLoading={loading} mode={mode}>
      {children}
    </Container>
  )
}