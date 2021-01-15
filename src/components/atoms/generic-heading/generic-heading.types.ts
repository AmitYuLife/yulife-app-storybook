import { ViewStyle } from "react-native";

export interface IGenericHeadingProps {
  heading?: string;
  hideBorder?: boolean;
  onLeftIconPress?: () => void;
  style?: ViewStyle;
  onRightIconPress?: () => void;
  leftIcon?: LeftIcon;
  rightIcon?: IRightIcon | string;
  isBeta?: boolean;
  logo?: Logo;
}

export interface IRightIcon {
  icon: "SETTINGS" | "CLOSE" | "EDIT" | "PLUS";
}

export type Logo = "yulife";

type LeftIcon = "BACK" | "CLOSE";
