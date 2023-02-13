import React, { useRef, RefObject, useCallback, useState, useEffect, useMemo } from "react";
import { Animated, View, StyleSheet, ViewStyle, Platform, LayoutChangeEvent, AppStateStatus } from "react-native";
import { FlashList as _FlashList } from "@shopify/flash-list";
import { resToList, renderItem } from "./helpers";
import { GetLeaderboard } from "@graphql/_core/schema";
import { LeaderboardPodium } from "../leaderboard-podium";
import FloatingRankItem from "../../items/leaderboard-rank-item/floating-rank-item";
import { getUriSet } from "./helpers/resToList";
import { PAGE_SIZE } from "../active-leaderboard.container";
import { MODALS } from "@navigation/constants";
import { LEADERBOARD_ITEM_HEIGHT } from "../../items/leaderboard-rank-item/subcomponents";
import { TOP_PADDING_HEIGHT } from "./helpers/constants";
import { useAppState, useNavigationComponentDidDisappear } from "@hooks";
import { ILeaderboardListItem } from "./leaderboard-content.types";
import { LEADERBOARD_SCROLL_LIST } from "@ids";

export interface LeaderboardContentContainerProps {
  leaderboardItems: GetLeaderboard["getLeaderboard"];
  currentUserId: string;
  isRefetching: boolean;
  isLoading: boolean;
  onRefetch: () => void;
  openModal: () => void;
}

const FlashList = Animated.createAnimatedComponent(_FlashList);

export const LeaderboardContentContainer = ({
  leaderboardItems,
  currentUserId,
  onRefetch,
  openModal,
  isRefetching,
  isLoading,
}: LeaderboardContentContainerProps) => {
  const [scrollValue] = useState(new Animated.Value(0));
  const [flatListHeight, setFlatListHeight] = useState(0);
  const flatListRef: RefObject<_FlashList<ILeaderboardListItem>> = useRef();
  const timer = useRef<ReturnType<typeof setTimeout>>(null);
  const refreshing = useMemo(() => Platform.select({ ios: false, android: isRefetching }), [isRefetching]);
  const myLeaderboardItem = leaderboardItems.find((item) => item.userId === currentUserId);

  const onChangeAppState = (appState: AppStateStatus) => {
    if (appState === "inactive" && flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0 });
    }
  };

  useAppState(onChangeAppState);

  useEffect(() => {
    return () => {
      if (timer?.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const list = resToList({
    leaderboardItems,
    currentUserId,
    isRefetching,
    scrollValue,
    isLoading,
  });

  const offsetFromRows = LEADERBOARD_ITEM_HEIGHT * (myLeaderboardItem?.position || 0);
  const offset = offsetFromRows + TOP_PADDING_HEIGHT - flatListHeight;

  const handlePressFloater = useCallback(() => {
    const target = leaderboardItems.find((item) => item.id === `lead_${currentUserId}`);
    if (target.position > PAGE_SIZE - 1) {
      return openModal();
    }

    flatListRef.current?.scrollToIndex({ animated: true, index: target.position - 1 });
  }, [leaderboardItems, currentUserId, openModal]);

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      setFlatListHeight(e.nativeEvent.layout.height);
    },
    [setFlatListHeight]
  );

  useNavigationComponentDidDisappear(() => {
    // we need this to sync refresh gesture from modal
    onRefetch();
  }, MODALS.leaderboardLean);

  const getItemType = useCallback((item: ILeaderboardListItem) => item.type, []);

  return (
    <View style={styles.flex}>
      <FlashList
        testID={LEADERBOARD_SCROLL_LIST}
        getItemType={getItemType}
        onLayout={handleLayout}
        onRefresh={onRefetch}
        refreshing={refreshing}
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={95}
        data={list.flatListData}
        renderItem={renderItem}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], { useNativeDriver: true })}
      />
      <IOSPodium scrollValue={scrollValue} leaderboardItems={leaderboardItems} />
      <FloatingRankItem
        onPress={handlePressFloater}
        item={myLeaderboardItem}
        scrollValue={scrollValue}
        offset={offset}
      />
    </View>
  );
};

function IOSPodium({
  leaderboardItems,
  scrollValue,
}: Partial<LeaderboardContentContainerProps> & { scrollValue: Animated.Value }) {
  if (Platform.OS === "android") {
    return null;
  }

  return (
    <View pointerEvents="box-none" style={styles.absolute}>
      <LeaderboardPodium scrollValue={scrollValue} uriSet={getUriSet(leaderboardItems)} />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  absolute: {
    position: "absolute",
  } as ViewStyle,
});
