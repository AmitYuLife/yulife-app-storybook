import { ViewStyle } from "react-native";
import { ReactNode } from "react";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

export interface IGenericHeadingProps {
  heading?: ReactNode;
  hideBorder?: boolean;
  onLeftIconPress?: () => void;
  style?: ViewStyle;
  onRightIconPress?: () => void;
  leftIcon?: LeftIcon;
  rightIcon?: IRightIcon;
  RightIcon?: JSX.Element;
  logo?: GenericHeadingLogo;
  color?: string;
  rightIconTestID?: string;
  leftIconTestID?: string;
  disabled?: boolean;
}

type IRightIcon = "SETTINGS" | "CLOSE" | "EDIT" | "PLUS" | "Done" | "SAVE" | "COINS";

export type GenericHeadingLogo = "yulife";
