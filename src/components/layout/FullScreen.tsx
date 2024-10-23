import { styled } from "styled-components";
import * as React from "react";
import { FlexColumn, FlexRow } from "./Flex.tsx";

interface FullScreenProps {
  children: React.ReactNode;
}

export default function FullScreen({ children }: FullScreenProps) {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  `;

  return (
    <Container>
      <FlexColumn alignHorizontal="center">
        {children}
      </FlexColumn>
    </Container>
  );
}