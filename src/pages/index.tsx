
import React from 'react';

export default function Home() {
  const start = () => {
    console.log('start')
  }
  return (
    <>
      <button onClick={start}>Start</button>
    </>
  )
}
