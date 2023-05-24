import React, { Component, useEffect, useMemo } from "react";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../data/theme";
import { Theme } from "../types/types";
import useBreakpoint from "../hooks/useBreakpoint";
import Background from "../components/Background";
import GlobalStyle from "../globalStyling";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  const breakpoint = useBreakpoint();
  return (
    <>
      <GlobalStyle />
      <Layout>
          <ThemeProvider theme={{ ...theme, breakpoint } as Theme}>
            <Component {...pageProps} />
          </ThemeProvider>
      </Layout>
    </>
  )
}