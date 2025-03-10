import React, { RefObject, memo, useCallback, useEffect, useMemo, useRef } from "react";
import { Animated, Platform, RefreshControl, StyleSheet, View } from "react-native";
import { GenericHeadingPad, LeaderboardFloatingRank, NavBar, TopBar, UserReferral } from "@organisms";
import { Colours, NAV_BAR, Style, TOP_BAR } from "@styles";
import { FlashList as _FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { LEADERBOARD_SCROLL_LIST, NOTIF_CENTRE } from "@ids";
import LeaderboardListFooterComponent from "./leaderboard-list-footer-componet";
import LeaderboardListHeaderComponent from "./leaderboard-list-header-component";
import LeaderboardListItem, { ISocialGroupLeaderboardListItem } from "./leaderboard-list-item";
import LeaderboardListTabs from "./leaderboard-list-tabs";
import { ISocialGroup, ISocialGroupLeaderboard } from "@redux/leaderboards/leaderboards.types";
import { SocialGroupLeaderboardConfigId } from "@graphql/__generated";
import { useUserFeatures } from "@hooks";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

export interface ITop3 {
  top1?: string;
  top2?: string;
  top3?: string;
}

interface IProps {
  items: ISocialGroupLeaderboardListItem[];
  onLeftNavigationPress: () => void;
  onDuelPress: () => void;
  onSearchPress: () => void;
  onRefresh: () => void;
  onQuestionMarkPress: () => void;
  onJoinLeaderboardPress: () => void;
  onLeftMenuPress: () => void;
  onNotificationPress: () => void;
  onOpenFrames?: () => void;
  onShowRankModal: () => void;
  onListItemPress: (userId: string, leaderboardPlacement: number) => void;
  onUpdateActiveLeaderboard: (leaderboard: { leaderboardId: string; name: string }) => void;
  activeSocialGroup: ISocialGroup;
  activeLeaderboard: ISocialGroupLeaderboard;
  showDuels: boolean;
  showSearch: boolean;
  isLoading: boolean;
  itemsIsLoading: boolean;
  currentUserInfo: ISocialGroupLeaderboardListItem;
  ranks: ITop3;
  referralAmount: number;
  showReferral: boolean;
}

const FlashList = Animated.createAnimatedComponent(_FlashList);

const PODIUM_HEIGHT = Style.DEVICE_WIDTH - (TOP_BAR.TOP_BAR_WITH_PAD + 10);
const TOP_OFFSET = TOP_BAR.TOP_BAR_WITH_PAD + TOP_BAR.LOGO_PADDING_TOP;
const FLOATING_ITEM_OFFSET =
  Style.DEVICE_WIDTH -
  10 -
  Style.DEVICE_HEIGHT +
  NAV_BAR.DEFAULT_FULL_HEIGHT / 2 +
  Platform.select({ ios: 0, android: 35 });

const goToReferralInformation = async () => {
  await Navigation.push(ROUTES.leaderboard, {
    component: {
      id: ROUTES.referralInformation,
      name: ROUTES.referralInformation,
    },
  });
};

export const LeaderboardScreen = ({
  items,
  onLeftNavigationPress,
  onDuelPress,
  onSearchPress,
  onRefresh,
  onQuestionMarkPress,
  onJoinLeaderboardPress,
  onLeftMenuPress,
  onNotificationPress,
  onListItemPress,
  onShowRankModal,
  onOpenFrames,
  onUpdateActiveLeaderboard,
  showDuels,
  showSearch,
  activeSocialGroup,
  activeLeaderboard,
  currentUserInfo,
  isLoading,
  itemsIsLoading,
  ranks,
  referralAmount,
  showReferral,
}: IProps) => {
  const scrollValue = useRef(new Animated.Value(0)).current;
  const flashList: RefObject<_FlashList<ISocialGroupLeaderboardListItem>> = useRef();
  const { tempGameEnableAnimatedLeaderboardRays } = useUserFeatures();
  const showYudokuEmptyMessage = useMemo(
    () => !items.length && activeLeaderboard?.leaderboardConfigId === SocialGroupLeaderboardConfigId.Dailysudoku,
    [items.length, activeLeaderboard]
  );

  useEffect(() => {
    flashList.current?.scrollToOffset({
      offset: 0,
      animated: false,
    });
  }, [items]);

  const navigationItems = useMemo(() => [{ id: "header" }, { id: "tabs" }], []);

  const data = useMemo(() => {
    const stickItem = [...navigationItems];
    if (itemsIsLoading) {
      return stickItem;
    }

    const filterCurrentUser = items.filter((item) => item.position < items.length);
    return [...navigationItems, ...filterCurrentUser];
  }, [items, itemsIsLoading, navigationItems]);

  const showTrophy = (!itemsIsLoading && showYudokuEmptyMessage) || !activeLeaderboard?.consent;

  const onItemPress = useCallback(
    ({ item, index }: ListRenderItemInfo<ISocialGroupLeaderboardListItem>) => {
      onListItemPress(item.userId, index + 1);
    },
    [onListItemPress]
  );

  const { refreshControlStyle, opacity, stickyHeaderIndices, onScroll } = useMemo(() => {
    const clampedOpacity = scrollValue.interpolate({
      inputRange: [0, PODIUM_HEIGHT - 60],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return {
      opacity: clampedOpacity,
      refreshControlStyle: [
        styles.refreshControl,
        {
          opacity: clampedOpacity,
        },
      ],
      stickyHeaderIndices: [1],
      onScroll: Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], {
        useNativeDriver: true,
      }),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = useCallback(
    (listItem: ListRenderItemInfo<ISocialGroupLeaderboardListItem>) => {
      const { item } = listItem;

      if (item.id === "tabs") {
        return (
          <LeaderboardListTabs
            leaderboards={activeSocialGroup?.leaderboards}
            activeLeaderboard={activeLeaderboard}
            itemsIsLoading={itemsIsLoading}
            onSelect={onUpdateActiveLeaderboard}
          />
        );
      }

      if (item.id === "header") {
        return (
          <LeaderboardListHeaderComponent
            opacity={opacity}
            activeSocialGroup={activeSocialGroup}
            navigationDescription={activeLeaderboard?.shortDescription}
            showDuels={showDuels}
            showSearch={showSearch}
            showTrophy={showTrophy}
            enableAnimatedRays={tempGameEnableAnimatedLeaderboardRays}
            ranks={ranks}
            onOpenFrames={onOpenFrames}
            onLeftNavigationPress={onLeftNavigationPress}
            onDuelPress={onDuelPress}
            onSearchPress={onSearchPress}
            onQuestionMarkPress={onQuestionMarkPress}
          />
        );
      }

      return (
        <LeaderboardListItem onPress={onItemPress} currentUserInfo={currentUserInfo} listItem={listItem} item={item} />
      );
    },
    [
      ranks,
      opacity,
      showDuels,
      showSearch,
      showTrophy,
      onItemPress,
      onDuelPress,
      onOpenFrames,
      onSearchPress,
      itemsIsLoading,
      currentUserInfo,
      activeSocialGroup,
      activeLeaderboard,
      onQuestionMarkPress,
      onLeftNavigationPress,
      onUpdateActiveLeaderboard,
      tempGameEnableAnimatedLeaderboardRays,
    ]
  );

  const leftIcons = useMemo(
    () => [
      {
        icon: LeftIcon.MENU,
        onPress: onLeftMenuPress,
        style: { marginRight: Style.adjust(16) },
      },
      ...(onNotificationPress
        ? [
            {
              icon: LeftIcon.NOTIFICATIONS,
              onPress: onNotificationPress,
              testID: NOTIF_CENTRE,
              style: { paddingLeft: Style.adjust(8) },
              hitSlop: {
                ...TOP_BAR.HIT_SLOP,
                left: 0,
              },
            },
          ]
        : []),
    ],
    [onNotificationPress, onLeftMenuPress]
  );

  const onPressFloatingRank = useCallback(() => {
    if (onShowRankModal) {
      return onShowRankModal();
    }

    flashList.current.scrollToIndex({
      index: currentUserInfo?.position - 2,
      animated: true,
    });
  }, [currentUserInfo?.position, onShowRankModal]);

  const renderFooter = useCallback(
    () => (
      <>
        <LeaderboardListFooterComponent
          itemsIsLoading={itemsIsLoading}
          isLoading={isLoading}
          hasLeaderboard={!!activeLeaderboard}
          hasConsent={activeLeaderboard?.consent}
          showYudokuEmptyMessage={showYudokuEmptyMessage}
          onJoinLeaderboardPress={onJoinLeaderboardPress}
        />
        {!showReferral ? null : (
          <View style={styles.referralFooterWrapper}>
            <UserReferral referralAmount={referralAmount} onReferralsButtonPress={goToReferralInformation} />
          </View>
        )}
      </>
    ),
    [
      activeLeaderboard,
      isLoading,
      itemsIsLoading,
      onJoinLeaderboardPress,
      showYudokuEmptyMessage,
      referralAmount,
      showReferral,
    ]
  );

  const getItemType = useCallback(
    (item: ISocialGroupLeaderboardListItem) => (item.id === "header" ? "header" : "item"),
    []
  );

  const listStyle = useMemo(
    () => ({
      ...styles.list,
      backgroundColor: Platform.select({
        ios: "#FBFBFB",
        android: data.length < 11 || showTrophy ? "#FBFBFB" : "#CEEBFF",
      }),
    }),
    [showTrophy, data.length]
  );
  const RefreshComponent = useMemo(
    () => <RefreshControl style={styles.refreshControl} refreshing={isLoading} onRefresh={onRefresh} />,
    []
  );

  return (
    <View style={styles.wrapper}>
      <Animated.View style={refreshControlStyle}>
        <GenericHeadingPad />
      </Animated.View>
      <View style={listStyle}>
        <FlashList
          testID={LEADERBOARD_SCROLL_LIST}
          ref={flashList}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={56}
          scrollEventThrottle={16}
          contentContainerStyle={styles.listContainer}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onRefresh={onRefresh}
          refreshing={isLoading}
          refreshControl={RefreshComponent}
          ListFooterComponent={renderFooter}
          stickyHeaderIndices={stickyHeaderIndices}
          stickyHeaderHiddenOnScroll={true}
          onScroll={onScroll}
          getItemType={getItemType}
        />
        {itemsIsLoading ? null : (
          <View style={styles.floatingWrapper}>
            <LeaderboardFloatingRank
              name={currentUserInfo?.name}
              frame={currentUserInfo?.avatarFrame}
              position={currentUserInfo?.position}
              score={currentUserInfo?.score}
              avatar={currentUserInfo?.avatar?.uri}
              scrollValue={scrollValue}
              offset={FLOATING_ITEM_OFFSET}
              onPress={onPressFloatingRank}
            />
          </View>
        )}
        <View style={styles.pad} />
      </View>
      <NavBar activeIndex={3} />
      <View style={styles.topbarWrapper}>
        <TopBar type="default" leftIcons={leftIcons} />
      </View>
    </View>
  );
};

const keyExtractor = (item: ISocialGroupLeaderboardListItem) => item.id;

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerWrapper: {
    backgroundColor: Colours.neutral.white,
  },
  navigation: {
    paddingHorizontal: Style.adjust(16),
    position: "absolute",
    top: TOP_BAR.TOP_BAR_WITH_PAD + TOP_BAR.LOGO_PADDING_TOP,
    width: Style.DEVICE_WIDTH,
  },
  podiumWrapper: {
    marginTop: Style.adjust(10),
    height: PODIUM_HEIGHT,
    top: -TOP_OFFSET,
  },
  podium: {
    position: "absolute",
  },
  podiumQuestionMark: {
    position: "absolute",
    right: Style.adjust(24),
    bottom: Style.adjust(20),
  },
  tabs: {
    paddingTop: Style.adjust(10),
    backgroundColor: Colours.neutral.white,
    marginBottom: Style.adjust(17),
  },
  listWrapper: {
    paddingHorizontal: Style.adjust(16),
  },
  list: {
    flex: 1,
    paddingBottom: NAV_BAR.DEFAULT_FULL_HEIGHT / 2,
  },
  listContainer: {
    backgroundColor: "#FBFBFB",
    paddingBottom: Platform.select({
      ios: NAV_BAR.DEFAULT_FULL_HEIGHT - Style.adjust(35),
      android: NAV_BAR.DEFAULT_FULL_HEIGHT,
    }),
  },
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  },
  avatarsWrapper: {
    width: Style.DEVICE_WIDTH * 0.58,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    alignSelf: "center",
    flex: 1,
    top: TOP_OFFSET,
    marginBottom: "22.7%",
  },
  avatars: {
    flex: 0.5,
    alignItems: "center",
  },
  avatarTop2: {
    top: "10%",
  },
  avatarTop3: {
    top: "15%",
  },
  trophy: {
    marginRight: Style.adjust(1),
    marginBottom: "5%",
  },
  pad: {
    backgroundColor: Colours.neutral.white,
    position: "absolute",
    height: NAV_BAR.DEFAULT_FULL_HEIGHT / 2,
    width: Style.DEVICE_WIDTH,
    bottom: 0,
  },
  refreshControl: {
    backgroundColor: "#CEEBFF",
  },
  floatingWrapper: {
    paddingHorizontal: Style.adjust(16),
  },
  referralFooterWrapper: {
    marginTop: Style.adjust(32),
    marginBottom: Style.adjust(8),
  },
});

export default memo(LeaderboardScreen);
