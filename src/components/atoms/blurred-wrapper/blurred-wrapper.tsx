import { BlurView, BlurViewProps } from "@danielsaraldi/react-native-blur-view";
import { memo, ReactElement, useMemo } from "react";

import { StyleSheet } from "@styles";
import { useNavigation } from "@navigation/navigation.context";
import Box from "@atoms/box/box";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IProps extends Pick<BlurViewProps, "type"> {
  children: ReactElement;
  backgroundColor?: string;
  tint?: "light" | "dark";
}

const BlurredWrapper = ({ children, tint = "light", backgroundColor = "rgba(0,0,0,.5)" }: IProps) => {
  const { componentId } = useNavigation();
  const { height } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();

  const wrapperStyle = useMemo(
    () => ({
      backgroundColor,
      ...StyleSheet.absoluteFillObject,
    }),
    [backgroundColor]
  );
  return (
    <BlurView style={wrapperStyle} targetId={componentId} type={tint}>
      <Box w="100%" h={height} pb={bottom + 10} position="absolute" disableAutoAdjust={true}>
        {children}
      </Box>
    </BlurView>
  );
};

export default memo(BlurredWrapper);
