import { VoidFunction } from "@utils";

export type ScrollableContentOverlayProps = {
  onPressCta: VoidFunction;
  onPressClose?: VoidFunction;
  onPressCtaDismiss?: VoidFunction;
  heading?: string;
  children?: React.ReactNode;
  ctaLabel?: string;
  ctaDismissLabel?: string;
  HeaderIcon?: React.JSX.Element;
};
