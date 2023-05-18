import Head from 'next/head';
import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Main from './Main';
import Footer from './Footer';
import Background from './Background';
import React from 'react';
import Header from './Header';

const Wrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(22,22,29,1) 0%, rgba(31,31,58,1) 35%, rgba(59,47,74,1) 71%,  rgba(84,62,110,1) 100%);
  overflow: hidden;
`

const Container = styled.div`
  position: relative;
`

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Container>
      <Head>
        <title>Tim Perdok</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      <style>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
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
            font-size: 1.17rem;
          }
          a {
            text-decoration: none;
            color: ${theme.colors.primary};
          }
          :root {
            --twinkle-duration: 4s;
          }
      `}</style>
      <Header />
      <Wrapper>
        <Background />
      </Wrapper>
      <Main>
        {children}
      </Main>
      <Footer/>
      </Container>
    </ThemeProvider>
  )
}
