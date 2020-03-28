import { Colours } from "../../../styles";

export interface INavBarColourScheme {
    active: string;
    inactive: string;
    pressed: string;
    activeIcon?: string;
}

export interface IIconProps {
    isActive: boolean;
    isPressed: boolean;
    isHighlighted: boolean;
    colourScheme?: INavBarColourScheme;
    hasDismiss?: boolean;
    hasHiddenIcons?: boolean;
    hasWhiteBackground?: boolean;
    hasNotification?: boolean;
    onPressIn?: () => void;
    onPressOut?: () => void;
}

export function getIconColour(isActive: boolean) {
    return isActive ? Colours.darkHotPink : "#6E6E70";
}
