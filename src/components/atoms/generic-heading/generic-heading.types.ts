import { ViewStyle } from "react-native";

export interface IGenericHeadingProps {
  heading: string;
  subheading?: string;
  hidesBorder?: boolean;
  onLeftIconPress?: () => void;
  style?: ViewStyle;
  onRightIconPress?: () => void;
  leftIcon?: LeftIcon;
  border?: "new"; // FIXME: STANDARDISE ALL HEADING BORDERS
  rightIcon?: IRightIcon | string;
}

export interface IRightIcon {
  icon: "SETTINGS" | "CLOSE";
}

type LeftIcon = "BACK" | "CLOSE";
