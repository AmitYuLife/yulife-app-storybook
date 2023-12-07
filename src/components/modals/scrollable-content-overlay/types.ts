import { VoidFunction } from "@utils";
import { ViewStyle } from "react-native";

export type ScrollableContentOverlayProps = {
  onPressCta: VoidFunction;
  onPressClose: VoidFunction;
  onPressCtaDismiss?: VoidFunction;

  heading?: string;

  children?: React.ReactNode;
  ctaLabel?: string;
  HeaderIcon?: (props: { style: ViewStyle }) => JSX.Element;
};
