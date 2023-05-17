import Head from 'next/head';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tim Perdok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        {children}
      </main>
      <footer>
      </footer>
    </>
  )
}
