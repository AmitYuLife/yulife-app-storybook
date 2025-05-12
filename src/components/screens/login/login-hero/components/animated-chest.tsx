import { memo, useCallback, useRef, useState } from "react";
import { Box } from "@atoms";
import LoginChestFallback from "./svgs/login-chest-fallback";
import Lottie from "lottie-react-native";
import { LottieView } from "@components/molecules";
import { StyleSheet } from "react-native";
import RewardLogos from "./reward-logos";
import { useTimeout } from "@hooks";
import { CHEST_HEIGHT, CHEST_WIDTH } from "../constants";
import { AnimatedChestProps } from "../types";

const AnimatedChest = ({ rewards }: AnimatedChestProps) => {
  const lottieRef = useRef<Lottie>(null);

  const [isLottieFinished, setIsLottieFinished] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useTimeout(() => setIsLottieFinished(true), 3500);

  const handleAnimationFailure = useCallback(() => {
    setUseFallback(true);
  }, []);

  return (
    <Box justifyContent="center" alignItems="center">
      <LottieView
        resizeMode="cover"
        style={styles.lottie}
        ref={lottieRef}
        source={require("./assets/login-chest.lottie")}
        autoPlay={true}
        loop={false}
        onAnimationFailure={handleAnimationFailure}
      />
      {useFallback ? <LoginChestFallback width={CHEST_WIDTH} height={CHEST_HEIGHT} /> : null}
      {isLottieFinished ? <RewardLogos rewards={rewards} /> : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: CHEST_WIDTH,
    height: CHEST_HEIGHT,
  },
});

export default memo(AnimatedChest);
