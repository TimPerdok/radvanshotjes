import React from 'react';
import styled from 'styled-components';


const Line = styled.div`

  @keyframes animate {
    0% {
        left: 0;
    }

    50% {
        left: 100%;
    }

    0% {
        left: 0;
    }
  }

  width: 400px;
  height: 2px;
  background: #fff;
  position: absolute;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme})=>theme.colors?.secondary};
    animation: animate 5s linear infinite;
  }
`


export default function LineAnimation() {
  return (
    <Line>
    </Line>
  )
}
