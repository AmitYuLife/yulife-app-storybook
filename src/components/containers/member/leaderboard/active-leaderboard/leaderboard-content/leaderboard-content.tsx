import React, { useRef, RefObject, useCallback, useContext } from "react";
import { Animated, FlatList as _FlatList, View, StyleSheet, ViewStyle, RefreshControl, Platform } from "react-native";
import { resToList, getItemLayout, renderItem } from "./helpers";
import { GetLeaderboard_getLeaderboard } from "@graphql/_core/schema";
import { LeaderboardPodium } from "../leaderboard-podium";
import { FloatingRankItem } from "./items/leaderboard-rank-item/floating-rank-item";
import { ScrollValueContext } from "./leaderboard-content.context";
import { ActiveLeaderboardLoadingContext } from "../active-leaderboard.context";
import { NetworkStatus } from "apollo-client";
import { getUriSet } from "./helpers/resToList";

export interface LeaderboardContentContainerProps {
  leaderboardItems: GetLeaderboard_getLeaderboard[];
  leaderboardName: string;
  currentUserId: string;
  onRefetch: () => void;
}

const FlatList = Animated.createAnimatedComponent(_FlatList);

const _LeaderboardContentContainer = ({
  leaderboardItems,
  leaderboardName,
  currentUserId,
  onRefetch,
}: LeaderboardContentContainerProps) => {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const flatListRef: RefObject<_FlatList> = useRef();
  const refs = { scrollValue, flatListRef };
  const networkStatus = useContext(ActiveLeaderboardLoadingContext);
  const list = resToList(leaderboardItems, currentUserId, refs, leaderboardName);

  const handlePressFloater = useCallback(() => {
    const targetIndex = leaderboardItems.findIndex((item) => item.id === `lead_${currentUserId}`);
    flatListRef.current.scrollToIndex({ animated: true, index: targetIndex });
  }, [leaderboardItems, currentUserId]);

  return (
    <ScrollValueContext.Provider value={scrollValue}>
      <View style={styles.flex}>
        <FlatList
          ref={flatListRef}
          style={styles.flex}
          scrollEnabled={networkStatus === NetworkStatus.ready}
          showsVerticalScrollIndicator={false}
          data={list.flatListData}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          scrollEventThrottle={16}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], { useNativeDriver: true })}
          refreshControl={
            <RefreshControl
              style={styles.hidden}
              onRefresh={onRefetch}
              refreshing={networkStatus === NetworkStatus.refetch}
            />
          }
        />
        <IOSPodium leaderboardItems={leaderboardItems} leaderboardName={leaderboardName} />
        <FloatingRankItem {...list.floatingItemData} onPress={handlePressFloater} />
      </View>
    </ScrollValueContext.Provider>
  );
};

function IOSPodium({ leaderboardName, leaderboardItems }: Partial<LeaderboardContentContainerProps>) {
  if (Platform.OS === "android") {
    return null;
  }

  return (
    <View pointerEvents="box-none" style={styles.absolute}>
      <LeaderboardPodium leaderboardName={leaderboardName} uriSet={getUriSet(leaderboardItems)} />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  hidden: {
    opacity: 0,
  } as ViewStyle,
  absolute: {
    position: "absolute",
  } as ViewStyle,
});

export const LeaderboardContentContainer = _LeaderboardContentContainer;
