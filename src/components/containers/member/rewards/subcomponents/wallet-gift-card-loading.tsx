import { Box, SkeletonLoading, StackedShadowWrapper } from "@atoms";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import { memo } from "react";
import { StyleSheet } from "react-native";
import { Colours } from "@styles";

const TEXT_COLOR = Colours.metallic.m100;

const IMAGE_COLOR = Colours.metallic.m100;
const BORDER_COLORS = [Colours.metallic.m100];

const WalletCard = () => (
  <StackedShadowWrapper style={styles.container} stackColors={BORDER_COLORS} outerStyle={styles.outerContainer}>
    <Box flex={1} style={styles.imageContainer}>
      <SkeletonLoading style={styles.imageContainer} />
    </Box>
    <Box flex={1} style={styles.rightContainer}>
      <Box>
        <Box style={styles.titleContainer}>
          <SkeletonLoading style={styles.title} />
          <Box style={styles.chevronContainer}>
            <ChevronIcon size={24} direction="right" color={Colours.neutral.n850} />
          </Box>
        </Box>
        <SkeletonLoading style={styles.description} />
        <SkeletonLoading style={styles.description} />
      </Box>
      <Box style={styles.labelContainer}>
        <SkeletonLoading style={styles.label} />
      </Box>
    </Box>
  </StackedShadowWrapper>
);

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "stretch",
  },
  outerContainer: { flex: 2, marginBottom: 20 },
  imageContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: IMAGE_COLOR,
    borderRadius: 0,
  },
  rightContainer: {
    padding: 10,
    alignItems: "stretch",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    height: 20,
    marginVertical: 2,
    width: 80,
    backgroundColor: TEXT_COLOR,
  },
  description: {
    height: 14,
    marginVertical: 2,
    width: "100%",
    backgroundColor: TEXT_COLOR,
  },
  label: {
    height: 24,
    marginVertical: 2,
    width: 100,
    backgroundColor: TEXT_COLOR,
  },
  labelContainer: { alignItems: "flex-start" },
  chevronContainer: { paddingVertical: 4 },
});

export default memo(WalletCard);
