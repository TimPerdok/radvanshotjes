import React from "react";
import { useFormContext } from "react-hook-form";
import { SettingsFormValues } from "../../forms/SettingsFormValues.ts";
import FormInput from "../form/FormInput.tsx";
import { FlexColumn } from "../layout/Flex.tsx";

export default function SettingsForm() {
  const form = useFormContext<SettingsFormValues>();
  const { control, watch } = form;
  const { register } = form;

  return (
    <FlexColumn gapY="1rem">
      <FormInput type="number" label="Minimum interval (minutes)" inputProps={{ ...register("minInterval") }} />
      <FormInput type="number" label="Maximum interval (minutes)" inputProps={{ ...register("maxInterval") }} />
      <FormInput type="float" label="Minimum speed" inputProps={{ ...register("minSpeed") }} />
      <FormInput type="float" label="Maximum speed" inputProps={{ ...register("maxSpeed") }} />
      <FormInput type="float" label="Minimum friction" inputProps={{ ...register("minFriction") }} />
      <FormInput type="float" label="Maximum friction" inputProps={{ ...register("maxFriction") }} />
    </FlexColumn>
  );
}