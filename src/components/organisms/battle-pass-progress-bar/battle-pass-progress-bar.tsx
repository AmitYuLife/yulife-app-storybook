import { Image, TextTemplate } from "@atoms";
import React, { memo, useEffect, useMemo } from "react";
import { View } from "react-native";
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
import BattlePassFlashCoin from "./subcomponents/battle-pass-flash-coin";
import { Style, StyleSheet } from "@styles";
import { BUBBLE_CONTAINER_SIZE } from "./battle-pass-progress-bar.constants";
import { DONATIONS_PROGRESS_BAR } from "@ids";
import { t } from "@locale";

export interface IBattlePassProgressBar {
  level: number;
  step: number;
  steps: number;
  status: string;
  backgroundColor?: string;
  fillColor?: string;
  icon?: string;
}

const BattlePassProgressBar = ({
  level,
  step,
  steps,
  backgroundColor = "#EFF0FA",
  fillColor = "#E30D76",
  icon,
}: IBattlePassProgressBar) => {
  const progressWidth = useSharedValue(0);
  const isSuccessPlaying = useSharedValue(false);

  const progressStyle = useAnimatedStyle(() => {
    const opacity = withTiming(progressWidth.value <= 0 ? 0 : 1);

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
        opacity,
      };
    }

    return {
      width: withSpring(`${width}%`),
      height: "100%",
      opacity,
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

  const activeProgressAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(progressWidth.value <= 0 ? 0 : 1),
  }));

  const activeProgressStyle = useMemo(() => {
    return [
      progressStyle,
      {
        backgroundColor: fillColor,
      },
      activeProgressAnimatedStyle,
    ];
  }, [progressStyle, fillColor, activeProgressAnimatedStyle]);

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
      <View
        style={styles.container}
        testID={DONATIONS_PROGRESS_BAR(step, steps, level)}
        accessibilityLabel={t("screens.battle_pass.accessibility.progress_bar", { step, steps, level: level + 1 })}
      >
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
          <View style={[styles.progressEmpty, { backgroundColor }]} />
          <View style={styles.absoluteFilled}>
            <Animated.View style={activeProgressStyle} />
          </View>
          <View style={styles.wrapper}>
            <View style={[styles.progress, styles.transparentBackground]}>
              <MaskedView
                style={styles.fullDimensions}
                maskElement={
                  <View style={styles.maskedTextContainer}>
                    <View style={styles.maskedBubble} />
                    <View style={styles.progressTextContainer}>
                      <TextTemplate type="b2b" color={"#ffffff"} lineHeight={BUBBLE_CONTAINER_SIZE}>
                        {step}/{steps}
                      </TextTemplate>
                    </View>
                    <View style={styles.maskedBubble}>
                      {icon ? null : (
                        <TextTemplate type="b2b" color={"#ffffff"} lineHeight={BUBBLE_CONTAINER_SIZE}>
                          {level + 1}
                        </TextTemplate>
                      )}
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
        {!icon ? null : (
          <View style={styles.icon}>
            <Image source={{ uri: icon }} width={Style.adjust(24)} height={Style.adjust(24)} />
          </View>
        )}
        <View style={[styles.yucoin, styles.yucoinImageContainer, styles.transparentBackground]}>
          <BattlePassFlashCoin step={step} />
        </View>
      </View>
    </>
  );
};

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
    elevation: 3,
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
    height: BUBBLE_CONTAINER_SIZE,
    justifyContent: "center",
    alignItems: "center",
  },
  maskedBubble: {
    width: BUBBLE_CONTAINER_SIZE,
    height: BUBBLE_CONTAINER_SIZE,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    height: BUBBLE_CONTAINER_SIZE,
    alignItems: "center",
    flexDirection: "row",
  },
  yucoin: {
    borderRadius: Style.adjust(100),
    backgroundColor: "#EFF0FA",
    width: BUBBLE_CONTAINER_SIZE,
    justifyContent: "center",
    height: BUBBLE_CONTAINER_SIZE,
    alignItems: "center",
    position: "absolute",
  },
  yucoinProgress: {
    backgroundColor: "#F43E8E",
    left: 0,
    height: BUBBLE_CONTAINER_SIZE,
    width: BUBBLE_CONTAINER_SIZE,
    borderRadius: BUBBLE_CONTAINER_SIZE * 2,
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
    paddingHorizontal: BUBBLE_CONTAINER_SIZE / 2,
    flex: 1,
  },
  progressEmpty: {
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
    height: Style.adjust(26),
  },
  absoluteFilled: { width: "100%", height: "100%", position: "absolute" },
  icon: {
    position: "absolute",
    right: Style.adjust(19),
  },
});
export default memo(BattlePassProgressBar);
