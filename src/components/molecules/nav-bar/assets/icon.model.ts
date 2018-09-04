import { IColours } from "../nav-bar";

export interface IconProps {
    isActive?: boolean;
    isPressed?: boolean;
    hasDismiss?: boolean;
    colour?: IColours;
    isIconHidden?: boolean;
}
