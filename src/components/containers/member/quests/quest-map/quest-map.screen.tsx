import { IConnectedScreenProps } from "@app/typings";
import { scrollViewAdjustPosition } from "@components/screens/member/quests/quests-scroll-screen/quests-screen.styles";
import { WeeklyQuestsButton } from "@components/screens/member/quests/quests-scroll-screen/weeklies/weeklies.button";
import { GetMobileGameWeekliesQuery } from "@graphql/__generated";
import { useUserFeatures } from "@hooks";
import { QUESTS_SCREEN } from "@ids";
import { NavBar, TopBar } from "@organisms";
import AnimalLoader from "@organisms/animal-loader/animal-loader";
import { IIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, FlashListRef, ListRenderItemInfo, ViewToken } from "@shopify/flash-list";
import { Style, TOP_BAR, StyleSheet } from "@styles";
import { getCurrentWorld } from "@utils";
import { first, isEmpty } from "lodash";
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Platform, SafeAreaView, View, ViewStyle } from "react-native";
import QuestMapEpisode from "./quest-map-episode";
import QuestMapEpisodeAccessibility from "./quest-map-episode-accessibility";
import { getTopBarType } from "./quest-map-helpers";
import { IQuestMapItem } from "./quest-map.interface";
import { DETOX_ENABLED } from "@services/socket";

interface IQuestMapScreenProps extends IConnectedScreenProps {
  currentLevel: number;
  snapOffsets: number[];
  itemHeights: number[];
  items: IQuestMapItem[];
  weeklies?: GetMobileGameWeekliesQuery["getMobileGameWeeklies"];
  isLoading?: boolean;
  isScreenReaderEnabled: boolean;
  leftIcons: IIcon[];
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

/**
 * Stabilize slow simulator environments
 * by adding a delay before scrolling to the current level
 * so that it doesn't get invoked around the same time
 * that memory is being spent rendering all the other tabs
 */
const SCROLL_TO_LEVEL_DELAY = DETOX_ENABLED ? 5000 : 0;

enum ScrollToLevelReason {
  Load = "Load",
  Delay = "Delay",
}

const QuestMapScreen = ({
  items,
  weeklies,
  isLoading,
  itemHeights,
  currentLevel,
  snapOffsets,
  isScreenReaderEnabled,
  leftIcons,
}: IQuestMapScreenProps) => {
  const features = useUserFeatures();
  const flashlistRef = useRef<FlashListRef<IQuestMapItem>>(null);
  const [topBarType, setTopBarType] = useState(getTopBarType(currentLevel));
  const nextLevelIndex = useMemo(() => items.findIndex((item) => item.levels.find((level) => level.isNext)), [items]);
  const lastScrolledLevelRef = useRef<number | null>(null);

  const itemsForScreenReader = useMemo(
    () => first(items.slice(nextLevelIndex, nextLevelIndex + 7)),
    [items, nextLevelIndex]
  );

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
    (_time?: { elapsedTimeInMs: number }, reason = ScrollToLevelReason.Load) => {
      if (lastScrolledLevelRef.current === currentLevel && reason === ScrollToLevelReason.Delay) {
        return;
      }

      flashlistRef.current?.scrollToOffset({
        offset: snapOffsets[currentLevelEpisode],
      });

      if (reason === ScrollToLevelReason.Delay) {
        lastScrolledLevelRef.current = currentLevel;
      }
    },
    [currentLevelEpisode, snapOffsets]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      scrollToLevel(undefined, ScrollToLevelReason.Delay);
    }, SCROLL_TO_LEVEL_DELAY);

    return () => clearTimeout(timeoutId);
  }, [currentLevel, scrollToLevel]);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken<IQuestMapItem>[] }) => {
      if (isEmpty(viewableItems)) {
        return;
      }

      const itemIndex = first(viewableItems).index;
      const item = first(items[itemIndex]?.levels)?.level;
      if (!item) {
        return;
      }

      setTopBarType(items[itemIndex]?.episodeConfig?.topBarType ?? getTopBarType(item));
    },
    [items]
  );

  return (
    <SafeAreaView style={styles.container} testID={QUESTS_SCREEN(getCurrentWorld(currentLevel))}>
      <View style={styles.questContainer}>
        {isScreenReaderEnabled ? <QuestMapEpisodeAccessibility items={itemsForScreenReader?.levels} /> : null}

        {!isEmpty(items) && !isScreenReaderEnabled ? (
          <FlashList
            data={items}
            bounces={false}
            ref={flashlistRef}
            onLoad={scrollToLevel}
            drawDistance={Style.DEVICE_HEIGHT * 2}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            snapToOffsets={snapOffsets}
            onViewableItemsChanged={onViewableItemsChanged}
            disableIntervalMomentum={true}
            showsVerticalScrollIndicator={false}
            decelerationRate={DECELERATION_RATE}
            viewabilityConfig={VIEWABILITY_CONFIG}
            maintainVisibleContentPosition={{ startRenderingFromBottom: true }}
          />
        ) : null}
      </View>

      <AnimalLoader isLoading={isLoading} />

      <View style={styles.header}>
        <TopBar type={isScreenReaderEnabled ? "default" : topBarType} leftIcons={leftIcons} />
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
    start: 0,
    position: "absolute",
    end: 0,
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
  leftIconList: {
    position: "absolute",
    start: Style.adjust(16),
    top: TOP_BAR.TOP_BAR_WITH_PAD,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
};

export default memo(QuestMapScreen);
