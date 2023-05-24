import Head from 'next/head';
import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Main from './Main';
import Footer from './Footer';
import Background from './Background';
import React from 'react';
import Header from './Header';
import { Theme } from '../types/types';
import GlobalStyle from '../globalStyling';
import useBreakpoint from '../hooks/useBreakpoint';


const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
`

export default function Layout({ children }) {
  const breakpoint = useBreakpoint();
  console.log("test")
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={{ ...theme, breakpoint } as Theme}>
        <Container>
          <Head>
            <title>Tim Perdok</title>
            <link rel="icon" href="./favicon.ico" />
            <link rel="manifest" href="./manifest.json"></link>
          </Head>
          <Background />
          <Header />
          <Main>
            {children}
          </Main>
          {/* <Footer /> */}
        </Container>
      </ThemeProvider>
    </>
  )
}
