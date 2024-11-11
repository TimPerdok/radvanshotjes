import React from "react";
import { useFormContext } from "react-hook-form";
import { SettingsFormValues } from "../../../forms/SettingsFormValues.ts";
import FormInput from "../../form/FormInput.tsx";
import { FlexColumn } from "../../layout/Flex.tsx";

export default function SettingsForm() {
  const form = useFormContext<SettingsFormValues>();
  const { register } = form;
  console.log(form.watch())
  
  return (
    <FlexColumn gapY="1rem">
      <FormInput
        type="number"
        label="Minimum interval (minutes)"
        inputProps={{ ...register("minInterval", {valueAsNumber: true}) }}
      />
      <FormInput
        type="number"
        label="Maximum interval (minutes)"
        inputProps={{ ...register("maxInterval", {valueAsNumber: true}) }}
      />
      <FormInput
        type="float"
        label="Minimum speed"
        inputProps={{ ...register("minSpeed", {valueAsNumber: true}) }}
      />
      <FormInput
        type="float"
        label="Maximum speed"
        inputProps={{ ...register("maxSpeed", {valueAsNumber: true}) }}
      />
      <FormInput
        type="float"
        label="Minimum friction"
        inputProps={{ ...register("minFriction", {valueAsNumber: true}) }}
      />
      <FormInput
        type="float"
        label="Maximum friction"
        inputProps={{ ...register("maxFriction", {valueAsNumber: true}) }}
      />
    </FlexColumn>
  );
}
