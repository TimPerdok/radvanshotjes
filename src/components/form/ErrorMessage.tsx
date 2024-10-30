import { Typography } from "@mui/material";
import * as React from "react";
import { useFormState, type Path } from "react-hook-form";
import { styled } from "styled-components";
import type ValidatableForm from "../../forms/ValidatableForm.ts";

const Container = styled.div`
  margin-bottom: 1rem;
`;

export default function ErrorMessage<T extends ValidatableForm>({
  name
}: {
  name?: Path<ValidatableForm>
}) {
  const { errors } = useFormState<T>({ name });
  if (!Object.keys(errors).length) return null;
  return (
    <Container>
      <Typography color="error">
        Please fill in the required fields.
      </Typography>
    </Container>
  )
}