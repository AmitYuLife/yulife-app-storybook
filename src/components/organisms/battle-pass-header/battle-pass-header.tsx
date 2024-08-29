import React, { memo, useCallback, useEffect, useRef } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { TextTemplate } from "@atoms";
import { BattlePassList, BattlePassProgressBar, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import BattlePassYucoinCounter from "@components/molecules/battle-pass-yucoin-counter/battle-pass-yucoin-counter";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";
import { ImageBackground } from "expo-image";
import { PressableWithDelay } from "@components/molecules";
import { PurchasesIcon } from "@atoms/icon/purchases-icon";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";

interface IEnterpriseRewardHeaderProps {
  title: string;
  textColor?: string;
  description: string;
  step?: number;
  backgroundImage: ImageSourcePropType;
  items: IBattlePassListItem[];
  progressStatus: IBattlePassProgressBar;
  handlePurchasesPress: () => void;
}

const EnterpriseRewardHeader = ({
  title,
  textColor = Colours.neutral.white,
  progressStatus,
  description,
  backgroundImage,
  items,
  step,
  handlePurchasesPress,
}: IEnterpriseRewardHeaderProps) => {
  const battlePassListRef = useRef<FlashList<IBattlePassListItem>>(null);
  const currentRoute = useSelector(getRouteState);
  const nextRewardIndex =
    items.findIndex((reward) => reward.status === "completed" || reward.status === "pending") || 0;
  useEffect(() => {
    scrollToReward();
  }, [nextRewardIndex, currentRoute]);

  const scrollToReward = useCallback(() => {
    battlePassListRef.current?.scrollToIndex({
      index: nextRewardIndex,
      animated: true,
      viewOffset: Style.adjust(7),
    });
  }, [nextRewardIndex]);

  return (
    <ImageBackground source={backgroundImage} contentFit="cover" style={styles.backgroundImage}>
      <View style={styles.headerWrapper}>
        <GenericHeadingPad />
        <BattlePassYucoinCounter step={step} />
        <View style={styles.title}>
          <TextTemplate type="b1b" color={textColor}>
            {title}
          </TextTemplate>
        </View>
        <TextTemplate type="l1" color={textColor}>
          {description}
        </TextTemplate>
        <PressableWithDelay onPress={handlePurchasesPress} style={styles.purchasesButton}>
          <View style={styles.purchasesIconWrapper}>
            <PurchasesIcon />
          </View>
        </PressableWithDelay>
      </View>
      <BattlePassList ref={battlePassListRef} items={items} onLoad={scrollToReward} />
      <View style={styles.sectionWrapper}>
        <BattlePassProgressBar {...progressStatus} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    paddingBottom: Style.adjust(50),
  },
  headerWrapper: {
    paddingLeft: Style.adjust(16),
    marginBottom: Style.adjust(24),
  },
  title: {
    marginTop: Style.adjust(8),
  },
  sectionWrapper: {
    marginVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
    position: "absolute",
    bottom: -Style.adjust(45),
  },
  purchasesButton: {
    position: "absolute",
    width: Style.adjust(42),
    height: Style.adjust(42),
    backgroundColor: Colours.neutral.n250,
    bottom: 0,
    right: Style.adjust(16),
    borderRadius: Style.adjust(21),
  },
  purchasesIconWrapper: {
    width: Style.adjust(42),
    height: Style.adjust(42),
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(21),
    bottom: Style.adjust(2),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(EnterpriseRewardHeader);
