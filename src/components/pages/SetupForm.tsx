import { Button, TextField } from "@mui/material";
import React from "react";
import { useFieldArray, useFormContext, useFormState, type Control } from "react-hook-form";
import { styled } from "styled-components";
import { SectorFormValues, type Sector } from "../../forms/SectorFormValues.ts";
import FormGroupRow from "../form/FormGroupRow.tsx";
import { FlexColumn, FlexRow } from "../layout/Flex.tsx";
import { getDefaultColor } from "./Setup.tsx";
import { FieldRow } from "../form/FieldRow.tsx";

const ColorInput = styled.input`
  -webkit-appearance: none;
  padding: 0;
  border: none;
  outline: 2px solid ${({ theme }) => theme.palette.grey[800]};
  border-radius: 100%;
  min-width: 56px;
  min-height: 56px;

  &::-webkit-color-swatch {
    border: none;
    border-radius: 100%;
    padding: 0;
  }
  &::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 100%;
    padding: 0;
  }
`;

export default function SetupForm() {
  const form = useFormContext<SectorFormValues>();
  const { control, watch } = form;


  return (
    <FieldRow>
      <FlexRow gapX="2rem">
        <FlexColumn>
          <SectorsForm name={"players"} control={control} />
        </FlexColumn>
        <FlexColumn>
          <SectorsForm name={"challenges"} control={control} />
        </FlexColumn>
      </FlexRow>
    </FieldRow>
  );
}



export function SectorsForm({
  control,
  name
}: {
  control: Control<SectorFormValues>;
  name: "players" | "challenges";
}) {
  const { fields, append, remove } = useFieldArray<SectorFormValues>({
    control,
    name
  });
  const { register } = control;
  const { errors } = useFormState({ control });
  const errorIndices = errors[name] && Array.isArray(errors[name])
    ? errors[name].map((error: any) => error)
    : [];

  const addNewSector = () => {
    append({
      id: fields.length + 1,
      label: "",
      color: getDefaultColor(fields.length + 1)
    });
  };

  const title = name === "players" ? "Spelers" : "Challenges";

  return <>
    <h3>{title}</h3>
    {
      fields.map((sector: Sector, index: number) => {
        return (
          <FieldRow>
            <FormGroupRow key={sector.id}>
              <TextField error={!!errorIndices[index]} fullWidth label="Naam" type="filled" {...register(`${name}.${index}.label`)} />
              <ColorInput {...register(`${name}.${index}.color`)} type="color" />
              <Button onClick={() => remove(index)}>X</Button>
            </FormGroupRow>
          </FieldRow>
        )
      })
    }
    <FormGroupRow>
      <Button onClick={addNewSector}>Add entry</Button>
    </FormGroupRow>
  </>
}