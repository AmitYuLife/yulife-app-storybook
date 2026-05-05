import { ScrollView } from "react-native";
import { memo } from "react";
import { Colours, Style, StyleSheet } from "@styles";
import { Box } from "@atoms";
import { t } from "@locale";
import TournamentSectionHeader from "../tournament-section-header/tournament-section-header";
import TournamentLeaderboardCard from "../tournament-leaderboard-card/tournament-leaderboard-card";
import type { GetTournamentLeaderboardQuery } from "@graphql/__generated";

type LeaderboardTeam = NonNullable<GetTournamentLeaderboardQuery["getTournamentLeaderboard"]>["teams"][number];

interface ITournamentLeaderboardSectionProps {
  teams: LeaderboardTeam[];
  onViewAll?: () => void;
}

const TournamentLeaderboardSection = ({ teams, onViewAll }: ITournamentLeaderboardSectionProps) => (
  <Box bg={Colours.neutral.n50}>
    <TournamentSectionHeader title={t("screens.tournaments.leaderboard")} onPress={onViewAll} />
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
      {teams.map((team, i) => (
        <TournamentLeaderboardCard
          key={team.id}
          position={i + 1}
          teamName={team.name ?? ""}
          score={team.score}
          avatars={(team.avatars ?? []).map((a) => ({ uri: a.uri ?? undefined }))}
        />
      ))}
    </ScrollView>
  </Box>
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
