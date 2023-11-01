import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Platform, SafeAreaView, StyleSheet, View, ViewStyle } from "react-native";
import { NavBar, TopBar } from "@organisms";
import { IConnectedScreenProps } from "@app/typings";
import { Style, TOP_BAR } from "@styles";
import { getTopBarType } from "@components/screens/member/quests/quests-scroll-screen/quests-screen.helpers";
import { scrollViewAdjustPosition } from "@components/screens/member/quests/quests-scroll-screen/quests-screen.styles";
import QuestMapEpisode from "./quest-map-episode";
import { WeeklyQuestsButton } from "@components/screens/member/quests/quests-scroll-screen/weeklies/weeklies.button";
import { useUserFeatures } from "@hooks";
import { IQuestMapItem } from "./quest-map.interface";
import { GetMobileGameWeeklies_getMobileGameWeeklies } from "@graphql/_core/schema";
import { FlashList, ListRenderItemInfo, ViewToken } from "@shopify/flash-list";
import { first, isEmpty } from "lodash";

interface IQuestMapScreenProps extends IConnectedScreenProps {
  currentLevel: number;
  snapOffsets: number[];
  itemHeights: number[];
  items?: IQuestMapItem[];
  weeklies?: GetMobileGameWeeklies_getMobileGameWeeklies;
}

const VIEWABILITY_CONFIG = {
  waitForInteraction: false,
  minimumViewTime: 400,
  viewAreaCoveragePercentThreshold: 80,
};

const DECELERATION_RATE = Platform.select({
  ios: 0.8,
  android: 0.9,
});

const keyExtractor = (_item: IQuestMapItem): string => {
  return `${_item.episodeConfig.episodeKey}`;
};

const QuestMapScreen = ({
  items,
  weeklies,
  itemHeights,
  onLeftMenuPress,
  currentLevel,
  snapOffsets,
}: IQuestMapScreenProps) => {
  const features = useUserFeatures();
  const flashlistRef = useRef<FlashList<IQuestMapItem>>(null);
  const [topBarType, setTopBarType] = useState(getTopBarType(currentLevel));

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<IQuestMapItem>) => {
      return <QuestMapEpisode height={itemHeights[index]} episode={item} />;
    },
    [itemHeights]
  );

  const currentLevelEpisode = useMemo(() => {
    const activeEpisode = items.findIndex((item) =>
      item.levels.some((level) => {
        return level.isNext && level.isActive;
      })
    );

    return activeEpisode ?? 0;
  }, [items]);

  const scrollToLevel = useCallback(
    (_time: { elapsedTimeInMs: number }, animated: boolean = false) => {
      flashlistRef.current?.scrollToOffset({
        offset: snapOffsets[currentLevelEpisode],
        animated: animated,
      });
    },
    [currentLevelEpisode, snapOffsets]
  );

  useEffect(() => {
    setTimeout(() => scrollToLevel(undefined, false));
  }, [currentLevel, scrollToLevel]);

  const overrideItemLayout = useCallback((layout: { span?: number; size?: number }, item: IQuestMapItem) => {
    if (!item) {
      return null;
    }

    const seperator = item.seperator;
    const seperatorHeight = seperator ? Style.DEVICE_WIDTH * (seperator?.height / seperator?.width) : 0;

    const height =
      Style.DEVICE_WIDTH * (item.episodeConfig?.episodeHeight / item.episodeConfig?.episodeWidth) + seperatorHeight;

    layout.size = height;
  }, []);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (isEmpty(viewableItems)) {
        return;
      }

      const itemIndex = first(viewableItems).index;
      const item = first(items[itemIndex]?.levels)?.level;
      if (!item) {
        return;
      }

      setTopBarType(getTopBarType(item));
    },
    [items]
  );

  if (!items) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.questContainer}>
        <FlashList
          data={items}
          inverted={true}
          bounces={false}
          ref={flashlistRef}
          onLoad={scrollToLevel}
          estimatedItemSize={755}
          drawDistance={Style.DEVICE_HEIGHT * 2}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          snapToOffsets={snapOffsets}
          onViewableItemsChanged={onViewableItemsChanged}
          disableIntervalMomentum={true}
          overrideItemLayout={overrideItemLayout}
          showsVerticalScrollIndicator={false}
          decelerationRate={DECELERATION_RATE}
          viewabilityConfig={VIEWABILITY_CONFIG}
        />
      </View>

      <View style={styles.header}>
        <TopBar type={topBarType} onPressLeftIcon={onLeftMenuPress} />
      </View>

      <View style={styles.leftIconList}>
        <WeeklyQuestsButton isVisible={features?.showWeeklies} weeklies={weeklies} />
      </View>

      <NavBar activeIndex={1} />
    </SafeAreaView>
  );
};

const styles = {
  header: {
    left: 0,
    position: "absolute",
    right: 0,
    top: TOP_BAR.PADDING_TOP,
  } as ViewStyle,
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  questContainer: {
    ...StyleSheet.absoluteFillObject,
    ...scrollViewAdjustPosition(),
  },
  flashList: {},
  leftIconList: {
    position: "absolute",
    left: Style.adjust(16),
    top: TOP_BAR.TOP_BAR_WITH_PAD,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
};

export default memo(QuestMapScreen);
