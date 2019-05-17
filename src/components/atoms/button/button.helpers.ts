import { StyleSheet } from "react-native";
import styles from "./button.styles";
import { BUTTON_TYPES, Types } from "./button.types";

interface IGetWrapperStyle {
    type: Types;
    pressedIn?: boolean;
}

export const getWrapperStyle = (props: IGetWrapperStyle) => {
    if (!props) {
        return null;
    }
    const { type, pressedIn } = props;
    const wrapperPrimary = StyleSheet.flatten([styles.wrapperPrimary, pressedIn ? styles.wrapperPrimaryPressed : {}]);
    switch (type) {
        case BUTTON_TYPES.SECONDARY:
            return styles.wrapperSecondary;
        case BUTTON_TYPES.SECONDARY_MEDIUM:
            return StyleSheet.flatten([styles.wrapperSecondary, styles.wrapperMedium]);
        case BUTTON_TYPES.PRIMARY:
            return wrapperPrimary;
        case BUTTON_TYPES.PRIMARY_MEDIUM:
            return StyleSheet.flatten([wrapperPrimary, styles.wrapperMedium]);
        case BUTTON_TYPES.PRIMARY_SMALL:
            return StyleSheet.flatten([wrapperPrimary, styles.wrapperPrimarySmall]);
        case BUTTON_TYPES.PRIMARY_GREYSCALE_SMALL:
            return StyleSheet.flatten([
                styles.wrapperPrimary,
                styles.wrapperPrimaryGreyscale,
                styles.wrapperPrimarySmall
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
        case BUTTON_TYPES.SECONDARY_MEDIUM:
            return StyleSheet.flatten([styles.textSecondary, styles.textSecondaryMedium]);
        case BUTTON_TYPES.PRIMARY:
        case BUTTON_TYPES.PRIMARY_MEDIUM:
        case BUTTON_TYPES.PRIMARY_SMALL:
            return styles.textPrimary;
        case BUTTON_TYPES.PRIMARY_GREYSCALE_SMALL:
            return StyleSheet.flatten([styles.textPrimary, styles.textGreyscale]);
        case BUTTON_TYPES.LINK:
            return styles.textLink;
        default:
            return null;
    }
};

interface IGetShadowStyle {
    type: string;
    pressedIn?: boolean;
}

export const getShadowStyle = (props: IGetShadowStyle) => {
    if (!props) {
        return null;
    }
    const { type, pressedIn } = props;
    const shadowStyle = StyleSheet.flatten([styles.shadow, pressedIn ? styles.shadowPressed : {}]);
    switch (type) {
        case BUTTON_TYPES.PRIMARY:
            return shadowStyle;
        case BUTTON_TYPES.PRIMARY_MEDIUM:
            return StyleSheet.flatten([shadowStyle, styles.shadowMedium]);
        case BUTTON_TYPES.PRIMARY_SMALL:
            return StyleSheet.flatten([shadowStyle, styles.shadowSmall]);
        case BUTTON_TYPES.PRIMARY_GREYSCALE_SMALL:
            return StyleSheet.flatten([styles.shadow, styles.shadowGrey, styles.shadowSmall]);
        default:
            return null;
    }
};

interface IGetWrapperOverlayStyle {
    disabled?: boolean;
    isShadow?: true;
}

export const getWrapperOverlayStyle = (props: IGetWrapperOverlayStyle) => {
    if (!props) {
        return null;
    }
    const { disabled, isShadow = false } = props;
    if (disabled && isShadow) {
        return styles.wrapperOverlayPrimaryShadowOffsetDisabled;
    }
    if (disabled) {
        return styles.wrapperOverlayPrimaryDisabled;
    }
};
