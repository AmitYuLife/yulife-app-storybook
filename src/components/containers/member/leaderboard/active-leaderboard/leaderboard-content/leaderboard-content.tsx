import React, { useRef, RefObject, useCallback, useState } from "react";
import {
  Animated,
  FlatList as _FlatList,
  View,
  StyleSheet,
  ViewStyle,
  Platform,
  LayoutChangeEvent,
} from "react-native";
import { resToList, getItemLayout, renderItem } from "./helpers";
import { GetLeaderboard } from "@graphql/_core/schema";
import { LeaderboardPodium } from "../leaderboard-podium";
import FloatingRankItem from "../../items/leaderboard-rank-item/floating-rank-item";
import { getUriSet } from "./helpers/resToList";
import { PAGE_SIZE } from "../active-leaderboard.container";
import { MODALS } from "@navigation/constants";
import useNavigationComponentDidDisappear from "@services/hooks/useNavigationComponentDidDisappear";
import { IReduxState } from "@redux/_core/reducers";
import { getUserFeatures } from "@redux/user/user.selectors";
import { connect } from "react-redux";
import { LEADERBOARD_ITEM_HEIGHT } from "../../items/leaderboard-rank-item/subcomponents";
import { TOP_PADDING_HEIGHT } from "./helpers/constants";
import { LEADERBOARD_SCROLL_LIST } from "@ids";

export interface LeaderboardContentContainerProps {
  query: GetLeaderboard;
  leaderboardName: string;
  currentUserId: string;
  isRefetching: boolean;
  isLoading: boolean;
  onRefetch: () => void;
  openModal: () => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IProps extends LeaderboardContentContainerProps, ConnectedState {}

const FlatList = Animated.createAnimatedComponent(_FlatList);

const _LeaderboardContentContainer = ({
  query,
  leaderboardName,
  currentUserId,
  onRefetch,
  openModal,
  isRefetching,
  isLoading,
  showDuels,
}: IProps) => {
  const [duelDialogId, setDuelDialogId] = useState("");
  const [scrollValue] = useState(new Animated.Value(0));
  const [flatListHeight, setFlatListHeight] = useState(0);
  const flatListRef: RefObject<_FlatList> = useRef();
  const leaderboardItems = query?.getLeaderboard || [];
  const myLeaderboardItem = leaderboardItems.find((item) => item.userId === currentUserId);
  const list = resToList({
    leaderboardItems,
    currentUserId,
    leaderboardName,
    isRefetching,
    scrollValue,
    isLoading,
    duelDialogId,
    setDuelDialogId,
    showDuels,
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

  return (
    <View style={styles.flex}>
      <FlatList
        testID={LEADERBOARD_SCROLL_LIST}
        onLayout={handleLayout}
        onRefresh={onRefetch}
        refreshing={isRefetching}
        ref={flatListRef}
        style={styles.flex}
        showsVerticalScrollIndicator={false}
        data={list.flatListData}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], { useNativeDriver: true })}
      />
      <IOSPodium scrollValue={scrollValue} query={query} leaderboardName={leaderboardName} />
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
  leaderboardName,
  query,
  scrollValue,
}: Partial<LeaderboardContentContainerProps> & { scrollValue: Animated.Value }) {
  if (Platform.OS === "android") {
    return null;
  }

  const leaderboardItems = query?.getLeaderboard || [];

  return (
    <View pointerEvents="box-none" style={styles.absolute}>
      <LeaderboardPodium
        scrollValue={scrollValue}
        leaderboardName={leaderboardName}
        uriSet={getUriSet(leaderboardItems)}
      />
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

const mapStateToProps = (state: IReduxState) => ({
  showDuels: !!getUserFeatures(state).showDuels,
});

export const LeaderboardContentContainer = connect<ConnectedState>(mapStateToProps)(_LeaderboardContentContainer);
