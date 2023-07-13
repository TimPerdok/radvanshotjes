import React, { Component, useEffect, useMemo } from "react";
import Layout from "../components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../data/theme";
import { Theme } from "../types/types";
import useBreakpoint from "../hooks/useBreakpoint";
import Background from "../components/Background";
import GlobalStyle from "../globalStyling";
import Head from "next/head";
import { Provider } from "react-redux";
import store, { useAppSelector } from "../store";
import Loading from "../components/animations/Loading";


export default function App({ Component, pageProps }) {
  const breakpoint = useBreakpoint();
 
  

  useEffect(() => {
    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker
    //     .register("./sw.js")
    //     .then((registration) => {
    //       console.log("service worker registration successful");
    //     })
    //     .catch((err) => {
    //       console.warn("service worker registration failed", err.message);
    //     });
    // }


    // if ('serviceWorker' in navigator) {
    //   navigator.serviceWorker.ready.then(registration => {
    //     registration.unregister();

    //     if (caches) {
    //       // Service worker cache should be cleared with caches.delete()
    //       caches.keys().then(async (names) => {
    //         await Promise.all(names.map(name => caches.delete(name)));
    //       });
    //     }
    //   });
    // }

  }, []);


  return (
    <>
      <Head>
        <title>Tim Perdok</title>

      </Head>
      <Provider store={store}>

        <GlobalStyle />
        
        <Layout>
          <ThemeProvider theme={{ ...theme, breakpoint } as Theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </Provider>

    </>
  )
}