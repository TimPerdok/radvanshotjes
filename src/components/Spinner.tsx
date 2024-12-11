import * as React from "react";
import { useEffect } from "react";
import { styled } from "styled-components";

const size = 220;

const Container = styled.div`
  
  position: absolute;
  bottom: 16px;
  left: 32px;

  .lds-ring {
    position: relative;
    width: ${size + 18}px;
    height: ${size + 18}px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Centered = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.p`
    font-size: 24px;
    color: white;
    text-align: center;
`

export function Spinner({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Container>
        <Centered><Text>Volgende draai <br/> komt eraan!</Text></Centered>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          {children}
        </div>
      </Container>
    </>
  );
}
