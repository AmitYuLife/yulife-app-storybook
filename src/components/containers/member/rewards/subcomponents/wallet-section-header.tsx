import { Box, SkeletonLoading, Source, TextTemplate } from "@atoms";
import { Colours, StyleSheet } from "@styles";
import { Image } from "expo-image";
import { memo } from "react";

const TEXT_COLOR = Colours.neutral.n900;

export type MobileGameUserWalletSectionHeader = {
  item_type: "section-header";
  title: string;
  description?: string;
  icon: Source;
  onPress: () => void;
};

const WalletSectionHeader = ({ title, description, icon }: MobileGameUserWalletSectionHeader) => (
  <Box flexDirection="column" style={styles.descriptionContainer} mb={16}>
    <Box flexDirection="row">
      <Box style={styles.imageContainer}>
        <Image style={styles.image} source={icon} />
      </Box>
      <TextTemplate color={"#464647"} type="b1b">
        {title}
      </TextTemplate>
    </Box>
    <Box>
      <TextTemplate color={"#464647"} type="b2">
        {description}
      </TextTemplate>
    </Box>
  </Box>
);

export const WalletSectionHeaderLoading = memo(() => (
  <Box flexDirection="column" style={styles.descriptionContainer} mb={16}>
    <Box flexDirection="row">
      <Box style={styles.imageContainer}>
        <SkeletonLoading style={styles.image} />
      </Box>
      <SkeletonLoading style={styles.titleLoading} />
    </Box>
    <Box>
      <SkeletonLoading style={styles.descriptionLoading} />
    </Box>
  </Box>
));

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
    marginEnd: 10,
    marginBottom: 4,
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: "contain",
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
  titleLoading: {
    height: 20,
    marginVertical: 2,
    width: 80,
  },
  descriptionLoading: {
    height: 16,
    marginVertical: 4,
    width: "100%",
  },
});

export default memo(WalletSectionHeader);
