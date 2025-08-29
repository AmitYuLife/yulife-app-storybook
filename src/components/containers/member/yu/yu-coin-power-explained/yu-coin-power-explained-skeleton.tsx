import { Style, StyleSheet } from "@styles";
import { View } from "react-native";
import React, { memo, useMemo } from "react";
import { GenericHeadingPad } from "@organisms";
import { Box, SkeletonLoading } from "@atoms";
import { PADDING_LARGE, yuCoinExplainedStyles } from "./yu-coin-power-explained";

const YuCoinPowerExplainedSkeleton = () => {
  const productSelectStyle = useMemo(() => [yuCoinExplainedStyles.wrapper, yuCoinExplainedStyles.paddedSection], []);
  const yuCoinPowerCardWrapperStyle = useMemo(
    () => [yuCoinExplainedStyles.yuCoinPowerCard, yuCoinExplainedStyles.paddedSection],
    []
  );

  return (
    <View style={yuCoinExplainedStyles.scrollViewContainer}>
      <GenericHeadingPad />
      <Box gap={10} style={yuCoinExplainedStyles.wrapper}>
        <View style={yuCoinPowerCardWrapperStyle}>
          <SkeletonLoading style={styles.skeletonYuCoinPowerCard} />
        </View>
        <Box gap={PADDING_LARGE} style={productSelectStyle}>
          <Box gap={10}>
            <SkeletonLoading style={styles.skeletonTitle1} />
            <SkeletonLoading style={styles.skeletonProductSelect} />
          </Box>
          <Box gap={10}>
            <SkeletonLoading style={styles.skeletonTitle2} />
            <Box gap={10} flexDirection={"row"}>
              <SkeletonLoading style={styles.skeletonActivityPanel} />
              <SkeletonLoading style={styles.skeletonActivityPanel} />
              <SkeletonLoading style={styles.skeletonActivityPanel} />
            </Box>
          </Box>
          <Box gap={10}>
            <SkeletonLoading style={styles.skeletonTitle3} />
            <Box flexDirection={"row"} gap={10}>
              <SkeletonLoading style={styles.skeletonActivityPanel} />
              <SkeletonLoading style={styles.skeletonActivityPanel} />
              <SkeletonLoading style={styles.skeletonActivityPanel} />
            </Box>
          </Box>
          <SkeletonLoading style={styles.skeletonProductCard} />
        </Box>
      </Box>
    </View>
  );
};

export default memo(YuCoinPowerExplainedSkeleton);

const styles = StyleSheet.create({
  skeletonProductSelect: { height: Style.adjust(80) },
  skeletonProductCard: { width: "100%", height: Style.adjust(200) },
  skeletonYuCoinPowerCard: { width: "100%", height: Style.adjust(90) },
  skeletonTitle1: { width: Style.adjust(200), height: Style.adjust(20) },
  skeletonTitle2: { width: Style.adjust(160), height: Style.adjust(20) },
  skeletonTitle3: { width: Style.adjust(180), height: Style.adjust(20) },
  skeletonActivityPanel: { width: Style.adjust(100), height: Style.adjust(150) },
});
