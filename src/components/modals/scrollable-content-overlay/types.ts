import { SvgViewStyle } from "@styles/types";
import { VoidFunction } from "@utils";
import { ReactNode } from "react";

export type ScrollableContentOverlayProps = {
  onPressCta: VoidFunction;
  onPressClose: VoidFunction;
  onPressCtaDismiss?: VoidFunction;
  heading?: string;
  children?: React.ReactNode;
  ctaLabel?: string;
  HeaderIcon?: (props: { style: SvgViewStyle }) => ReactNode;
};
