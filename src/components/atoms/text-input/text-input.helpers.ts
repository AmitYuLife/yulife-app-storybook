import { StyleSheet } from "react-native";
import { Colours } from "../../../styles";
import styles from "./text-input.styles";

interface IGetWrapperStyle {
    hasError: boolean;
    isFocused: boolean;
    isFilled: boolean;
}

export function getWrapperStyle({ hasError, isFocused, isFilled }: IGetWrapperStyle) {
    if (hasError) {
        return StyleSheet.flatten([
            styles.wrapper,
            styles.wrapperError
        ]);
    } else if (isFocused) {
        return StyleSheet.flatten([
            styles.wrapper,
            styles.wrapperFocused
        ]);
    } else if (isFilled) {
        return StyleSheet.flatten([
            styles.wrapper,
            styles.wrapperFilled
        ]);
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
