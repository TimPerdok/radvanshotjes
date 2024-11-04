import { styled } from "styled-components";
import * as React from "react";
import { type FlexProps, FlexRow } from "../layout/Flex.tsx";
import { FormGroup as MUIFormGroup } from "@mui/material";

export const FormGroup = styled(MUIFormGroup)`
  width: 100%;
`;

export default function FormGroupRow({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <FormGroup>
      <FlexRow gapX={"1rem"} fullWidth alignHorizontal="space-between">
        {children}
      </FlexRow>
    </FormGroup>
  );
}
