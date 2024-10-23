import Joi from "joi";
import * as React from "react";
import { FormProvider, type DefaultValues, type UseFormReturn } from "react-hook-form";
import type ValidatableForm from "../../forms/ValidatableForm.ts";
import useSuperForm from "../../hooks/useSuperForm.ts";
import { FlexColumn, FlexRow } from "../layout/Flex.tsx";

type Props<T extends object> = {
  schema: Joi.ObjectSchema<T>,
  defaultValues?: DefaultValues<T>,
  onSubmit: (data: T) => void
  children: React.ReactNode
}

export default function DefaultForm<T extends ValidatableForm>({
  schema,
  defaultValues = {} as DefaultValues<T>,
  onSubmit,
  children
}: Props<T>) {
  const form = useSuperForm<T>(schema, defaultValues);
  const onError = (error: any) => {
    console.error(error, form.getValues());
  }
  console.log(form.getValues())
  return <>
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)}>
        <FlexColumn>
          {children}
        </FlexColumn>
      </form>
    </FormProvider>
  </>
}

