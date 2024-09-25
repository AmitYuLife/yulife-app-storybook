import React, { memo, useCallback, useEffect, useRef } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { BattlePassList, BattlePassProgressBar } from "@organisms";
import { Style } from "@styles";
import BattlePassYucoinCounter from "@components/molecules/battle-pass-yucoin-counter/battle-pass-yucoin-counter";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";
import { ImageBackground } from "expo-image";
import { useSelector } from "react-redux";
import { getHighlightedTabs, getRouteState } from "@redux/app/app.selectors";
import LottieViewRef from "lottie-react-native";
import { ROUTES } from "@navigation/constants";
import { get } from "lodash";

interface IBattlePassHeaderProps {
  title: string;
  textColor?: string;
  description: string;
  step?: number;
  backgroundImage: ImageSourcePropType;
  items: IBattlePassListItem[];
  progressStatus: IBattlePassProgressBar;
  showCoinAnimation: boolean;
}

const BattlePassHeader = ({
  progressStatus,
  backgroundImage,
  items,
  step,
  showCoinAnimation,
}: IBattlePassHeaderProps) => {
  const lottieRef = useRef<LottieViewRef>(null);
  const battlePassListRef = useRef<FlashList<IBattlePassListItem>>(null);
  const currentRoute = useSelector(getRouteState);
  const activeTabs = useSelector(getHighlightedTabs);
  const nextRewardIndex =
    items.findIndex((reward) => reward.status === "completed" || reward.status === "pending") || 0;
  useEffect(() => {
    scrollToReward();
  }, [nextRewardIndex, currentRoute, progressStatus.level]);

  useEffect(() => {
    if (get(activeTabs, ROUTES.purchases)) {
      lottieRef.current?.play();
    }
  }, [activeTabs, lottieRef]);

  const scrollToReward = useCallback(() => {
    if (nextRewardIndex > 0) {
      battlePassListRef.current?.scrollToIndex({
        index: nextRewardIndex,
        animated: true,
        viewOffset: Style.adjust(7),
      });
    }
  }, [nextRewardIndex]);

  return (
    <ImageBackground source={backgroundImage} contentFit="cover" style={styles.backgroundImage}>
      <View style={styles.headerWrapper}>{!showCoinAnimation ? null : <BattlePassYucoinCounter step={step} />}</View>
      <BattlePassList
        ref={battlePassListRef}
        items={items}
        onLoad={scrollToReward}
        contentContainerStyle={styles.battlePassList}
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
  },
  headerWrapper: {
    paddingLeft: Style.adjust(16),
    marginBottom: Style.adjust(24),
  },
  title: {
    marginTop: Style.adjust(8),
  },
  battlePassList: {
    paddingLeft: Style.adjust(16),
  },
  sectionWrapper: {
    marginVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
    marginBottom: -Style.adjust(80),
  },
});

export default memo(BattlePassHeader);
