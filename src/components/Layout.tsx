import Head from 'next/head';
import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Main from './Main';
import React, { useEffect } from 'react';
import Header from './Header';
import { Theme } from '../types/types';
import GlobalStyle from '../globalStyling';
import useBreakpoint from '../hooks/useBreakpoint';
import Background from './Background';


const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
  perspective-origin: middle;
`

export default function Layout({ children }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0)

  useEffect(() => {
    setHeight(ref.current?.offsetHeight || 0)
  }, [ref.current?.offsetHeight])

  return (
    <Container >
      <Background height={ref.current?.offsetHeight || 0} />
      <Header />
      <div ref={ref}>

        <Main >
          {children}
        </Main>
      </div>

    </Container>
  )
}
