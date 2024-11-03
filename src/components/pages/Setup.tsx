import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SectorFormValues } from "../../forms/SectorFormValues.ts";
import { SettingsFormValues } from "../../forms/SettingsFormValues.ts";
import useLocalStorage, { LocalStorageKeys } from "../../hooks/useLocalStorage.ts";
import { useToast } from "../../hooks/useToast.ts";
import { ROUTES } from "../../main.tsx";
import DefaultForm from "../form/DefaultForm.tsx";
import { FlexColumn } from "../layout/Flex.tsx";
import PageContainer from "../layout/PageContainer.tsx";
import SettingsForm from "./SettingsForm.tsx";
import SetupForm from "./SetupForm.tsx";
import { FieldRow } from "../form/FieldRow.tsx";

export const getDefaultColor = (index: number) => {
  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#FFA500", "#800080", "#008000", "#000080", "#800000", "#008080"];
  return colors[index % colors.length];
}

export const DEFAULT_FORM: SectorFormValues = {
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
  const [savedForm, saveForm] = useLocalStorage<SectorFormValues>(LocalStorageKeys.SETUP, DEFAULT_FORM);
  const navigate = useNavigate();

  const onSubmit = (formData: SectorFormValues) => {
    saveForm(formData);
    navigate(ROUTES.WHEEL);
  }

  return (
    <div>
      <FlexColumn fullWidth alignHorizontal="center">
        <h1>Rad van shotjes!</h1>
        <PageContainer>
          <FlexColumn gapY="1rem">
            <Card>
              <CardContent>
                <DefaultForm<SectorFormValues>
                  onSubmit={onSubmit}
                  defaultValues={savedForm}
                  schema={SectorFormValues.schema}
                >
                  <SetupForm />
                </DefaultForm>
              </CardContent>
            </Card>
            <Settings></Settings>
          </FlexColumn>
        </PageContainer>
      </FlexColumn>
    </div>
  );
}

function Settings() {
  const [settings, setSettings] = useLocalStorage<SettingsFormValues>(LocalStorageKeys.SETTINGS, new SettingsFormValues());
  const [, setLeaderboard] = useLocalStorage(LocalStorageKeys.LEADERBOARD, []);
  const { toast } = useToast();

  const clearLeaderboard = () => {
    setLeaderboard([]);
    toast("Leaderboard cleared");
  }

  const submit = (formData: SettingsFormValues) => {
    setSettings(formData);
    toast("Settings saved");
  }

  return (
    <div>
      <Accordion
        disableGutters={true}>
        <AccordionSummary>
          Settings
        </AccordionSummary>
        <AccordionDetails>
          <FieldRow>
            <DefaultForm
              defaultValues={settings}
              onSubmit={submit}
              schema={SettingsFormValues.schema}>
              <SettingsForm />
            </DefaultForm>
          </FieldRow>
          <Button onClick={clearLeaderboard}>Clear leaderboard</Button>
        </AccordionDetails>
      </Accordion>
    </div >
  );
}