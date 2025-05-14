import { Box, Source, StackedShadowWrapper, TextTemplate } from "@atoms";
import { ChevronIcon } from "@atoms/icon/chevron-icon";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { memo } from "react";
import { Image, StyleSheet } from "react-native";
import { Style } from "@styles";

const SHADOW_COLOR = "#E7E7EB";
const BACKGROUND_COLOR = "#FFFFFF";
const TEXT_COLOR = "#5C5757";
const CHEVRON_COLOR = "#E30D76";

interface IWalletCard<T> {
  icon?: Source;
  rewardId: string;
  onPress?: T;
  title: string;
  info?: Array<{ text?: string; icon?: Source }>;
}

interface WalletCardProps<T> {
  item: IWalletCard<T>;
  onPress: (action: T) => void;
}

const WalletCard = <T,>({ item, onPress }: WalletCardProps<T>) => (
  <TouchableOpacityWithDelay
    onPress={() => onPress?.(item.onPress)}
    accessible={true}
    accessibilityRole="button"
    accessibilityLabel={item.title}
  >
    <StackedShadowWrapper style={styles.container} stackColors={[SHADOW_COLOR]} outerStyle={styles.outerContainer}>
      <Box style={styles.imageContainer}>
        <Image style={styles.image} source={item.icon} resizeMode="cover" />
      </Box>
      <Box flex={1} style={styles.rightContainer}>
        <Box flexDirection="column" justifyContent="space-around" flex={1}>
          <Box style={styles.titleContainer}>
            <TextTemplate color={TEXT_COLOR} type="b1b" numberOfLines={2}>
              {item.title}
            </TextTemplate>
          </Box>
          <Box>
            {item.info?.map((info, index) => (
              <Box key={index} flexDirection="row" alignItems="center">
                <Image style={styles.icon} source={info.icon} resizeMode="contain" />
                <TextTemplate color={TEXT_COLOR} type="b2" numberOfLines={1}>
                  {info.text}
                </TextTemplate>
              </Box>
            ))}
          </Box>
        </Box>
        <Box style={styles.chevronContainer}>
          <ChevronIcon size={24} direction="right" color={CHEVRON_COLOR} />
        </Box>
      </Box>
    </StackedShadowWrapper>
  </TouchableOpacityWithDelay>
);

const styles = StyleSheet.create({
  container: {
    height: Style.adjust(120),
    backgroundColor: BACKGROUND_COLOR,
    flexDirection: "row",
    alignItems: "stretch",
  },
  outerContainer: { flex: 2, marginBottom: Style.adjust(20) },
  imageContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    margin: Style.adjust(8),
    borderRadius: 16,
    overflow: "hidden",
    width: Style.adjust(120),
  },
  image: { width: "100%", height: "100%", borderRadius: 16 },
  icon: { width: Style.adjust(20), height: Style.adjust(20), marginRight: 8 },
  rightContainer: {
    padding: Style.adjust(10),
    alignItems: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: Style.adjust(16),
  },
  chevronContainer: { paddingVertical: 4, flexDirection: "column", justifyContent: "center", alignItems: "center" },
});

export default memo(WalletCard);
