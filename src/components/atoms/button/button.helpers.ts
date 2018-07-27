import { StyleSheet } from "react-native";
import { BUTTON_TYPES } from "./button";
import styles from "./button.styles";

export const getWrapperStyle = (type: string) => {
    switch (type) {
        case BUTTON_TYPES.SECONDARY:
            return styles.wrapperSecondary;
        case BUTTON_TYPES.PRIMARY:
            return styles.wrapperPrimary;
        case BUTTON_TYPES.PRIMARY_MEDIUM:
            return StyleSheet.flatten([
                styles.wrapperPrimary,
                styles.wrapperPrimaryMedium,
            ]);
        case BUTTON_TYPES.PRIMARY_SMALL:
            return StyleSheet.flatten([
                styles.wrapperPrimary,
                styles.wrapperPrimarySmall,
            ]);
        case BUTTON_TYPES.LINK:
            return styles.wrapperLink;
        default:
            return null;
    }
};

export const getTextStyle = (type: string) => {
    switch (type) {
        case BUTTON_TYPES.SECONDARY:
            return styles.textSecondary;
        case BUTTON_TYPES.PRIMARY:
        case BUTTON_TYPES.PRIMARY_MEDIUM:
        case BUTTON_TYPES.PRIMARY_SMALL:
            return styles.textPrimary;
        case BUTTON_TYPES.LINK:
            return styles.textLink;
        default:
            return null;
    }
};

export const getShadowStyle = (type: string) => {
    switch (type) {
        case BUTTON_TYPES.PRIMARY:
            return styles.shadow;
        case BUTTON_TYPES.PRIMARY_MEDIUM:
            return StyleSheet.flatten([
                styles.shadow,
                styles.shadowMedium,
            ]);
        case BUTTON_TYPES.PRIMARY_SMALL:
            return StyleSheet.flatten([
                styles.shadow,
                styles.shadowSmall,
            ]);
        default:
            return null;
    }
};
