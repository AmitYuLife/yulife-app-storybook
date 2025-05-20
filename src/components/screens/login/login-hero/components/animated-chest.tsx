import { memo, useCallback, useRef, useState } from "react";
import { Box } from "@atoms";
import LoginChestFallback from "./svgs/login-chest-fallback";
import Lottie from "lottie-react-native";
import { LottieView } from "@components/molecules";
import RewardLogos from "./reward-logos";
import { useTimeout } from "@hooks";
import { AnimatedChestProps } from "../types";
import { DETOX_ENABLED } from "@services/socket";
import { getChestSize } from "@components/screens/login/login-hero/constants";
import { useLoginHeroContext } from "@components/screens/login/login-hero/login-hero.context";

const AnimatedChest = ({ rewards }: AnimatedChestProps) => {
  const lottieRef = useRef<Lottie>(null);

  const [isLottieFinished, setIsLottieFinished] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useTimeout(() => setIsLottieFinished(true), 3500);

  const handleAnimationFailure = useCallback(() => {
    setUseFallback(true);
  }, []);

  const { titleSectionHeight, ctaContainerHeight } = useLoginHeroContext();
  const { height, width } = getChestSize(titleSectionHeight, ctaContainerHeight);

  return (
    <Box justifyContent="center" alignItems="center">
      <LottieView
        resizeMode="cover"
        style={{ height, width }}
        ref={lottieRef}
        source={require("./assets/login-chest.lottie")}
        autoPlay={!DETOX_ENABLED}
        loop={false}
        onAnimationFailure={handleAnimationFailure}
      />
      {useFallback ? <LoginChestFallback width={width} height={height} /> : null}
      {isLottieFinished ? <RewardLogos rewards={rewards} /> : null}
    </Box>
  );
};

export default memo(AnimatedChest);
