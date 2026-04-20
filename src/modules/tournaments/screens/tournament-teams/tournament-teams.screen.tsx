import React, { memo, useCallback } from "react";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

import { Colours, Style } from "@styles";
import { Box } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PADDING_TOP } from "@styles/top-bar.styles";
import TournamentTeamRow from "../../components/tournament-team-row/tournament-team-row";
import type { GetTournamentLeaderboardQuery } from "@graphql/__generated";

type LeaderboardTeam = NonNullable<GetTournamentLeaderboardQuery["getTournamentLeaderboard"]>["teams"][number];

interface ITournamentTeamsScreenProps {
  teams: LeaderboardTeam[];
  onLeftIconPress: () => void;
  onTeamPress?: (teamId: string) => void;
}

const TournamentTeamsScreen = ({ teams, onLeftIconPress, onTeamPress }: ITournamentTeamsScreenProps) => {
  const { bottom } = useSafeAreaInsets();

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<LeaderboardTeam>) => (
      <TournamentTeamRow
        name={item.name}
        score={item.score}
        membersCount={item.membersCount}
        avatars={item.avatars}
        position={index + 1}
        onPress={onTeamPress ? () => onTeamPress(item.id) : undefined}
      />
    ),
    [onTeamPress]
  );

  return (
    <Box bg={Colours.neutral.n50}>
      <FlashList
        data={teams}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: PADDING_TOP + Style.adjust(56), paddingBottom: bottom + 80 }}
      />
      <GenericHeadingAbsolute
        heading={null}
        color={Colours.neutral.n900}
        onLeftIconPress={onLeftIconPress}
        backgroundColor={Colours.neutral.n50}
      />
    </Box>
  );
};

export default memo(TournamentTeamsScreen);
