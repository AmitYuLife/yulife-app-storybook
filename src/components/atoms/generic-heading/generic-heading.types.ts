import { ViewStyle } from "react-native";

export interface IGenericHeadingProps {
  heading?: string;
  hideBorder?: boolean;
  onLeftIconPress?: () => void;
  style?: ViewStyle;
  onRightIconPress?: () => void;
  leftIcon?: ILeftIcon;
  rightIcon?: IRightIcon;
  isBeta?: boolean;
  logo?: Logo;
}

type IRightIcon = "SETTINGS" | "CLOSE" | "EDIT" | "PLUS" | "Done";

type ILeftIcon = "BACK" | "CLOSE";

export type Logo = "yulife";
