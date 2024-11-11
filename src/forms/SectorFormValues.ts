import Joi from "joi";
import ValidatableForm from "./ValidatableForm.ts";
import type { FieldValues } from "react-hook-form";

export type SectorID = string;

export interface Sector {
  id: SectorID;
  label: string;
  color: string;
}

const SectorSchema = Joi.object<Sector>({
  id: Joi.number().required(),
  label: Joi.string().required(),
  color: Joi.string().required(),
});

export class SectorFormValues extends ValidatableForm {
  static override schema: Joi.ObjectSchema<SectorFormValues> = Joi.object({
    players: Joi.array().items(SectorSchema),
    challenges: Joi.array().items(SectorSchema),
  });

  public players: Sector[] = [];
  public challenges: Sector[] = [];
}
