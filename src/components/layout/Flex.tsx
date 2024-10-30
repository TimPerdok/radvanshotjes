import { styled } from "styled-components";
import * as React from "react";

export type FlexProps = {
  alignVertical?: "top" | "center" | "bottom" | "space-between" | "space-around";
  alignHorizontal?: "start" | "center" | "end" | "space-between" | "space-around";
  children?: React.ReactNode;
  fullWidth?: boolean;
  gapX?: string;
  gapY?: string;
}

export function FlexRow({alignVertical, alignHorizontal, fullWidth, children, gapX, gapY}: FlexProps) {
  const FlexRowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${alignHorizontal};
    align-items: ${alignVertical};
    width: ${fullWidth ? "100%" : "auto"};
    gap: ${gapY ? gapY : "0px"} ${gapX ? gapX : "0px"};
  `;
  return <FlexRowStyled>{children}</FlexRowStyled>;
}

export function FlexColumn({alignVertical, alignHorizontal, children}: FlexProps) {
  const FlexColumnStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${alignVertical};
    align-items: ${alignHorizontal};
  `;
  return <FlexColumnStyled>{children}</FlexColumnStyled>;
}