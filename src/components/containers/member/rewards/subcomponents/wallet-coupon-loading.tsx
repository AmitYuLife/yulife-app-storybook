import { Box, SkeletonLoading, StackedShadowWrapper } from "@atoms";
import { Colours } from "@styles";
import { memo } from "react";
import { StyleSheet } from "react-native";

const TEXT_COLOR = Colours.metallic.m100;
const IMAGE_COLOR = Colours.metallic.m100;
const BORDER_COLORS = [Colours.metallic.m100, Colours.metallic.m100, Colours.metallic.m100];
interface IProps {
  type?: "card" | "item";
}
const WalletCouponLoading = ({ type = "card" }: IProps) => {
  const borderColors = type === "card" ? BORDER_COLORS : [BORDER_COLORS[0]];
  return (
    <Box flexDirection="row" pb={20}>
      <StackedShadowWrapper
        style={styles.leftContainer}
        outerStyle={styles.leftOuterContainer}
        stackColors={borderColors}
      >
        <Box>
          <SkeletonLoading style={styles.labelContainer} />
        </Box>
        <Box>
          <SkeletonLoading style={styles.titleContainer} />
          <SkeletonLoading style={styles.descriptionContainer} />
          <SkeletonLoading style={styles.descriptionContainer} />
        </Box>
      </StackedShadowWrapper>
      <StackedShadowWrapper
        style={styles.rightContainer}
        outerStyle={styles.rightOuterContainer}
        stackColors={borderColors}
      >
        <Box flex={1}>
          <SkeletonLoading style={styles.imageContainer} />
        </Box>
        <Box flex={1} alignItems="center" flexDirection="column" justifyContent="center" ph={10}>
          <SkeletonLoading style={styles.infoContainer} />
        </Box>
      </StackedShadowWrapper>
    </Box>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    height: 160,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  leftOuterContainer: { flex: 2 },
  rightContainer: {
    height: 160,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
  rightOuterContainer: { flex: 1 },
  imageContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: IMAGE_COLOR,
    borderRadius: 0,
  },
  infoContainer: {
    height: 24,
    width: "100%",
    backgroundColor: TEXT_COLOR,
  },
  labelContainer: {
    height: 24,
    width: 80,
    backgroundColor: TEXT_COLOR,
  },
  titleContainer: {
    marginVertical: 4,
    height: 24,
    maxWidth: 120,
    backgroundColor: TEXT_COLOR,
  },
  descriptionContainer: {
    height: 14,
    marginVertical: 2,
    width: "100%",
    backgroundColor: TEXT_COLOR,
  },
});

export default memo(WalletCouponLoading);
