import React, { memo, RefObject, useCallback, useEffect, useRef } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { BattlePassList, BattlePassProgressBar } from "@organisms";
import { Colours, Style } from "@styles";
import { IBattlePassListItem } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { IBattlePassProgressBar } from "@organisms/battle-pass-progress-bar/battle-pass-progress-bar";
import { ImageBackground } from "expo-image";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { TextTemplate } from "@atoms";

interface IBattlePassHeaderProps {
  title: string;
  textColor?: string;
  description: string;
  backgroundImage: ImageSourcePropType;
  items: IBattlePassListItem[];
  onScrollStart?: () => void;
  listRef?: RefObject<FlashList<IBattlePassListItem>>;
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
}: IBattlePassHeaderProps) => {
  const battlePassListRef = useRef<FlashList<IBattlePassListItem>>(null);
  const currentRoute = useSelector(getRouteState);
  const nextRewardIndex =
    items.findIndex((reward) => reward.status === "completed" || reward.status === "pending") || 0;

  const activeListRef = listRef || battlePassListRef;

  const scrollToReward = useCallback(() => {
    if (nextRewardIndex > 0) {
      activeListRef.current?.scrollToIndex({
        index: nextRewardIndex,
        animated: true,
        viewOffset: Style.adjust(7),
      });
    }
  }, [nextRewardIndex]);

  useEffect(() => {
    scrollToReward();
  }, [nextRewardIndex, currentRoute, progressStatus.level, scrollToReward]);

  return (
    <ImageBackground source={backgroundImage} contentFit="cover" style={styles.backgroundImage}>
      <View style={styles.headerWrapper}>
        <View style={styles.title}>
          <TextTemplate type="b1b" color={textColor}>
            {title}
          </TextTemplate>
        </View>
        <TextTemplate type="l1" color={textColor}>
          {description}
        </TextTemplate>
      </View>
      <BattlePassList
        ref={activeListRef}
        items={items}
        onLoad={scrollToReward}
        battlePassType="esg"
        onScrollStart={onScrollStart}
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
    backgroundColor: "#290163",
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
