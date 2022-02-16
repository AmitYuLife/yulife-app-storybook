import { ViewStyle } from "react-native";
import { ReactNode } from "react";

export interface IGenericHeadingProps {
  heading?: ReactNode;
  hideBorder?: boolean;
  onLeftIconPress?: () => void;
  style?: ViewStyle;
  onRightIconPress?: () => void;
  leftIcon?: ILeftIcon;
  rightIcon?: IRightIcon;
  RightIcon?: JSX.Element;
  isBeta?: boolean;
  logo?: Logo;
  color?: string;
}

type IRightIcon = "SETTINGS" | "CLOSE" | "EDIT" | "PLUS" | "Done" | "SAVE";

type ILeftIcon = "BACK" | "CLOSE";

export type Logo = "yulife";
