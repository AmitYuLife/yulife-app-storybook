import { Box, SkeletonLoading, Source } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { Image } from "expo-image";
import { memo } from "react";

export type MobileGameUserWalletHeader = {
  item_type: "header";
  image: Source;
};

const ASPECT_RATIO = 206 / 344;
const IMAGE_WIDTH = Style.SCREEN_WIDTH - 2 * Style.adjust(16);
const IMAGE_HEIGHT = ASPECT_RATIO * IMAGE_WIDTH;
const WalletHeader = ({ image }: MobileGameUserWalletHeader) => (
  <Box style={styles.imageContainer}>
    <Image style={styles.image} source={image} />
  </Box>
);

export const WalletHeaderLoading = memo(() => (
  <Box style={styles.imageContainer}>
    <SkeletonLoading style={styles.image} />
  </Box>
));

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 24,
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: Style.adjust(10),
  },
});

export default memo(WalletHeader);
