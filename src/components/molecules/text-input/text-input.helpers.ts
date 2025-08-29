import { Colours } from "../../../styles";
import { Board, Card, Giraffe, Lock, Mail } from "./assets";
import { TextInputTypes } from "./text-input.types";
import styles from "./text-input.styles";

import { StyleSheet } from "@styles";
interface IGetWrapperStyle {
  hasError: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

export function getWrapperStyle({ hasError, isFocused, isFilled }: IGetWrapperStyle) {
  if (hasError) {
    return StyleSheet.flatten([styles.wrapper, styles.wrapperError]);
  }

  if (isFocused) {
    return StyleSheet.flatten([styles.wrapper, styles.wrapperFocused]);
  }

  if (isFilled) {
    return StyleSheet.flatten([styles.wrapper, styles.wrapperFilled]);
  }

  return styles.wrapper;
}

interface IGetColour {
  hasError: boolean;
  hasValue: boolean;
}

export function getColour({ hasError, hasValue }: IGetColour) {
  if (hasError) {
    return Colours.textInput.error;
  }

  if (hasValue) {
    return Colours.textInput.filled;
  }

  return Colours.textInput.inactive;
}

export const getIcon = (type: TextInputTypes) => {
  switch (type) {
    case "Card":
      return Card;
    case "Email":
      return Mail;
    case "Password":
    case "PasswordReveal":
      return Lock;
    case "Text":
      return Giraffe;
    case "Board":
      return Board;
    default:
      return null;
  }
};

export const getKeyboardType = (type: TextInputTypes) => {
  switch (type) {
    case "number": // this is temporary until we refactor this component
    case "Card":
      return "numeric";
    case "email":
    case "Email":
      return "email-address";
    default:
      return "default";
  }
};

export interface IGetPlaceholder {
  type: TextInputTypes;
  placeholder: string;
}

interface IGetValue {
  value: string;
  type: TextInputTypes;
}

export const getValue = ({ value, type }: IGetValue) => {
  return type !== "Card" && type !== "number"
    ? value
    : /* tslint:disable-next-line */
      value
        .split(" ")
        .join("")
        .split("")
        .map((char, index) => (index !== 0 && index % 4 === 0 ? ` ${char}` : char))
        .join("");
};

interface IGetStyle {
  type: TextInputTypes;
}

export const getStyle = ({ type }: IGetStyle) => {
  switch (type) {
    case "Card":
      return StyleSheet.flatten([styles.input, styles.inputCard]);
    default:
      return styles.input;
  }
};
