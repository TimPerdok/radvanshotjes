import Head from 'next/head';
import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Main from './Main';
import React from 'react';
import Header from './Header';
import { Theme } from '../types/types';
import GlobalStyle from '../globalStyling';
import useBreakpoint from '../hooks/useBreakpoint';
import Background from './Background';


const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Background />
      <Header />
      <Main>
        {children}
      </Main>
    </Container>
  )
}
