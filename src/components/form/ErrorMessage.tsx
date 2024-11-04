import { Typography } from "@mui/material";
import * as React from "react";
import { type Path, useFormState } from "react-hook-form";
import { styled } from "styled-components";
import type ValidatableForm from "../../forms/ValidatableForm.ts";

const Container = styled.div`
  min-height: 24px;
`;

type Props<T extends ValidatableForm> = {
  name: Path<T>;
};

export default function ErrorMessage<T extends ValidatableForm>({
  name,
}: Props<T>) {
  const { errors } = useFormState<T>({ name });
  if (!Object.keys(errors).length) return <Container></Container>;
  return (
    <Container>
      <Typography color="error">
        {/* @ts-ignore */}
        {name && errors[name]?.message}
      </Typography>
    </Container>
  );
}
