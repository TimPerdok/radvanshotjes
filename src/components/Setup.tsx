import React from "react";
import { useFormContext, type Path, useFieldArray } from "react-hook-form";
import { Sector, SectorForm } from "../forms/Sector.ts";
import useLocalStorage, { LocalStorageKeys } from "../hooks/useLocalStorage.ts";
import DefaultForm from "./form/DefaultForm.tsx";
import FormInput from "./form/FormInput.tsx";
import { Button, Card, CardContent, Container } from "@mui/material";
import FullScreen from "./layout/FullScreen.tsx";
import PageContainer from "./layout/PageContainer.tsx";
import { useEffect } from "react";
function SectorsForm() {
  const form = useFormContext<SectorForm>();
  const { control, watch } = form;
  const { fields, append } = useFieldArray({
    control,
    name: "sectors",
  });
  const { register } = control;
  const addNewSector = () => {
    append({
      id: fields.length + 1,
      label: "",
      color: "#000000",
    });
  };
  return (
    <>
      {
        fields.map((s, index) => {
          return (
            <>
              <input type="hidden" {...register(`sectors.${index}.label`)} />
              <FormInput label="Label" type="text" inputProps={register(`sectors.${index}.label`)} />
              <FormInput label="Color" type="color" inputProps={register(`sectors.${index}.color`)} />
            </>
          )
        })
      }
      <Button onClick={addNewSector}>Add entry</Button>
    </>
  );
}

export default function Setup() {
  const [savedForm, saveForm] = useLocalStorage<SectorForm>(LocalStorageKeys.SECTORS, { sectors: [] });
  console.log(savedForm)

  const onSubmit = (data: SectorForm) => {
    console.log("saving", data);
    saveForm(data);
  }

  useEffect(() => {
    if (savedForm.sectors.length) return;
    saveForm({
      sectors: [
        {
          id: 1,
          label: "",
          color: "#000000"
        }
      ]
    })
  }, [])

  return (
    <Container>
      <FullScreen>
        <h1>Rad van shotjes!</h1>
        <PageContainer>
          <Card>
            <CardContent>
              <h2>Nieuw rad</h2>
              <DefaultForm<SectorForm>
                onSubmit={onSubmit}
                defaultValues={savedForm}
                schema={SectorForm.schema}
              >
                <SectorsForm />
                <Button type="submit">Submit</Button>
              </DefaultForm>
            </CardContent>
          </Card>
        </PageContainer>
      </FullScreen>
    </Container>
  );
}