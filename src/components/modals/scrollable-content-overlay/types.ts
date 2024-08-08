import { VoidFunction } from "@utils";

export type ScrollableContentOverlayProps = {
  onPressCta: VoidFunction;
  onPressClose?: VoidFunction;
  onPressCtaDismiss?: VoidFunction;
  heading?: string;
  ctaLabel?: string;
  ctaDismissLabel?: string;
  ctaDismissType?: "secondary" | "primary";
  HeaderIcon?: React.JSX.Element;
  noMinHeight?: boolean;
  children?: React.ReactNode;
  testId?: string;
};
