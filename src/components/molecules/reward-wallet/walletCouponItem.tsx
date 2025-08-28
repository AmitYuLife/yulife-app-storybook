import { Box, StackedShadowWrapper, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { WALLET_COUPON_ITEM_DESCRIPTION } from "@ids";
import { Colours, Style, TemplateTextType } from "@styles";
import { memo } from "react";
import { StyleSheet } from "react-native";
import WalletShine from "./wallet-shine";

const BACKGROUND_COLOUR = "#4801AF";
const SHADOW_COLOR = "#340080";
const LABEL_TEXT_COLOR = "#4801AF";

const HIT_SLOP_SIZE = Style.adjust(8);
const HIT_SLOP = {
  left: HIT_SLOP_SIZE,
  right: HIT_SLOP_SIZE,
  bottom: Style.adjust(12),
  top: HIT_SLOP_SIZE,
};

const BORDER_RADIUS = 14;

const CARD_HEIGHT = Style.adjust(120);
interface IWalletCouponItem<T> {
  description?: string;
  label?: string;
  onPress?: T;
  title: string;
  info?: Array<{ text: string; style?: string }>;
  secondaryInfo?: string;
}
interface WalletCouponItemProps<T> {
  item: IWalletCouponItem<T>;
  index: number;
  onPress: (action: T) => void;
}

const WalletCouponItem = <T,>({ item, index, onPress }: WalletCouponItemProps<T>) => (
  <TouchableOpacityWithDelay
    onPress={() => onPress?.(item.onPress)}
    hitSlop={HIT_SLOP}
    accessible={true}
    accessibilityRole="button"
    accessibilityLabel={`${item.title} ${item.description || ""}`}
  >
    <Box flexDirection="row" mb={24}>
      <StackedShadowWrapper
        style={styles.leftContainer}
        outerStyle={styles.leftOuterContainer}
        stackColors={[SHADOW_COLOR]}
        borderRadius={BORDER_RADIUS}
      >
        <WalletShine index={index} />
        {!item.label ? null : (
          <Box br={8} ph={12} pv={4} bg={Colours.neutral.white}>
            <TextTemplate color={LABEL_TEXT_COLOR} type="l2b" numberOfLines={1}>
              {item.label}
            </TextTemplate>
          </Box>
        )}
        <Box>
          <TextTemplate color={Colours.neutral.white} type="h3" numberOfLines={1}>
            {item.title}
          </TextTemplate>
          <TextTemplate
            color={Colours.neutral.white}
            type="l1"
            numberOfLines={2}
            testID={WALLET_COUPON_ITEM_DESCRIPTION(item.description)}
          >
            {item.description}
          </TextTemplate>
        </Box>
      </StackedShadowWrapper>
      <StackedShadowWrapper
        style={styles.rightContainer}
        outerStyle={styles.rightOuterContainer}
        stackColors={[SHADOW_COLOR]}
        borderRadius={BORDER_RADIUS}
      >
        <Box style={styles.dottedBorder} />
        <Box style={styles.infoContainer}>
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
          {item.secondaryInfo && (
            <TextTemplate color={Colours.neutral.white} type="l2" numberOfLines={2}>
              {item.secondaryInfo}
            </TextTemplate>
          )}
        </Box>
      </StackedShadowWrapper>
    </Box>
  </TouchableOpacityWithDelay>
);

const styles = StyleSheet.create({
  leftContainer: {
    height: CARD_HEIGHT,
    backgroundColor: BACKGROUND_COLOUR,
    padding: Style.adjust(16),
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginEnd: 0,
  },
  leftOuterContainer: { flex: 2 },
  rightContainer: {
    backgroundColor: BACKGROUND_COLOUR,
    height: CARD_HEIGHT,
    flexDirection: "row",
    marginStart: 0,
  },
  rightOuterContainer: { flex: 1 },
  infoContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
  },
  lottie: { width: "100%", height: "100%" },
  dottedBorder: {
    height: CARD_HEIGHT,
    marginVertical: BORDER_RADIUS + 1, // Make sure border doesn't start with white space
    borderColor: Colours.neutral.white,
    borderStyle: "dashed",
    // We have to do this because iOS doesn't support borderStyle if borderWidth is not same for all sides
    left: -1,
    borderWidth: 1,
  },
});

export default memo(WalletCouponItem);
