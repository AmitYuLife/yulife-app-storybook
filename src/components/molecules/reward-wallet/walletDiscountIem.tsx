import { Box, StackedShadowWrapper, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { WALLET_COUPON_ITEM_DESCRIPTION } from "@ids";
import { Colours, Style, TemplateTextType, StyleSheet } from "@styles";
import { memo } from "react";
import WalletShine from "./wallet-shine";

const HIT_SLOP_SIZE = Style.adjust(8);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: Style.adjust(12),
  top: HIT_SLOP_SIZE,
};

const BACKGROUND_COLOUR = "#4801AF";
const SHADOW_COLOR = "#340080";

interface IWalletDiscountItem<T> {
  description?: string;
  label?: string;
  onPress?: T;
  title: string;
  info?: Array<{ text: string; style?: string }>;
}

interface WalletDiscountItemProps<T> {
  item: IWalletDiscountItem<T>;
  index: number;
  onPress: (action: T) => void;
}

const WalletDiscountItem = <T,>({ item, index, onPress }: WalletDiscountItemProps<T>) => (
  <TouchableOpacityWithDelay
    onPress={() => onPress?.(item.onPress)}
    hitSlop={HIT_SLOP}
    accessible={true}
    accessibilityRole="button"
    accessibilityLabel={`${item.title} ${item.description || ""}`}
  >
    <StackedShadowWrapper style={styles.container} outerStyle={styles.outerContainer} stackColors={[SHADOW_COLOR]}>
      <WalletShine index={index} />
      <Box flex={2} justifyContent="space-around" alignItems="stretch" flexDirection="column">
        {!item.label ? null : (
          <Box justifyContent="flex-start" alignItems="flex-start">
            <Box br={8} ph={12} pv={4} bg={Colours.neutral.white}>
              <TextTemplate color={"#4801AF"} type="l2b">
                {item.label}
              </TextTemplate>
            </Box>
          </Box>
        )}
        <Box flexDirection="column" flex={1}>
          <TextTemplate color={Colours.neutral.white} type="h3" numberOfLines={2}>
            {item.title}
          </TextTemplate>
          <TextTemplate
            color={Colours.neutral.white}
            type="l1"
            numberOfLines={1}
            testID={WALLET_COUPON_ITEM_DESCRIPTION(item.description)}
          >
            {item.description}
          </TextTemplate>
        </Box>
      </Box>
      <Box flex={1} pl={10} alignItems="center" justifyContent="center" flexDirection="column">
        {!item.info
          ? null
          : item.info.map((i, infoIndex) => (
              <TextTemplate
                color={Colours.neutral.white}
                type={(i.style as TemplateTextType) || "l1"}
                key={infoIndex}
                numberOfLines={3}
              >
                {i.text}
              </TextTemplate>
            ))}
      </Box>
    </StackedShadowWrapper>
  </TouchableOpacityWithDelay>
);

const styles = StyleSheet.create({
  container: {
    height: Style.adjust(120),
    backgroundColor: BACKGROUND_COLOUR,
    padding: Style.adjust(16),
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  outerContainer: { marginBottom: Style.adjust(24) },
  image: { width: "100%", height: "100%" },
  textContainer: {
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  lottie: { width: "100%", height: "100%" },
});

export default memo(WalletDiscountItem);
