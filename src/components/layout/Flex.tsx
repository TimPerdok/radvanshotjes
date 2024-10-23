import { styled } from "styled-components";
import * as React from "react";

interface Props {
  alignVertical?: "top" | "center" | "bottom";
  alignHorizontal?: "start" | "center" | "end";
  children: React.ReactNode;
}

export function FlexRow({alignVertical, alignHorizontal, children}: Props) {
  const FlexRowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${alignHorizontal ? "center" : "start"};
    align-items: ${alignVertical ? "center" : "start"};
  `;
  return <FlexRowStyled>{children}</FlexRowStyled>;
}

export function FlexColumn({alignVertical, alignHorizontal, children}: Props) {
  const FlexColumnStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${alignVertical ? "center" : "start"};
    align-items: ${alignHorizontal ? "center" : "start"};
  `;
  return <FlexColumnStyled>{children}</FlexColumnStyled>;
}