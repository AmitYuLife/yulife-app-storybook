import { ScrollView } from "react-native";
import React, { memo } from "react";

import { Colours, Style, StyleSheet } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, ListItem } from "@organisms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PADDING_TOP } from "@styles/top-bar.styles";
import TournamentScoreCard from "../../components/tournament-score-card/tournament-score-card";
import TournamentSectionHeader from "../../components/tournament-section-header/tournament-section-header";
import { t } from "@locale";
import type { GetTournamentTeamLeaderboardQuery } from "@graphql/__generated";
import { addCommasToNumber } from "@utils";

type MyTeamData = NonNullable<GetTournamentTeamLeaderboardQuery["getTournamentTeamLeaderboard"]>;

interface ITournamentTeamViewScreenProps {
  team: MyTeamData;
  onLeftIconPress: () => void;
  onMemberPress?: (userId: string) => void;
}

const TournamentTeamViewScreen = ({ team, onLeftIconPress, onMemberPress }: ITournamentTeamViewScreenProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Box flexGrow={1} bg={Colours.neutral.n50}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: bottom + Style.adjust(20) }}
      >
        <Box px={24} pt={16}>
          <TextTemplate type="h2" color={Colours.neutral.n900}>
            {team.teamName}
          </TextTemplate>
          <Box mt={4}>
            <TextTemplate type="l1" color={Colours.neutral.n700}>
              {team.membersCount} {team.membersCount === 1 ? "member" : "members"}
            </TextTemplate>
          </Box>
        </Box>

        <Box px={24} pt={16} pb={8}>
          <TournamentScoreCard label={t("screens.tournaments.total_team_score")} score={team.totalScore} />
        </Box>

        <TournamentSectionHeader title={t("screens.tournaments.members")} />
        <Box
          mx={24}
          mt={12}
          br={10}
          borderWidth={1}
          borderColor={Colours.metallic.m200}
          pt={8}
          bg={Colours.neutral.white}
        >
          {team.members.map((member, i) => (
            <ListItem
              key={member.id}
              score={addCommasToNumber(member.score)}
              position={i + 1}
              showNewMedal={true}
              type="leaderboard"
              name={member.name}
              uri={member.image?.uri ?? ""}
              data={member.id}
              onPress={onMemberPress}
            />
          ))}
        </Box>
      </ScrollView>
      <GenericHeadingAbsolute
        heading={null}
        color={Colours.neutral.n900}
        onLeftIconPress={onLeftIconPress}
        backgroundColor={Colours.neutral.n50}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingTop: PADDING_TOP + Style.adjust(44),
  },
});

export default memo(TournamentTeamViewScreen);
