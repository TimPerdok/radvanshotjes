import styled, { ThemeProps } from "styled-components";
import { Theme } from "../types/types";

const Highlight = styled.span`
  display: inline-block;
  color: ${({theme}: ThemeProps<Theme>) => theme.colors.primary};
`

export default Highlight;
