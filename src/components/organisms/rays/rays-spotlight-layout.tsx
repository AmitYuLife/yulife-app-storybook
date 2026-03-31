import { createContext, memo, ReactNode, useCallback, useState } from "react";
import { Box } from "@atoms";
import { Rays } from "@organisms";
import { Style, StyleSheet } from "@styles";
import { DETOX_ENABLED } from "@services/socket";
import { IRaysProps } from "./rays";
import { FadeIn } from "react-native-reanimated";
import { isAndroid } from "@utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const RaysSpotlightContext = createContext<((y: number, height: number) => void) | null>(null);

interface IRaysSpotlightLayoutProps {
  children?: ReactNode;
  showRays?: boolean;
  opacity?: number;
  raysStyle?: IRaysProps["style"];
  raysProps?: Partial<IRaysProps>;
}

const RaysSpotlightLayout = ({
  children,
  showRays = true,
  opacity = 0.4,
  raysStyle = "alternate",
  raysProps,
}: IRaysSpotlightLayoutProps) => {
  const [focalY, setFocalY] = useState<number | null>(null);
  const [focalHeight, setFocalHeight] = useState(0);
  const { top } = useSafeAreaInsets();

  const onFocalLayout = useCallback(
    (y: number, height: number) => {
      // On Android, viewRef.measureInWindow does not include safe area, on iOS it does
      setFocalY(y + (isAndroid() ? top : 0));
      setFocalHeight(height);
    },
    [top]
  );

  const raysTop = focalY != null ? focalY + focalHeight / 2 : Style.DEVICE_HEIGHT / 2 + Style.DEVICE_HEIGHT * 0.05;

  return (
    <>
      {showRays ? (
        <Box
          forceAnimated={true}
          collapsable={false}
          entering={FadeIn.delay(300).duration(800)}
          position="absolute"
          w="100%"
          h="100%"
        >
          <Box w="100%" h="100%" opacity={opacity} collapsable={false}>
            {!DETOX_ENABLED ? (
              <Rays
                backgroundColor="transparent"
                style={raysStyle}
                containerStyle={{ ...styles.raysContainer, top: raysTop }}
                positionStyle={styles.raysPosition}
                {...raysProps}
              />
            ) : null}
          </Box>
        </Box>
      ) : null}
      <RaysSpotlightContext.Provider value={onFocalLayout}>{children}</RaysSpotlightContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  raysContainer: {
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_WIDTH,
    left: 0,
  },
  raysPosition: {
    position: "absolute",
    width: Style.DEVICE_WIDTH * 2,
    height: Style.DEVICE_WIDTH * 2,
    top: -Style.DEVICE_WIDTH,
    left: -Style.DEVICE_WIDTH / 2,
  },
});

export default memo(RaysSpotlightLayout);
