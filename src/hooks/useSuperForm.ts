import { useForm, type DefaultValues, type FieldValues } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

export default function useSuperForm<T extends FieldValues>(schema: Joi.AnySchema<T>, defaultValues?: DefaultValues<T>) {
  const form = useForm({
    resolver: joiResolver(schema),
    defaultValues,
    mode: "onChange"
  })
  return form
}