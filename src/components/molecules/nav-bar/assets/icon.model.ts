import { IColours } from "../nav-bar";

export interface IconProps {
    isActive?: boolean;
    isPressed?: boolean;
    colour?: IColours;
    isIconHidden?: boolean;
    onDismissPress?: () => void;
}
