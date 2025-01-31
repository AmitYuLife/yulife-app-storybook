import { memo, useCallback, useEffect, useRef } from "react";
import Lottie from "lottie-react-native";
import { Box } from "@atoms";
import { LottieView } from "@molecules";
import { Style } from "@styles";
import { ViewStyle } from "react-native";
import SvgBackground from "./svg-background";
import { DETOX_ENABLED } from "@services/socket";

const LOTTIE_ANIMATION = require("./gifts-loader.json");

type Props = {
  showAnimation: boolean;
  setFinishedAnimation: React.Dispatch<React.SetStateAction<boolean>>;
};

const GiftViewLoading = ({ showAnimation, setFinishedAnimation }: Props) => {
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

  return (
    <Box w="100%" h={Style.DEVICE_HEIGHT} alignItems="center">
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

const lottieStyle: ViewStyle = {
  position: "absolute",
  width: Style.DEVICE_WIDTH,
  height: Style.DEVICE_HEIGHT,
};

export default memo(GiftViewLoading);
