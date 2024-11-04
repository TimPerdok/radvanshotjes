import { Button } from "@mui/material";
import Joi from "joi";
import * as React from "react";
import { type DefaultValues, FormProvider } from "react-hook-form";
import { styled } from "styled-components";
import type ValidatableForm from "../../forms/ValidatableForm.ts";
import useSuperForm from "../../hooks/useSuperForm.ts";
import { FlexColumn } from "../layout/Flex.tsx";

type Props<T extends object> = {
  schema: Joi.ObjectSchema<T>;
  defaultValues?: DefaultValues<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  submitLabel?: string;
};

const Form = styled.form`
`;

const Container = styled.div`
`;

export default function DefaultForm<T extends ValidatableForm>({
  schema,
  defaultValues = {} as DefaultValues<T>,
  onSubmit,
  children,
  submitLabel,
}: Props<T>) {
  const form = useSuperForm<T>(schema, defaultValues);
  const onError = (error: any) => {
    console.error(error, form.getValues());
  };
  const hasError = !!Object.keys(form.formState.errors).length;
  return (
    <Container>
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <FlexColumn>
            {children}
          </FlexColumn>
          <Button disabled={hasError} variant="contained" type="submit">
            {submitLabel ?? "Submit"}
          </Button>
        </Form>
      </FormProvider>
    </Container>
  );
}
