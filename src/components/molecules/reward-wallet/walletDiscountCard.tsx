import { Box, Source, StackedShadowWrapper, TextTemplate } from "@atoms";
import { LottieView, TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style } from "@styles";
import { memo } from "react";
import { Image, StyleSheet } from "react-native";

const HIT_SLOP_SIZE = Style.adjust(8);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: Style.adjust(12),
  top: HIT_SLOP_SIZE,
};
const shineLottie = require("@assets/lottie/wallet/shine.json");
interface IWalletDiscount<T> {
  description: string;
  icon?: Source;
  label?: string;
  onPress?: T;
  title: string;
  info?: string;
  secondaryInfo?: string;
}
interface WalletItemProps<T> {
  item: IWalletDiscount<T>;
  onPress: (action: T) => void;
}

const WalletDiscountCard = <T,>({ item, onPress }: WalletItemProps<T>) => (
  <TouchableOpacityWithDelay onPress={() => onPress(item.onPress)} hitSlop={HIT_SLOP}>
    <Box flexDirection="row" pb={20}>
      <StackedShadowWrapper
        style={styles.leftContainer}
        outerStyle={styles.leftOuterContainer}
        stackColors={["#FFB525", "#FFCE70", "#FFDFA0"]}
      >
        <Box style={StyleSheet.absoluteFillObject}>
          <LottieView style={styles.lottie} source={shineLottie} autoPlay={true} loop={true} resizeMode="cover" />
        </Box>
        <Box br={8} ph={12} pv={4} bg={Colours.neutral.white}>
          <TextTemplate color={"#640038"} type="l2b">
            {item.label}
          </TextTemplate>
        </Box>
        <Box>
          <TextTemplate color={"#640038"} type="h3" numberOfLines={1}>
            {item.title}
          </TextTemplate>
          <TextTemplate color={"#464647"} type="l1" numberOfLines={2}>
            {item.description}
          </TextTemplate>
        </Box>
      </StackedShadowWrapper>
      <StackedShadowWrapper
        style={styles.rightContainer}
        outerStyle={styles.rightOuterContainer}
        stackColors={["#FFB525", "#FFCE70", "#FFDFA0"]}
      >
        <Box flex={1}>
          <Image style={styles.image} source={item.icon} resizeMode="cover" />
        </Box>
        <Box flex={1} style={styles.infoContainer}>
          <TextTemplate color={"#464647"} type="h3" numberOfLines={1}>
            {item.info}
          </TextTemplate>
          <TextTemplate color={"#464647"} type="l2" numberOfLines={1}>
            {item.secondaryInfo}
          </TextTemplate>
        </Box>
      </StackedShadowWrapper>
    </Box>
  </TouchableOpacityWithDelay>
);

const styles = StyleSheet.create({
  leftContainer: {
    height: 160,
    backgroundColor: "#FFD600",
    padding: 20,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  leftOuterContainer: { flex: 2 },
  rightContainer: {
    height: 160,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
  rightOuterContainer: { flex: 1 },
  infoContainer: { alignItems: "center", justifyContent: "center" },
  image: { width: "100%", height: "100%" },
  textContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  lottie: { width: "100%", height: "100%" },
});

export default memo(WalletDiscountCard);
