import { Box, Source, StackedShadowWrapper, TextTemplate } from "@atoms";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Colours } from "@styles";
import { memo } from "react";
import { Image, StyleSheet } from "react-native";

interface IWalletCard<T> {
  description: string;
  icon?: Source;
  label?: string;
  onPress?: T;
  title: string;
  info?: string;
}
interface WalletItemProps<T> {
  item: IWalletCard<T>;
  onPress: (action: T) => void;
}

const WalletCard = <T,>({ item, onPress }: WalletItemProps<T>) => (
  <TouchableOpacityWithDelay onPress={() => onPress(item.onPress)}>
    <StackedShadowWrapper style={styles.container} stackColors={["#E7E7EB"]} outerStyle={styles.outerContainer}>
      <Box flex={1} style={styles.imageContainer}>
        <Image style={styles.image} source={item.icon} resizeMode="cover" />
      </Box>
      <Box flex={1} style={styles.rightContainer}>
        <Box>
          <Box style={styles.titleContainer}>
            <Box flex={1}>
              <TextTemplate color={"#5C5757"} type="b1b" numberOfLines={1}>
                {item.title}
              </TextTemplate>
            </Box>
            <Box style={styles.chevronContainer} flexBasis={24}>
              <ChevronIcon size={24} direction="right" color={"#5C5757"} />
            </Box>
          </Box>
          <TextTemplate color={"#464647"} type="l1" numberOfLines={2}>
            {item.description}
          </TextTemplate>
        </Box>
        <Box style={styles.labelContainer}>
          <Box style={styles.label}>
            <TextTemplate color={Colours.neutral.white} type="l2b">
              {item.info}
            </TextTemplate>
          </Box>
        </Box>
      </Box>
    </StackedShadowWrapper>
  </TouchableOpacityWithDelay>
);

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "stretch",
  },
  outerContainer: { flex: 2, marginBottom: 20 },
  imageContainer: { alignItems: "flex-start", justifyContent: "center" },
  image: { width: "100%", height: "100%" },
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
  label: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#956AFF",
  },
  labelContainer: { alignItems: "flex-start" },
  chevronContainer: { paddingVertical: 4 },
});

export default memo(WalletCard);
