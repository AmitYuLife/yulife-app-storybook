import { Image } from "@atoms";
import { LottieView } from "@components/molecules";
import { Style } from "@styles";
import { ImageSource } from "expo-image";
import LottieViewRef from "lottie-react-native";
import React, { memo, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";

interface IBattlePassRewardProps {
  size: number;
  delay?: number;
  source: ImageSource;
  children?: React.ReactNode;
}

const BattlePassReward = ({ size, delay = 0, source, children }: IBattlePassRewardProps) => {
  const starLottie1Ref = useRef<LottieViewRef>(null);
  const starLottie2Ref = useRef<LottieViewRef>(null);
  const bubbleRef = useRef<LottieViewRef>(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      starLottie1Ref.current?.play(0, 60);
    }, delay);

    const timeout2 = setTimeout(() => {
      starLottie2Ref.current?.play(60, 117);
    }, delay + 1250);

    const timeout3 = setTimeout(() => {
      bubbleRef.current?.play();
    }, delay);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [delay]);

  const starStyles = { width: Style.adjust(size * 3), height: Style.adjust(size * 3) };

  return (
    <View style={StyleSheet.flatten([styles.container, { width: size, height: size }])}>
      <LottieView
        ref={starLottie1Ref}
        source={require("./battle-pass-level-up-stars.lottie")}
        style={starStyles}
        loop={true}
      />

      <LottieView
        ref={starLottie2Ref}
        source={require("./battle-pass-level-up-stars.lottie")}
        style={[starStyles, styles.absoluteLottie]}
        loop={true}
        speed={1}
      />
      <LottieView
        ref={bubbleRef}
        source={require("./battle-pass-level-up-bubbles.lottie")}
        style={[starStyles, styles.absoluteLottie]}
        loop={true}
        speed={1}
      />
      {children || (
        <Image suppressLoadingUi={true} style={styles.rewardOverlayIcon} width={Style.adjust(size)} source={source} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  absoluteLottie: {
    position: "absolute",
  },
  rewardOverlayIcon: { position: "absolute" },
});

export default memo(BattlePassReward);
