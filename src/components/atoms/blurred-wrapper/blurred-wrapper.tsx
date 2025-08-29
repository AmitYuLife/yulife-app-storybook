import { BlurView, BlurViewProps } from "@react-native-community/blur";
import { memo, ReactElement, useMemo } from "react";

import { StyleSheet } from "@styles";
interface IProps extends Pick<BlurViewProps, "blurAmount" | "blurType"> {
  children: ReactElement;
  blurAmount?: number;
  backgroundColor?: string;
}

const BlurredWrapper = ({
  children,
  blurType = "light",
  blurAmount = 5,
  backgroundColor = "rgba(0,0,0,.5)",
}: IProps) => {
  const wrapperStyle = useMemo(
    () => ({ backgroundColor, ...StyleSheet.absoluteFillObject, borderColor: "transparent" }),
    [backgroundColor]
  );
  return (
    <BlurView style={wrapperStyle} blurAmount={blurAmount} blurType={blurType}>
      {children}
    </BlurView>
  );
};

export default memo(BlurredWrapper);
