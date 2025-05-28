import React, { memo, useCallback } from "react";
import { useQuery } from "@apollo/client";
import GenericOverlay from "../generic-overlay/generic-overlay";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { ListItem } from "@organisms";
import { Platform, StyleSheet, View } from "react-native";
import { NAV_BAR, Style } from "@styles";
import { Navigation } from "@navigation/main";
import { GetMobileSocialGroupLeaderboardItemsQuery, gql } from "@graphql/__generated";

interface IProps {
  leaderboardId: string;
  targetId: string;
  onListItemPress: (userId: string, position: number) => void;
}

type SocialGroupLeaderboardItem = GetMobileSocialGroupLeaderboardItemsQuery["getMobileSocialGroupLeaderboardItems"][0];

const LeaderboardRankModal = ({ leaderboardId, targetId, onListItemPress }: IProps) => {
  const { data, loading } = useQuery(gql("GetMobileSocialGroupLeaderboardItemsDocument"), {
    variables: {
      leaderboardId,
      targetId,
    },
    fetchPolicy: "network-only",
  });

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<SocialGroupLeaderboardItem>) => {
      return (
        <ListItem
          type="leaderboard"
          onPress={() => onListItemPress(item.userId, index + 1)}
          uri={item?.avatar?.uri}
          score={item.score}
          theme={item.userId === targetId ? "highlighted" : null}
          {...item}
        />
      );
    },
    [targetId, onListItemPress]
  );

  return (
    <GenericOverlay onClose={onClose}>
      <View style={styles.wrapper}>
        {loading ? (
          <ListItemsLoading />
        ) : (
          <FlashList
            showsVerticalScrollIndicator={false}
            estimatedItemSize={45}
            scrollEventThrottle={16}
            contentContainerStyle={styles.listContainer}
            data={data?.getMobileSocialGroupLeaderboardItems}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        )}
      </View>
    </GenericOverlay>
  );
};

const onClose = () => Navigation.dismissAllModals();

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(16),
  },
  listContainer: {
    paddingBottom: Platform.select({
      ios: NAV_BAR.DEFAULT_FULL_HEIGHT - Style.adjust(35),
      android: NAV_BAR.DEFAULT_FULL_HEIGHT,
    }),
  },
});

const ListItemsLoading = () => (
  <>
    {Array.from({ length: 40 }).map((_, index) => (
      <ListItem key={index} isLoading={true} position={index} type="leaderboard" name={null} uri={null} score={null} />
    ))}
  </>
);

const keyExtractor = (item: SocialGroupLeaderboardItem) => item.id;

export default memo(LeaderboardRankModal);
