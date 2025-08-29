import { memo, useEffect, useRef } from "react";
import Lottie from "lottie-react-native";
import LottieView from "lottie-react-native";
import { Box } from "@atoms";

import { StyleSheet } from "@styles";
const RewardPassLottieStars = ({ delay }: { delay: number }) => {
  const lottieRef = useRef<Lottie>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      lottieRef?.current?.play();
    }, delay);

    return () => clearTimeout(timeout);
  }, [lottieRef, delay]);

  return (
    <>
      <Box position="absolute" w="100%" h="100%" alignItems="center" justifyContent="center">
        <LottieView
          ref={lottieRef}
          source={require("./reward-pass-stars.lottie")}
          style={styles.lottie}
          loop={true}
          autoPlay={false}
        />
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: "100%",
    height: "100%",
  },
});

export default memo(RewardPassLottieStars);
