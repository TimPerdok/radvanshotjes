import React from 'react';
import styled from 'styled-components';


const Container = styled.section`
  width: 100%;
`

export default function Block({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
