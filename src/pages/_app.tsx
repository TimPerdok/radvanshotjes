import React, { Component, useEffect, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../data/theme";
import { Theme } from "../types/types";
import useBreakpoint from "../hooks/useBreakpoint";
import GlobalStyle from "../globalStyling";
import Head from "next/head";
import { Provider } from "react-redux";
import store, { useAppSelector } from "../store";
import Loading from "../components/animations/Loading";


export default function App({ Component, pageProps }) {
  const breakpoint = useBreakpoint();
 
  return (
    <>
      <Head>
        <title>Nieuwjaarspel</title>
      </Head>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={{ ...theme, breakpoint } as Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>

    </>
  )
}