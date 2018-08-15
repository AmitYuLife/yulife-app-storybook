import { Colours } from "../nav-bar";

export interface IconProps {
    isActive?: boolean;
    isPressed?: boolean;
    hasDismiss?: boolean;
    colour?: Colours;
    isIconHidden?: boolean;
}
