import { Box } from "@atoms";
import { AnimatedPlusPoints, LottieView } from "@components/molecules";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";

interface Args {
  showPlusPoints?: boolean;
  reward?: number;
  source: string;
  autoPlay: boolean;
}

const ChestLottieView = ({ showPlusPoints, source, autoPlay, reward }: Args) => {
  return (
    <Box
      position="absolute"
      top={-lottieSize * 0.1}
      left={(Style.DEVICE_WIDTH - lottieSize) / 2}
      alignItems="center"
      justifyContent="center"
      disableAutoAdjust={true}
    >
      <Box top={130}>
        {showPlusPoints ? <AnimatedPlusPoints type="collect-reward" coins={reward} textType="h3" /> : null}
      </Box>
      <LottieView style={styles.lottie} source={source} autoPlay={autoPlay} loop={false} />
    </Box>
  );
};

const lottieSize = Style.DEVICE_WIDTH * 2;

const styles = StyleSheet.create({
  lottie: {
    width: lottieSize,
    height: lottieSize,
  },
});

export default memo(ChestLottieView);
