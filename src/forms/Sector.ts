import Joi from "joi";
import ValidatableForm from "./ValidatableForm.ts";
import type { FieldValues } from "react-hook-form";

export interface Sector {
  id: number;
  label: string;
  color: string;
}


export class SectorForm extends ValidatableForm {

  static override schema: Joi.ObjectSchema<SectorForm> = Joi.object({
    sectors: Joi.array().items(
      Joi.object<Sector>({
        id: Joi.number().required(),
        label: Joi.string().required(),
        color: Joi.string().required(),
      })
    ),
  });

  public sectors: Sector[] = []

}