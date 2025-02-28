import { Box, Source, StackedShadowWrapper, TextTemplate } from "@atoms";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Colours } from "@styles";
import { memo } from "react";
import { Image, StyleSheet } from "react-native";

interface IWalletItem<T> {
  description: string;
  icon?: Source;
  label?: string;
  onPress?: T;
  title: string;
  info?: string;
}
interface WalletItemProps<T> {
  item: IWalletItem<T>;
  onPress: (action: T) => void;
}

const WalletItem = <T,>({ item, onPress }: WalletItemProps<T>) => (
  <TouchableOpacityWithDelay onPress={() => onPress(item.onPress)}>
    <StackedShadowWrapper style={styles.container} stackColors={["#E7E7EB"]} outerStyle={styles.outerContainer}>
      <Box flex={1} style={styles.imageContainer}>
        <Image style={styles.image} source={item.icon} resizeMode="cover" />
      </Box>
      <Box flex={1} style={styles.rightContainer}>
        <Box style={styles.titleContainer}>
          <TextTemplate color={"#5C5757"} type="b1b" numberOfLines={1}>
            {item.title}
          </TextTemplate>
          <Box style={styles.chevronContainer}>
            <ChevronIcon size={24} direction="right" color={Colours.button.link} />
          </Box>
        </Box>
        <Box style={styles.descriptionContainer}>
          <TextTemplate color={"#5C5757"} type="b2b" numberOfLines={2}>
            {item.description}
          </TextTemplate>
        </Box>
        <Box style={styles.infoContainer}>
          <TextTemplate color={"#5C5757"} type="b2">
            {item.info}
          </TextTemplate>
        </Box>
      </Box>
    </StackedShadowWrapper>
  </TouchableOpacityWithDelay>
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
  outerContainer: { flex: 2, marginBottom: 20 },
  imageContainer: { alignItems: "flex-start", justifyContent: "center" },
  image: { width: 140, height: 140, borderRadius: 16 },
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
  labelContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#956AFF",
  },
  chevronContainer: { paddingVertical: 4 },
  descriptionContainer: {
    minHeight: 40,
  },
  infoContainer: { minHeight: 40 },
});

export default memo(WalletItem);
