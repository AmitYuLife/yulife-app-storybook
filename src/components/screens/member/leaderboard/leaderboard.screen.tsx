import React, { memo, useCallback } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { GenericHeadingAbsolute, GenericHeadingPad, ListItem, NavBar, Podium, Tabs } from "@organisms";
import { Colours, NAV_BAR, Style } from "@styles";
import { LeaderboardNavigation, TouchableOpacityWithDelay } from "@molecules";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { QuestionOutlineIcon } from "@atoms/icon/question-outline-icon";
import { ILeaderboard } from "@redux/user/user.reducer";
import { IList as ITabList } from "@organisms/tabs/tabs";
import {
  GetLeaderboard_getLeaderboard,
  GetLeaderboard_getLeaderboard as ICurrentUserInfo,
} from "@graphql/_core/schema";

interface IProps {
  items: GetLeaderboard_getLeaderboard[];
  onLeftIconPress: () => void;
  onLeftNavigationPress: () => void;
  onRightNavigationPress: () => void;
  onRefresh: () => void;
  onQuestionMarkPress: () => void;
  onListItemPress: (userId: string, leaderboardPlacement: number) => void;
  activeLeaderboard: ILeaderboard;
  showDuels: boolean;
  isLoading: boolean;
  metricName: string;
  tabList: ITabList[];
  currentUserInfo: ICurrentUserInfo;
}

export const LeaderboardScreen = ({
  items,
  onLeftIconPress,
  onLeftNavigationPress,
  onRightNavigationPress,
  onRefresh,
  onQuestionMarkPress,
  onListItemPress,
  showDuels,
  activeLeaderboard,
  metricName,
  tabList,
  currentUserInfo,
  isLoading,
}: IProps) => {
  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<GetLeaderboard_getLeaderboard>) => {
      return (
        <ListItem
          key={item.id}
          type="leaderboard"
          onPress={() => onListItemPress(item.id.replace("lead_", ""), index + 1)}
          uri={item.avatarRemoteFiles?.pngFull}
          score={item.steps}
          theme={item.userId === currentUserInfo.userId ? "highlighted" : null}
          {...item}
        />
      );
    },
    [currentUserInfo]
  );

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.podium}>
        <Podium />
      </View>
      <View style={styles.navigation}>
        <TouchableOpacityWithDelay style={styles.podiumQuestionMark} onPress={onQuestionMarkPress}>
          <QuestionOutlineIcon colour="#345E8C" />
        </TouchableOpacityWithDelay>
        <LeaderboardNavigation
          showDuels={showDuels}
          activeLeaderboard={activeLeaderboard}
          onLeftPress={onLeftNavigationPress}
          onRightPress={onRightNavigationPress}
          metricName={metricName}
        />
      </View>
      <View style={styles.tabs}>
        <Tabs list={tabList} />
      </View>
      <View style={styles.list}>
        {isLoading ? (
          <ListItemsLoading />
        ) : (
          <FlashList
            showsVerticalScrollIndicator={false}
            estimatedItemSize={95}
            scrollEventThrottle={16}
            contentContainerStyle={styles.listContainer}
            onRefresh={onRefresh}
            data={items}
            renderItem={renderItem}
            refreshing={isLoading}
          />
        )}
      </View>

      <NavBar activeIndex={3} />
      <GenericHeadingAbsolute backgroundColor="#CEEBFF" logo="yulife" onLeftIconPress={onLeftIconPress} />
    </View>
  );
};

const ListItemsLoading = () => (
  <>
    {Array.from({ length: 10 }).map((_, index) => (
      <ListItem key={index} isLoading={true} position={index} type="leaderboard" name={null} uri={null} score={null} />
    ))}
  </>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  navigation: {
    marginTop: Style.adjust(8),
    paddingHorizontal: Style.adjust(16),
    height: Platform.select({ ios: Style.adjust(295), android: Style.adjust(343) }),
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
    backgroundColor: Colours.neutral.white,
  },
  list: {
    paddingHorizontal: Style.adjust(16),
    backgroundColor: "#FBFBFB",
    flex: 1,
    paddingTop: Style.adjust(5),
  },
  listContainer: {
    paddingBottom: Platform.select({ ios: NAV_BAR.DEFAULT_FULL_HEIGHT - 35, android: NAV_BAR.DEFAULT_FULL_HEIGHT }),
  },
});

export default memo(LeaderboardScreen);
