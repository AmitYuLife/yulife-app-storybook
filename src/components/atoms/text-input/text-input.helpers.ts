import { StyleSheet } from "react-native";
import { Colours } from "../../../styles";
import { Card, Giraffe, Lock, Mail } from "./assets";
import { Types } from "./text-input";
import styles from "./text-input.styles";

interface IGetWrapperStyle {
    hasError: boolean;
    isFocused: boolean;
    isFilled: boolean;
}

export function getWrapperStyle({ hasError, isFocused, isFilled }: IGetWrapperStyle) {
    if (hasError) {
        return StyleSheet.flatten([styles.wrapper, styles.wrapperError]);
    } else if (isFocused) {
        return StyleSheet.flatten([styles.wrapper, styles.wrapperFocused]);
    } else if (isFilled) {
        return StyleSheet.flatten([styles.wrapper, styles.wrapperFilled]);
    } else {
        return styles.wrapper;
    }
}

interface IGetColour {
    hasError: boolean;
    hasValue: boolean;
}

export function getColour({ hasError, hasValue }: IGetColour) {
    if (hasError) {
        return Colours.textInput.error;
    } else if (hasValue) {
        return Colours.textInput.filled;
    } else {
        return Colours.textInput.inactive;
    }
}

export const getIcon = (type: Types) => {
    switch (type) {
        case "Card":
            return Card;
        case "Email":
            return Mail;
        case "Password":
            return Lock;
        case "Text":
            return Giraffe;
        default:
            return null;
    }
};

interface IGetPlaceholder {
    type: Types;
    placeholder: string;
}

export const getPlaceholder = ({ type, placeholder }: IGetPlaceholder) => {
    switch (type) {
        case "Card":
            return "account number";
        case "Email":
            return "Email";
        case "Password":
            return "Password";
        case "Text":
            return placeholder;
        default:
            return "";
    }
};

interface IGetValue {
    value: string;
    type: Types;
}

export const getValue = ({ value, type }: IGetValue) => {
    return type !== "Card"
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
    type: Types;
}

export const getStyle = ({ type }: IGetStyle) => {
    switch (type) {
        case "Card":
            return StyleSheet.flatten([styles.input, styles.inputCard]);
        default:
            return styles.input;
    }
};
