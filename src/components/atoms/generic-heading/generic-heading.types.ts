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
  logo?: "yulife";
}

export interface IRightIcon {
  icon: "SETTINGS" | "CLOSE";
}

type LeftIcon = "BACK" | "CLOSE";
