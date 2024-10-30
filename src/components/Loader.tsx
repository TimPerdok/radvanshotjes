import * as React from 'react';
import Wheel from './wheel/Wheel.tsx';
import { useEffect } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  height: 5vh;
  width: ${({percentage}: any) => percentage}%;
  background-color: white;
  position: absolute;
  bottom: 0;
  z-index: 9999;
  transition: width ${({time}: any) => time}ms linear
`

export function Loader({time, finish}: any) {
  const [x, setX] = React.useState(100);
  useEffect(() => {
    setTimeout(() => setX(0), 250);
    setTimeout(() => finish(), time + 250);
  }, [time])

  return (
    <>
      {<Bar time={time} percentage={x}></Bar>}
    </>
  );
}
