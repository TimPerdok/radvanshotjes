import { styled } from "styled-components";
import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageContainer({ children }: Props) {
  const Container = styled.div`
    min-width: 500px;
    max-width: 100vw;
    padding: 4rem 0;
  `;
  return <Container>{children}</Container>;
}
