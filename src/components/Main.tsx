import Head from 'next/head';

import theme from '../data/theme';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Header from './Header';
import { useEffect, useState } from 'react';
import Background from './Background';
import React from 'react';



const MainBody = styled.div`
  min-height: 100vh;
  padding: 64px;
`


export default function Main({ children }) {
  return (
    <MainBody>
     
      {children}
    </MainBody>
  )
}
