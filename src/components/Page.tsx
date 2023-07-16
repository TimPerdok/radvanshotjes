import styled from 'styled-components';
import React from 'react';
import { useAppSelector } from '../store';


const Container = styled.div`
  display: contents;
`

export default function Page({ children }) {
  const { loading } = useAppSelector(state => state.load);
  if (loading) return null;
  return (
    <Container>
      {children}
    </Container>
  )
}
