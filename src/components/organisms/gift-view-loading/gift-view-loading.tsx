import { memo, useCallback, useMemo, useRef } from "react";
import type Lottie from "lottie-react-native";
import { Box } from "@atoms";
import { LottieView } from "@molecules";
import { Style } from "@styles";
import { ViewStyle } from "react-native";
import SvgBackground, { TRIANGLE_HEIGHT } from "./svg-background";
import { VoidFunction } from "@utils";

const LOTTIE_ANIMATION = require("./gifts-loader.json");

type Props = {
  showAnimation: boolean;
  onFirstLoopComplete?: VoidFunction;
  lottieTopOffset?: number;
};

const DEVICE_HEIGHT_WITH_OVERSHOOT = Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT;

const GiftViewLoading = ({ showAnimation, onFirstLoopComplete, lottieTopOffset = 0 }: Props) => {
  const lottieRef = useRef<Lottie>(null);
  const hasCompletedFirstLoop = useRef(false);

  const handleAnimationFinish = useCallback(
    (isCancelled: boolean) => {
      if (isCancelled) {
        return;
      }

      if (!hasCompletedFirstLoop.current) {
        hasCompletedFirstLoop.current = true;
        onFirstLoopComplete?.();
      }

      lottieRef.current?.play();
    },
    [onFirstLoopComplete]
  );

  const lottieStyle = useMemo<ViewStyle>(
    () => ({
      position: "absolute",
      top: lottieTopOffset,
      width: Style.DEVICE_WIDTH,
      height: Style.DEVICE_HEIGHT,
    }),
    [lottieTopOffset]
  );

  return (
    <Box w="100%" h={DEVICE_HEIGHT_WITH_OVERSHOOT} alignItems="center">
      <SvgBackground />
      {!showAnimation ? null : (
        <LottieView
          ref={lottieRef}
          resizeMode="cover"
          style={lottieStyle}
          source={LOTTIE_ANIMATION}
          loop={false}
          autoPlay={true}
          onAnimationFinish={handleAnimationFinish}
        />
      )}
    </Box>
  );
};

export default memo(GiftViewLoading);
