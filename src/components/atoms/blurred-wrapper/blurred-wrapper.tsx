import { BlurView, BlurViewProps } from "expo-blur";
import { memo, ReactElement, useMemo } from "react";

import { StyleSheet } from "@styles";

interface IProps extends Pick<BlurViewProps, "intensity" | "tint"> {
  children: ReactElement;
  intensity?: number;
  backgroundColor?: string;
}

const BlurredWrapper = ({ children, tint = "light", intensity = 5, backgroundColor = "rgba(0,0,0,.5)" }: IProps) => {
  const wrapperStyle = useMemo(
    () => ({ backgroundColor, ...StyleSheet.absoluteFillObject, borderColor: "transparent" }),
    [backgroundColor]
  );
  return (
    <BlurView style={wrapperStyle} intensity={intensity} tint={tint} experimentalBlurMethod="dimezisBlurView">
      {children}
    </BlurView>
  );
};

export default memo(BlurredWrapper);
