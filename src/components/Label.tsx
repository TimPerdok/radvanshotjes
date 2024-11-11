import * as React from "react";
import { styled } from "styled-components";
import { Sector } from "../forms/SectorFormValues.ts";

interface ContainerProps {
  color: string;
  blur: number;
}

const Container = styled.div.attrs<ContainerProps>(({ blur }) => ({
  style: {
    filter: `blur(${blur}px)`,
  },
}))`

font-family: 'Roboto', sans-serif;
position: absolute;
bottom: 10rem;
font-size: 20rem;

text-align: center;
text-shadow: 0px 0px 20px black;

user-select: none;



transition: filter 0.1s ease-out;

color: ${(props) => props.color};

`;

const Shadow = styled.div`
  box-shadow: 0px 0px 99999px 500px BLACK;
  position: absolute;
  bottom: 0;
  height: 0px;
  width: 100vw;
`;

export function Label({ winner, blur }: {
  winner: Sector;
  blur: number;
}) {
  return (
    <>
      <Shadow></Shadow>
      <Container blur={blur} color={winner?.color}>
        {winner?.label}
      </Container>
    </>
  );
}
