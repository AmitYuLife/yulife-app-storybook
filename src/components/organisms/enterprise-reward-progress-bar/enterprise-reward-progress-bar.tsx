import { TextTemplate } from "@atoms";
import React, { memo, useEffect, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import EnterpriseFlashCoin from "./subcomponents/enterprise-flash-coin";
import { Style } from "@styles";
import EnterpriseRecentTransactionBar from "./subcomponents/enterprise-recent-transaction-bar";

export interface IEnterpriseRewardProgressBar {
  level: number;
  step: number;
  steps: number;
}

const EnterpriseRewardProgressBar = ({ level, step, steps }: IEnterpriseRewardProgressBar) => {
  const progressWidth = useSharedValue(0);
  const isSuccessPlaying = useSharedValue(false);

  const progressStyle = useAnimatedStyle(() => {
    const width = interpolate(
      progressWidth.value,
      [0, 100],
      [progressWidth.value <= 0 ? 0 : 13, 100],
      Extrapolation.CLAMP
    );

    if (isSuccessPlaying.value) {
      return {
        width: withSequence(
          withSpring(100),
          withDelay(
            0,
            withTiming(0, { duration: 0 }, () => {
              isSuccessPlaying.value = false;
            })
          )
        ),
        height: "100%",
      };
    }

    return {
      width: withSpring(`${width}%`),
      height: "100%",
    };
  });

  useEffect(() => {
    if (step === 0 && progressWidth.value > 0) {
      isSuccessPlaying.value = true;
      progressWidth.value = 100;
    }

    if (!isSuccessPlaying.value) {
      progressWidth.value = (step / steps) * 100;
    }
  }, [isSuccessPlaying, progressWidth, step, steps]);

  const activeProgressStyle = useMemo(() => {
    return [
      progressStyle,
      {
        backgroundColor: "#E30D76",
      },
    ];
  }, [progressStyle]);

  const whiteProgressStyle = useMemo(() => {
    return [
      progressStyle,
      {
        backgroundColor: "#ffffff",
      },
    ];
  }, [progressStyle]);

  return (
    <>
      <View style={styles.container}>
        {/* Mask view for entire progress bar */}
        <MaskedView
          maskElement={
            <View style={styles.wrapper}>
              <View style={styles.progressWrapper}>
                <View style={styles.progress} />
              </View>
              <View style={styles.yucoin} />
              <View style={[styles.yucoin, styles.levelNumber]} />
            </View>
          }
        >
          <View style={styles.progressEmpty} />
          <View style={styles.absoluteFilled}>
            <Animated.View style={activeProgressStyle} />
          </View>
          <View style={styles.wrapper}>
            <View style={[styles.progress, styles.transparentBackground]}>
              {/* Masked view for steps text */}
              <MaskedView
                style={styles.fullDimensions}
                maskElement={
                  <View style={styles.maskedTextContainer}>
                    <View style={styles.maskedBubble} />
                    <View style={styles.progressTextContainer}>
                      <TextTemplate type="b2b" color={"#ffffff"} lineHeight={BUBBLE_CONTAINER}>
                        {step}/{steps}
                      </TextTemplate>
                    </View>
                    <View style={styles.maskedBubble}>
                      <TextTemplate type="b2b" color={"#ffffff"} lineHeight={BUBBLE_CONTAINER}>
                        {level + 1}
                      </TextTemplate>
                    </View>
                  </View>
                }
              >
                <View style={styles.progressTextEmpty} />
                <Animated.View style={whiteProgressStyle} />
              </MaskedView>
            </View>
          </View>
        </MaskedView>
        <View style={[styles.yucoin, styles.yucoinImageContainer, styles.transparentBackground]}>
          <EnterpriseFlashCoin step={step} />
        </View>
        <EnterpriseRecentTransactionBar step={step} />
      </View>
    </>
  );
};

export const BUBBLE_CONTAINER = Style.adjust(40);

const styles = StyleSheet.create({
  container: {
    padding: Style.adjust(12),
    borderRadius: Style.adjust(10),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.22,
  },
  transparentBackground: {
    backgroundColor: "transparent",
  },
  maskedTextContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  yucoinImageContainer: {
    position: "absolute",
    top: Style.adjust(12),
    left: Style.adjust(12),
  },
  fullDimensions: {
    width: "100%",
    height: "100%",
  },
  progressTextContainer: {
    height: BUBBLE_CONTAINER,
    justifyContent: "center",
    alignItems: "center",
  },
  maskedBubble: {
    width: BUBBLE_CONTAINER,
    height: BUBBLE_CONTAINER,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    height: BUBBLE_CONTAINER,
    alignItems: "center",
    flexDirection: "row",
  },
  yucoin: {
    borderRadius: Style.adjust(100),
    backgroundColor: "#EFF0FA",
    width: BUBBLE_CONTAINER,
    justifyContent: "center",
    height: BUBBLE_CONTAINER,
    alignItems: "center",
    position: "absolute",
  },
  yucoinProgress: {
    backgroundColor: "#F43E8E",
    left: 0,
    height: BUBBLE_CONTAINER,
    width: BUBBLE_CONTAINER,
    borderRadius: BUBBLE_CONTAINER * 2,
    transform: [{ scaleX: 0.5 }],
    transformOrigin: "left",
    position: "absolute",
  },
  levelNumber: {
    right: 0,
  },
  yucoinImage: {
    width: Style.adjust(40),
    height: Style.adjust(40),
  },
  progressWrapper: {
    paddingVertical: Style.adjust(10),
    paddingHorizontal: BUBBLE_CONTAINER / 2,
    flex: 1,
  },
  progressEmpty: {
    backgroundColor: "#EFF0FA",
    width: "100%",
    height: Style.adjust(100),
    position: "absolute",
  },
  progressTextEmpty: {
    backgroundColor: "#A0A09B",
    width: "100%",
    height: Style.adjust(100),
    position: "absolute",
  },
  progress: {
    backgroundColor: "#EFF0FA",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: Style.adjust(28),
  },
  absoluteFilled: { width: "100%", height: "100%", position: "absolute" },
});
export default memo(EnterpriseRewardProgressBar);
