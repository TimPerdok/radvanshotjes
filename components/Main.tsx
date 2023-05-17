import Head from 'next/head';

import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import { useEffect, useState } from 'react';
import Background from './Background';

const MainBody = styled.main`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 5000px;
  background: linear-gradient(180deg, rgba(22,22,29,1) 0%, rgba(31,31,58,1) 35%, rgba(59,47,74,1) 71%,  rgba(84,62,110,1) 100%);
  overflow: auto;
`


export default function Main({ children }) {
  return (
    <MainBody>
      <Background/>
        {children}
    </MainBody>
  )
}
