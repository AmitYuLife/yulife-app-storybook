import React, { memo, useMemo } from "react";
import { View } from "react-native";
import tileStyles from "./challenge-tile.styles";
import { Style, StyleSheet } from "@styles";
import { SkeletonLoading, Box } from "@atoms";
import LottieView from "../lottie-view/lottie-view";

const CHALLENGE_TILE_SHEEN = require("./challenge-tile-sheen.json");

interface IChallengeTileLoadingProps {
  tileColour?: string;
}

const ChallengeTileLoading = ({ tileColour = "#E3E3E1" }: IChallengeTileLoadingProps) => {
  const imageWrapper = useMemo(() => {
    return {
      ...styles.imageWrapper,
      backgroundColor: tileColour,
    };
  }, [tileColour]);

  return (
    <View style={tileStyles.wrapper}>
      <View style={imageWrapper}>
        <LottieView
          source={CHALLENGE_TILE_SHEEN}
          resizeMode="cover"
          speed={0.4}
          style={styles.animation}
          loop={true}
          autoPlay={true}
        />
      </View>
      <View style={tileStyles.sectionBottomShadow}>
        <View style={tileStyles.sectionBottomWrapper}>
          <View style={tileStyles.contentWrapper}>
            <SkeletonLoading style={styles.title} />
            <View style={tileStyles.contentBottom}>
              <Box gap={10} style={styles.bottomLineWrapper} justifyContent="space-between">
                <SkeletonLoading style={styles.coinText} />
                <View style={styles.nextButtonWrapper}>
                  <SkeletonLoading style={styles.nextButton} />
                </View>
              </Box>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animation: {
    ...tileStyles.imageBackground,
    overflow: "hidden",
    opacity: 0.6,
  },
  bottomLineWrapper: {
    ...tileStyles.contentRewardWrapper,
    width: "100%",
  },
  imageWrapper: {
    ...tileStyles.imageWrapper,
    overflow: "hidden",
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
  },
  title: { height: Style.adjust(24), width: "100%" },
  coinText: {
    width: "50%",
    height: Style.adjust(24),
  },
  nextButton: {
    width: Style.adjust(24),
    height: Style.adjust(24),
    borderRadius: 100,
  },
  nextButtonWrapper: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default memo(ChallengeTileLoading);
