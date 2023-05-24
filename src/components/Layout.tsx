import Head from 'next/head';
import theme from '../data/theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Main from './Main';
import Footer from './Footer';
import Background from './Background';
import React from 'react';
import Header from './Header';
import { Theme } from '../types/types';

const Wrapper = styled.div`
  
`

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
`

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  background: linear-gradient(180deg, rgba(22,22,29,1) 0%, rgba(31,31,58,1) 35%, rgba(59,47,74,1) 71%,  rgba(84,62,110,1) 100%);
  
}
* {
  box-sizing: border-box;
  color: ${theme.colors.secondaryText};
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
h1 {
  color: ${theme.colors.primaryText};
  font-size: 6rem;
}
h2 {
  color: ${theme.colors.secondaryText};
  font-size: 4rem;
}
h3 {
  color: ${theme.colors.secondaryText};
  font-size: 3rem;
}
h4 {
  color: ${theme.colors.secondaryText};
  font-size: 2rem;
}
h5 {
  color: ${theme.colors.secondaryText};
  font-size: 1.5rem;
}
a {
  text-decoration: none;
  color: ${theme.colors.primary};
}
:root {
  --twinkle-duration: 4s;
}
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={{ ...theme } as Theme}>
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
