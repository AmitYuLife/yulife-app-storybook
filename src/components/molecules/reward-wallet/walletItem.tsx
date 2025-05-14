import { Box, Source, StackedShadowWrapper, TextTemplate } from "@atoms";
import { LottieView, TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style, TemplateTextType } from "@styles";
import { memo } from "react";
import { Image, StyleSheet } from "react-native";

const BACKGROUND_COLOUR = "#FFD600";
const SHADOW_COLOUR = "#FFB803";
const TEXT_COLOUR = "#640038";

const HIT_SLOP_SIZE = Style.adjust(8);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: Style.adjust(12),
  top: HIT_SLOP_SIZE,
};
const shineLottie = require("@assets/lottie/wallet/shine.json");
interface IWalletItem<T> {
  description?: string;
  image?: Source;
  label?: string;
  info?: Array<{ text: string; style?: string }>;
  onPress?: T;
  title: string;
}
interface WalletItemProps<T> {
  item: IWalletItem<T>;
  onPress: (action: T) => void;
}

const WalletItem = <T,>({ item, onPress }: WalletItemProps<T>) => (
  <TouchableOpacityWithDelay
    onPress={() => onPress?.(item.onPress)}
    hitSlop={HIT_SLOP}
    accessible={true}
    accessibilityRole="button"
    accessibilityLabel={`${item.title} ${item.description || ""}`}
  >
    <StackedShadowWrapper style={styles.container} stackColors={[SHADOW_COLOUR]} outerStyle={styles.outerContainer}>
      <Box style={StyleSheet.absoluteFillObject}>
        <LottieView style={styles.lottie} source={shineLottie} autoPlay={true} loop={true} resizeMode="cover" />
      </Box>
      <Box style={styles.imageContainer}>
        {item.image && <Image style={styles.image} source={item.image} resizeMode="cover" />}
      </Box>
      <Box style={styles.infoContainer}>
        {!item.label ? null : (
          <Box br={8} ph={12} pv={4} bg={Colours.neutral.white}>
            <TextTemplate color={TEXT_COLOUR} type="l2b">
              {item.label}
            </TextTemplate>
          </Box>
        )}
        <TextTemplate color={TEXT_COLOUR} type="h3">
          {item.title}
        </TextTemplate>
        <TextTemplate color={Colours.neutral.n900} type="b2" numberOfLines={1}>
          {item.description}
        </TextTemplate>
      </Box>
      {item.info && item.info.length > 0 && (
        <Box>
          {item.info.map((infoItem, index) => (
            <TextTemplate key={index} color={TEXT_COLOUR} type={(infoItem.style as TemplateTextType) || "b2"}>
              {infoItem.text}
            </TextTemplate>
          ))}
        </Box>
      )}
    </StackedShadowWrapper>
  </TouchableOpacityWithDelay>
);

const styles = StyleSheet.create({
  container: {
    height: Style.adjust(120),
    backgroundColor: BACKGROUND_COLOUR,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 8,
  },
  outerContainer: { marginBottom: Style.adjust(24) },
  infoContainer: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: "column",
    flex: 1,
    paddingLeft: 8,
  },
  imageContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: Style.adjust(120),
  },
  image: { width: "100%", height: "100%", borderRadius: 8 },
  textContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  lottie: { width: "100%", height: "100%" },
});

export default memo(WalletItem);
