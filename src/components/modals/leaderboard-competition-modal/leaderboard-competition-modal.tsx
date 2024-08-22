import React, { memo, useCallback } from "react";
import { useQuery } from "@apollo/client";
import GenericOverlay from "../generic-overlay/generic-overlay";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { ListItem } from "@organisms";
import { Platform, StyleSheet, View } from "react-native";
import { NAV_BAR, Style } from "@styles";
import { Navigation } from "@navigation/main";
import { GetMobileSocialGroupLeaderboardCompetitionQuery, gql } from "@graphql/__generated";

interface IProps {
  competitionId: string;
}

type LeaderboardItem =
  GetMobileSocialGroupLeaderboardCompetitionQuery["getMobileSocialGroupLeaderboardCompetition"]["items"][0];

const LeaderboardCompetitionModal = ({ competitionId }: IProps) => {
  const { data, loading } = useQuery(gql("GetMobileSocialGroupLeaderboardCompetitionDocument"), {
    variables: {
      competitionId,
    },
    fetchPolicy: "network-only",
  });

  const renderItem = useCallback(({ item }: ListRenderItemInfo<LeaderboardItem>) => {
    return <ListItem type="leaderboard" hideAvatar={true} uri={null} score={item.score} theme={null} {...item} />;
  }, []);

  return (
    <GenericOverlay heading={data?.getMobileSocialGroupLeaderboardCompetition?.name || ""} onClose={onClose}>
      <View style={styles.wrapper}>
        {loading ? (
          <ListItemsLoading />
        ) : (
          <FlashList
            showsVerticalScrollIndicator={false}
            estimatedItemSize={45}
            scrollEventThrottle={16}
            contentContainerStyle={styles.listContainer}
            data={data?.getMobileSocialGroupLeaderboardCompetition?.items || []}
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
      <ListItem
        key={index}
        isLoading={true}
        position={index}
        type="leaderboard"
        name={null}
        uri={null}
        score={null}
        hideAvatar={true}
      />
    ))}
  </>
);

const keyExtractor = (item: LeaderboardItem) => item.id;

export default memo(LeaderboardCompetitionModal);
