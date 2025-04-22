import { Box, SkeletonLoading, StackedShadowWrapper } from "@atoms";
import { Colours } from "@styles";
import { memo } from "react";
import { StyleSheet } from "react-native";

const TEXT_COLOR = Colours.metallic.m100;
const IMAGE_COLOR = Colours.metallic.m100;
const BORDER_COLORS = [Colours.metallic.m100];
const WalletItemLoading = () => (
  <StackedShadowWrapper style={styles.container} stackColors={BORDER_COLORS} outerStyle={styles.outerContainer}>
    <Box style={styles.imageContainer}>
      <SkeletonLoading style={styles.image} />
    </Box>
    <Box style={styles.rightContainer}>
      <Box style={styles.titleContainer}>
        <SkeletonLoading style={styles.title} />
      </Box>
      <Box style={styles.descriptionContainer}>
        <SkeletonLoading style={styles.description} />
        <SkeletonLoading style={styles.description} />
      </Box>
    </Box>
  </StackedShadowWrapper>
);

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: "#FFFFFF",
    padding: 10,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  outerContainer: {
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: IMAGE_COLOR,
  },
  rightContainer: {
    flex: 1,
    padding: 16,
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
  descriptionContainer: {
    minHeight: 40,
    alignItems: "flex-start",
  },
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
