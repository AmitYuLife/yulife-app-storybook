import { ViewStyle } from "react-native";
import { ReactNode } from "react";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { IYuLifeLogoProps } from "@atoms/logo";

type IRightIcon = "SETTINGS" | "CLOSE" | "EDIT" | "PLUS" | "Done" | "SAVE" | "COINS";
export type GenericHeadingLogo = "yulife";

interface ICommonHeadingProps {
  color?: string;
  disabled?: boolean;
  heading?: ReactNode;
  hideBorder?: boolean;
  leftIcon?: LeftIcon;
  leftIconTestID?: string;
  leftIconAccessibilityLabel?: string;
  logo?: GenericHeadingLogo;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  rightIcon?: IRightIcon;
  RightIcon?: ReactNode;
  rightIconTestID?: string;
  rightIconAccessibilityLabel?: string;
  style?: ViewStyle;
  logoType?: IYuLifeLogoProps["type"];
}

export type IGenericHeadingProps = ICommonHeadingProps;
