import Joi from "joi";
import ValidatableForm from "./ValidatableForm.ts";


export class SettingsFormValues extends ValidatableForm {

  static override schema: Joi.ObjectSchema<SettingsFormValues> = Joi.object({
    minInterval: Joi.number().required().positive(),
    maxInterval: Joi.number().required().positive().min(Joi.ref("minInterval")),
    minSpeed: Joi.number().required().positive(),
    maxSpeed: Joi.number().required().positive().min(Joi.ref("minSpeed")),
    minFriction: Joi.number().required().positive().min(0),
    maxFriction: Joi.number().required().positive().min(Joi.ref("minFriction")).max(1),
  });

  public minInterval: number = 10;
  public maxInterval: number = 20;
  public minSpeed: number = 1;
  public maxSpeed: number = 2;
  public minFriction: number = 0.95;
  public maxFriction: number = 0.998;

}