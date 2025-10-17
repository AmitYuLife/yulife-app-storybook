import { memo, RefObject, useRef } from "react";
import { ImageSourcePropType, View } from "react-native";
import { FlatList } from "react-native";
import { BattlePassList, BattlePassProgressBar } from "@organisms";
import { Colours, Style, StyleSheet } from "@styles";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";
import { ImageBackground } from "expo-image";
import { Box, TextTemplate } from "@atoms";
import { usePrizeHintPopup, useScrollToItem } from "@hooks";
import { BATTLE_PASS_DESCRIPTION, BATTLE_PASS_TITLE } from "@ids";
import { IBoxProps } from "@atoms/box/box.types";
import { ShineButton } from "@components/molecules";
import { WalletIcon } from "@atoms/icon/wallet-icon";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";

interface IBattlePassHeaderProps extends IBoxProps {
  title: string;
  textColor?: string;
  description: string;
  backgroundImage: ImageSourcePropType;
  onPressWallet?: () => void;
  items: IBattlePassListItem[];
  onScrollStart?: () => void;
  listRef?: RefObject<FlatList<IBattlePassListItem>>;
  progressStatus: IBattlePassProgressBar;
}

const BattlePassHeader = ({
  title,
  textColor = Colours.neutral.white,
  progressStatus,
  description,
  backgroundImage,
  onScrollStart,
  items,
  listRef,
  onPressWallet,
  ...props
}: IBattlePassHeaderProps) => {
  const walletRef = useRef<View>(null);
  const { activeListRef, scrollToReward } = useScrollToItem({
    items,
    ref: listRef,
    scrollToDependencies: [progressStatus.level],
  });

  usePrizeHintPopup({
    routeIds: [ROUTES.purchases],
    isEnabled: true,
    viewRef: walletRef,
  });

  return (
    <ImageBackground source={backgroundImage} contentFit="cover" style={styles.backgroundImage}>
      <Box pl={16} pr={16} mb={24} accessible={true} {...props} flexDirection="row" justifyContent="space-between">
        <Box>
          <View style={styles.title}>
            <TextTemplate type="b1b" color={textColor} testID={BATTLE_PASS_TITLE(title)}>
              {title}
            </TextTemplate>
          </View>
          <TextTemplate type="l1" color={textColor} testID={BATTLE_PASS_DESCRIPTION(description)}>
            {description}
          </TextTemplate>
        </Box>
        {onPressWallet ? (
          <Box viewRef={walletRef}>
            <ShineButton
              icon={<WalletIcon size={22} />}
              label={t("screens.rewards.storefront.wallet")}
              onPress={onPressWallet}
            />
          </Box>
        ) : null}
      </Box>
      <BattlePassList
        ref={activeListRef}
        items={items}
        onLoad={scrollToReward}
        battlePassType="esg"
        onScrollStart={onScrollStart}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.sectionWrapper}>
        <BattlePassProgressBar {...progressStatus} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    paddingBottom: Style.adjust(50),
    backgroundColor: "#290163",
  },
  title: {
    marginTop: Style.adjust(8),
  },
  contentContainer: {
    paddingHorizontal: Style.adjust(16),
  },
  sectionWrapper: {
    marginVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
    marginBottom: -Style.adjust(80),
  },
});

export default memo(BattlePassHeader);
