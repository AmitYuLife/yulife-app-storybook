import { ReactNode, memo, useEffect, useRef } from "react";
import { View } from "react-native";
import LottieViewRef from "lottie-react-native";
import { ImageSource } from "expo-image";
import { Image } from "@atoms";
import { LottieView } from "@components/molecules";
import { Style, StyleSheet } from "@styles";

interface IItemDetailsRewardProps {
  size: number;
  delay?: number;
  source?: ImageSource;
  children?: ReactNode;
  starsEnabled?: boolean;
  bubblesEnabled?: boolean;
  starMultiplier?: number;
}

// TODO: rename to AnimatedImage or something like that
const ItemDetailsReward = ({
  size,
  delay = 0,
  source,
  children,
  starsEnabled = true,
  bubblesEnabled = true,
  starMultiplier = 3,
}: IItemDetailsRewardProps) => {
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

  const starStyles = { width: Style.adjust(size * starMultiplier), height: Style.adjust(size * starMultiplier) };

  return (
    <View style={StyleSheet.flatten([styles.container, { width: size, height: size }])}>
      {!starsEnabled ? null : (
        <>
          <LottieView
            ref={starLottie1Ref}
            source={require("./item-details-level-up-stars.lottie")}
            style={starStyles}
            loop={true}
          />

          <LottieView
            ref={starLottie2Ref}
            source={require("./item-details-level-up-stars.lottie")}
            style={[starStyles, styles.absoluteLottie]}
            loop={true}
          />
        </>
      )}
      {!bubblesEnabled ? null : (
        <LottieView
          ref={bubbleRef}
          source={require("./item-details-level-up-bubbles.lottie")}
          style={[starStyles, styles.absoluteLottie]}
          loop={true}
        />
      )}
      {children || (
        <Image
          suppressLoadingUi={true}
          style={styles.rewardOverlayIcon}
          width={Style.adjust(size)}
          height={Style.adjust(size)}
          source={source}
        />
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

export default memo(ItemDetailsReward);
