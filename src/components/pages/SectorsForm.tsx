import { Button, TextField } from "@mui/material";
import React from "react";
import { useFieldArray, useFormContext, type Control } from "react-hook-form";
import { styled } from "styled-components";
import { SectorForm, type Sector } from "../../forms/Sector.ts";
import FormGroupRow from "../form/FormGroupRow.tsx";
import { FlexColumn, FlexRow } from "../layout/Flex.tsx";
import { getDefaultColor } from "./Setup.tsx";


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
  const form = useFormContext<SectorForm>();
  const { control, watch } = form;


  return (
    <div>
      <FlexRow gapX="2rem">
        <FlexColumn>
          <SectorsForm name={"players"} control={control} />
        </FlexColumn>
        <FlexColumn>
          <SectorsForm name={"challenges"} control={control} />
        </FlexColumn>
      </FlexRow>
    </div>
  );
}

export function SectorsForm({
  control,
  name
}: {
  control: Control<SectorForm>;
  name: "players" | "challenges";
}) {
  const { fields, append, remove } = useFieldArray<SectorForm>({
    control,
    name
  });
  const { register } = control;

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
          <FormGroupRow key={sector.id}>
            <TextField fullWidth label="Naam" type="filled" {...register(`${name}.${index}.label`)} />
            <ColorInput {...register(`${name}.${index}.color`)} type="color" />
            <Button onClick={() => remove(index)}>X</Button>
          </FormGroupRow>
        )
      })
    }
    <FormGroupRow>
      <Button onClick={addNewSector}>Add entry</Button>
    </FormGroupRow>
  </>
}