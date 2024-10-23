import Joi from "joi";
import { FieldValues } from "react-hook-form";

export default abstract class ValidatableForm implements FieldValues {
  public static schema = Joi.object({});
}