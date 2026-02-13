import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import Lottie from "lottie-react-native";
import { Box } from "@atoms";
import { LottieView } from "@molecules";
import { Style } from "@styles";
import { ViewStyle } from "react-native";
import SvgBackground, { TRIANGLE_HEIGHT } from "./svg-background";
import { DETOX_ENABLED } from "@services/socket";

const LOTTIE_ANIMATION = require("./gifts-loader.json");

type Props = {
  showAnimation: boolean;
  setFinishedAnimation: React.Dispatch<React.SetStateAction<boolean>>;
  lottieTopOffset?: number;
};

const DEVICE_HEIGHT_WITH_OVERSHOOT = Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT;

const GiftViewLoading = ({ showAnimation, setFinishedAnimation, lottieTopOffset = 0 }: Props) => {
  const lottieRef = useRef<Lottie>(null);

  useEffect(() => {
    if (showAnimation && !DETOX_ENABLED) {
      lottieRef.current?.play();
    } else if (DETOX_ENABLED) {
      setFinishedAnimation(true);
    }
  }, [showAnimation]);

  const onAnimationFinish = useCallback(() => {
    lottieRef.current?.play();
    setFinishedAnimation(true);
  }, []);

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
          autoPlay={false}
          onAnimationFinish={onAnimationFinish}
        />
      )}
    </Box>
  );
};

export default memo(GiftViewLoading);
