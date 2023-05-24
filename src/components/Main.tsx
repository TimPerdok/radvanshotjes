import styled from 'styled-components';
import React from 'react';
import theme from '../data/theme';
import { Theme } from '../types/types';


const MainBody = styled.div`
  min-height: 100vh;
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media all and (min-width: ${({theme}) => theme.breakpoints?.lg }px) {
    width: 1000px;
    margin: 0 auto;
  }

  @media all and (max-width: ${({theme}) => theme.breakpoints?.sm }px) {
    padding: 16px;
  }

`

export default function Main({ children }) {
  return (
    <MainBody>
      {children}
    </MainBody>
  )
}
