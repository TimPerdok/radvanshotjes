import * as React from "react";
import Wheel from "./wheel/Wheel.tsx";
import { useEffect } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  
  position: absolute;
  bottom: 16px;
  left: 32px;

  .lds-ring {
    position: relative;
    width: 160px;
    height: 160px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 128px;
    height: 128px;
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

export function Spinner({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Container>
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
