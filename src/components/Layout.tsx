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
import { useDispatch, useSelector } from 'react-redux'
import pageSlice, { setSize } from '../reducers/pageSlice';
import { useAppSelector } from '../store';
import Loading from './animations/Loading';
import LoadedContainer from './LoadedContainer';
import LoadingScreen from './animations/Loading';


const Container = styled.div<any>`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
  perspective-origin: middle;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  ${({cLoading}) => cLoading ? `overflow: hidden;` : ''}
`

export default function Layout({ children }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { page, load } = useAppSelector((state) => state)
  const { size } = page;
  const { loading } = load;

  useEffect(() => {
    dispatch(setSize({
      height: ref.current?.offsetHeight || 0,
      width: ref.current?.offsetWidth || 0
    }))
  }, [ref.current?.offsetHeight, ref.current?.offsetWidth])

  return (
    <Container cLoading={loading}>
      <LoadingScreen />
      <Background size={size} />
      <LoadedContainer mode={"visibility"}>
        <Header />
        <div ref={ref}>
          <Main >
            {children}
          </Main>
        </div>
      </LoadedContainer>
    </Container>
  )
}
