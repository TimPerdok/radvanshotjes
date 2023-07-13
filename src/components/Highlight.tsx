import styled, { ThemeProps } from "styled-components";
import { Theme } from "../types/types";
import React from "react";



function Highlight({ element = "span", children }) {

  const Container = styled.span`
    display: contents;
    & > * {
      color: ${({ theme }: ThemeProps<Theme>) => theme.colors.primary};
    }
  `

  return (
    <Container>
      {children}
    </Container>
  )
}

export default Highlight;
