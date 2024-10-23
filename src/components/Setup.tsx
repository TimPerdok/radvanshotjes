import React from "react";
import { useFormContext, type Path, type UseFormReturn } from "react-hook-form";
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
  const { control: { register }, getValues } = form;
  const sectors = getValues("sectors");
  return (
    <>
      {
        sectors?.map((sector, index) => {
          const getPath = (key: string) => `sectors.${index}.${key}` as Path<SectorForm>;
          return (
            <>
              <input type="hidden" {...register(getPath("id"))} />
              <FormInput label="Label" type="text" inputProps={register(`sectors.${index}.label`)} />
              <FormInput label="Color" type="color"  inputProps={register(`sectors.${index}.color`)} />
            </>
          )
        })
      }
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