import { t } from "@locale";
import validator from "email-validator";

export const validateEmail = (email: string): string => {
  if (!validator.validate(email)) {
    return t("validator.email");
  }

  return "";
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return t("validator.password");
  }

  // if (password.length < 6) {
  //     return "Please enter a password";
  // }

  return "";
};
