import { FormLabel, Input } from "@mui/material";
import * as React from "react";
import type {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { FormGroup } from "./FormGroupRow.tsx";
import ErrorMessage from "./ErrorMessage.tsx";
import ValidatableForm from "../../forms/ValidatableForm.ts";
import { useFormState } from "react-hook-form";

type FormInputType = "text" | "color" | "number" | "float";

type Inputs = {
  [key in FormInputType]: (props: object) => React.ReactElement;
};

const Inputs: Inputs = {
  text: (props: object) => <Input {...props} type="text" variant="filled" />,
  number: (props: object) => (
    <Input
      {...props}
      type="number"
      variant="filled"
    />
  ),
  color: (props: object) => <input {...props} type="color" />,
  float: (props: object) => (
    <Input
      {...props}
      type="number"
      variant="filled"
      inputProps={{ step: 0.00001 }}
    />
  ),
};

interface Props<T extends ValidatableForm> {
  type: FormInputType;
  label: string;
  inputProps: UseFormRegisterReturn<Path<T>>;
  showError?: boolean;
}

export default function FormInput<T extends ValidatableForm>({
  type,
  label,
  inputProps,
  showError = true,
}: Props<T>) {
  const name = inputProps.name as Path<T>;
  const { errors } = useFormState<T>({ name });
  const enrichedInputProps = {
    ...inputProps,
    // @ts-ignore wehweh
    error: !!errors[name],
  };
  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      {Inputs[type](enrichedInputProps)}
      {name && showError && <ErrorMessage name={name} />}
    </FormGroup>
  );
}
