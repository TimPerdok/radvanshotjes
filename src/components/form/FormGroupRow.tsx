import { styled } from "styled-components";
import * as React from "react";
import { FlexRow, type FlexProps } from "../layout/Flex.tsx";
import { FormGroup } from "@mui/material";


const CFormGroup = styled(FormGroup)`
    margin-bottom: 1rem;
    width: 100%;
`;

export default function FormGroupRow({
  children
}: {
  children?: React.ReactNode
}) {
  return (
    <CFormGroup>
      <FlexRow gapX={"1rem"} fullWidth alignHorizontal="space-between">
        {children}
      </FlexRow>
    </CFormGroup>
  )
}