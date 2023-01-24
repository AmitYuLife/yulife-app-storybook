import { t } from "@locale";
import validator from "email-validator";

export const validateEmail = (email: string): string => {
  if (!validator.validate(email)) {
    return t("validator.email");
  }

  return "";
};
