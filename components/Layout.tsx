import Head from 'next/head';

import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';



export default function Layout({ children }) {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <Head>
        <title>Tim Perdok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            background-color: ${theme.colors.secondary};
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
      {/* <Header /> */}
      <Main>
        {children}
      </Main>
      <Footer>
      </Footer>
    </ThemeProvider>
  )
}
