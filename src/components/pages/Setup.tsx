import { Card, CardContent, Container } from "@mui/material";
import React, { useEffect } from "react";
import { SectorForm } from "../../forms/Sector.ts";
import useLocalStorage, { LocalStorageKeys } from "../../hooks/useLocalStorage.ts";
import DefaultForm from "../form/DefaultForm.tsx";
import FullScreen from "../layout/FullScreen.tsx";
import PageContainer from "../layout/PageContainer.tsx";
import SetupForm from "./SectorsForm.tsx";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../main.tsx";

export const getDefaultColor = (index: number) => {
  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#FFA500", "#800080", "#008000", "#000080", "#800000", "#008080"];
  return colors[index % colors.length];
}

export const DEFAULT_FORM: SectorForm = {
  players: Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    label: "",
    color: getDefaultColor(i)
  })),
  challenges: Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    label: "",
    color: getDefaultColor(i)
  }))
}

export default function Setup() {
  const [savedForm, saveForm] = useLocalStorage<SectorForm>(LocalStorageKeys.SETUP, DEFAULT_FORM);
  const navigate = useNavigate();

  const onSubmit = (formData: SectorForm) => {
    saveForm(formData);
    navigate(ROUTES.WHEEL);
  }

  return (
    <Container>
      <FullScreen>
        <h1>Rad van shotjes!</h1>
        <PageContainer>
          <Card>
            <CardContent>
              <DefaultForm<SectorForm>
                onSubmit={onSubmit}
                defaultValues={savedForm}
                schema={SectorForm.schema}
              >
                <SetupForm />
              </DefaultForm>
            </CardContent>
          </Card>
        </PageContainer>
      </FullScreen>
    </Container>
  );
}