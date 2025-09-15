import { Box, Source, StackedShadowWrapper, TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { memo } from "react";
import { Image } from "react-native";
import { Style, StyleSheet } from "@styles";
import { WALLET_CARD_TITLE } from "@ids";

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

const WalletCard = <T,>({ item, onPress }: WalletCardProps<T>) => {
  return (
    <TouchableOpacityWithDelay
      onPress={() => onPress?.(item.onPress)}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={item.title}
    >
      <StackedShadowWrapper stackColors={[SHADOW_COLOR]} outerStyle={styles.stackedShadowWrapper}>
        <Box h={120} bg={BACKGROUND_COLOR} flexDirection="row">
          <Box alignItems="flex-start" justifyContent="center" m={8} br={16} overflow="hidden" w={120}>
            <Image style={styles.cardImage} key={item.icon?.uri} source={item.icon} resizeMode="cover" />
          </Box>
          <Box flex={1} p={10} alignItems="stretch" justifyContent="space-between" flexDirection="row">
            <Box flexDirection="column" justifyContent="space-around" flex={1}>
              <Box flexDirection="row" alignItems="center" justifyContent="space-between" pr={16}>
                <TextTemplate color={TEXT_COLOR} type="b1b" numberOfLines={2} testID={WALLET_CARD_TITLE(item.title)}>
                  {item.title}
                </TextTemplate>
              </Box>
              <Box>
                {item.info?.map((info, index) => (
                  <Box key={index} flexDirection="row" alignItems="center">
                    <Image style={styles.infoIcon} source={info.icon} resizeMode="contain" />
                    <TextTemplate color={TEXT_COLOR} type="b2" numberOfLines={1}>
                      {info.text}
                    </TextTemplate>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box py={4} flexDirection="column" justifyContent="center" alignItems="center">
              <ArrowIcon size={24} color={CHEVRON_COLOR} />
            </Box>
          </Box>
        </Box>
      </StackedShadowWrapper>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  stackedShadowWrapper: {
    flex: 2,
    marginBottom: Style.adjust(20),
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  infoIcon: {
    width: Style.adjust(20),
    height: Style.adjust(20),
    marginEnd: 8,
  },
});

export default memo(WalletCard);
