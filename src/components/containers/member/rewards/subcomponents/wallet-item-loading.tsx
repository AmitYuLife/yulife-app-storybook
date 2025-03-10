import { Box, SkeletonLoading, StackedShadowWrapper } from "@atoms";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import { Colours } from "@styles";
import { memo } from "react";
import { StyleSheet } from "react-native";

const TEXT_COLOR = Colours.metallic.m100;
const IMAGE_COLOR = Colours.metallic.m100;
const BORDER_COLORS = [Colours.metallic.m100];
const WalletItemLoading = () => (
  <StackedShadowWrapper style={styles.container} stackColors={BORDER_COLORS} outerStyle={styles.outerContainer}>
    <Box flex={1} style={styles.imageContainer}>
      <SkeletonLoading style={styles.image} />
    </Box>
    <Box flex={1} style={styles.rightContainer}>
      <Box style={styles.titleContainer}>
        <SkeletonLoading style={styles.title} />
        <Box style={styles.chevronContainer}>
          <ChevronIcon size={24} direction="right" color={Colours.button.link} />
        </Box>
      </Box>
      <Box style={styles.descriptionContainer}>
        <SkeletonLoading style={styles.description} />
        <SkeletonLoading style={styles.description} />
      </Box>
      <Box style={styles.infoContainer}>
        <SkeletonLoading style={styles.description} />
      </Box>
    </Box>
  </StackedShadowWrapper>
);

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: "#FFFFFF",
    padding: 10,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  outerContainer: {
    flex: 2,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 16,
    backgroundColor: IMAGE_COLOR,
  },
  rightContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 40,
  },
  chevronContainer: { paddingVertical: 4 },
  descriptionContainer: {
    minHeight: 40,
  },
  infoContainer: { minHeight: 40 },
  title: {
    height: 20,
    marginVertical: 2,
    width: 80,
    backgroundColor: TEXT_COLOR,
  },
  description: {
    height: 16,
    marginVertical: 4,
    width: "100%",
    backgroundColor: TEXT_COLOR,
  },
});

export default memo(WalletItemLoading);
