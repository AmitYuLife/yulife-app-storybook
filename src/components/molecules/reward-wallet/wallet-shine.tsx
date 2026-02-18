import { Box } from "@atoms";
import type Lottie from "lottie-react-native";
import LottieView from "../lottie-view/lottie-view";
import { memo, useCallback, useEffect, useRef } from "react";

import { StyleSheet } from "@styles";
const shineLottie = require("@assets/lottie/wallet/shine.lottie");

interface IWalletShineProps {
  index?: number;
}

const INITIAL_DELAY = 500;
const STAGGER_DELAY = 500;
const DELAY_SPEED = 20000;

const WalletShine = ({ index }: IWalletShineProps) => {
  const lottieRef = useRef<Lottie>(null);

  useEffect(() => {
    setTimeout(() => {
      lottieRef.current?.play();
    }, INITIAL_DELAY + STAGGER_DELAY * index);
  }, [index]);

  const onAnimationComplete = useCallback(() => {
    setTimeout(() => {
      lottieRef.current?.play();
    }, DELAY_SPEED * Math.random());
  }, []);

  return (
    <Box position="absolute" top={0} left={0} right={0} bottom={0}>
      <LottieView
        speed={0.75}
        loop={false}
        ref={lottieRef}
        autoPlay={false}
        resizeMode="cover"
        source={shineLottie}
        style={styles.lottie}
        onAnimationFinish={onAnimationComplete}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: "100%",
    height: "100%",
  },
});

export default memo(WalletShine);
