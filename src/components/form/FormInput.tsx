import { FormLabel, Input } from "@mui/material";
import * as React from "react";
import type { FieldValues, Path, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

type FormInputType = "text" | "color"

type Inputs = {
  [key in FormInputType]: (props: object) => React.ReactElement
}

const Inputs: Inputs = {
  text: (props: object) => <Input {...props} type="text" variant="filled" />,
  color: (props: object) => <input {...props} type="color" />
}

interface Props<T extends FieldValues> {
  type: FormInputType
  label: string
  inputProps: UseFormRegisterReturn<Path<T>>
}

export default function FormInput<T extends FieldValues>({
  type,
  label,
  inputProps
}: Props<T>) {
  return <>
    <FormLabel>{label}</FormLabel>
    {
      Inputs[type](inputProps)
    }
  </>
}