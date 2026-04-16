import { ScrollView } from "react-native";
import React, { memo } from "react";
import { Style, StyleSheet } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { Pressable } from "@molecules";
import { ArrowIcon } from "@atoms/icon/arrow";
import { t } from "@locale";
import TournamentLeaderboardCard from "../tournament-leaderboard-card/tournament-leaderboard-card";
import type { GetTournamentLeaderboardQuery } from "@graphql/__generated";

type LeaderboardTeam = NonNullable<GetTournamentLeaderboardQuery["getTournamentLeaderboard"]>["teams"][number];

interface ITournamentLeaderboardSectionProps {
  teams: LeaderboardTeam[];
  onViewAll?: () => void;
  onTeamPress?: (teamId: string) => void;
}

const TournamentLeaderboardSection = ({ teams, onViewAll, onTeamPress }: ITournamentLeaderboardSectionProps) => (
  <>
    <Box px={24} pt={24}>
      <Pressable onPress={onViewAll} enableAnimation={true}>
        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
          <TextTemplate type="b1b">{t("screens.tournaments.leaderboard")}</TextTemplate>
          <ArrowIcon direction="right" size={Style.adjust(20)} />
        </Box>
      </Pressable>
    </Box>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
      {teams.map((team, i) => (
        <Pressable
          key={team.id}
          onPress={onTeamPress ? () => onTeamPress(team.id) : undefined}
          delay={200}
          enableAnimation={true}
        >
          <TournamentLeaderboardCard
            position={i + 1}
            teamName={team.name}
            score={team.score}
            avatars={team.avatars || []}
          />
        </Pressable>
      ))}
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Style.adjust(24),
    gap: Style.adjust(8),
    marginTop: Style.adjust(16),
    paddingBottom: Style.adjust(8),
  },
});

export default memo(TournamentLeaderboardSection);
