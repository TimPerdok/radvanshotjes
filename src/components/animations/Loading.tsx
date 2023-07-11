import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = styled.div`
  

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 14.6rem;
  margin-top: 7.3rem;
  margin-bottom: 7.3rem;
  
  &:before, &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    filter: drop-shadow(0 0 0.7555555556rem rgba(255, 255, 255, 0.75));
 }
  &:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1.7rem #fff;
    animation-name: pulsA;
 }
 &:after {
    width: calc(100% - 1.7rem*2);
    padding-bottom: calc(100% - 1.7rem*2);
    box-shadow: 0 0 0 0 #fff;
    animation-name: pulsB;
 }
  @keyframes pulsA {
    0% {
      box-shadow: inset 0 0 0 1.7rem #fff;
      opacity: 1;
   }
    50%, 100% {
      box-shadow: inset 0 0 0 0 #fff;
      opacity: 0;
   }
 }
  @keyframes pulsB {
    0%, 50% {
      box-shadow: 0 0 0 0 #fff;
      opacity: 0;
   }
    100% {
      box-shadow: 0 0 0 1.7rem #fff;
      opacity: 1;
   }
 }
  

`


export default function LoadingScreen() {
  const { loading } = useAppSelector((state) => state.load)
  if (!loading) return null;
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  )


}
