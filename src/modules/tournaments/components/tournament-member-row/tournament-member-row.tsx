import { memo } from "react";
import { Colours } from "@styles";
import { Box } from "@atoms";
import { ListItem } from "@organisms";
import type { GetTournamentTeamLeaderboardQuery } from "@graphql/__generated";
import { addCommasToNumber } from "@utils";

type TeamMember = NonNullable<GetTournamentTeamLeaderboardQuery["getTournamentTeamLeaderboard"]>["members"][number];

interface ITournamentMemberRowProps {
  member: TeamMember;
  position: number;
  isCurrentUser?: boolean;
  onPress?: (userId: string) => void;
}

const TournamentMemberRow = ({ member, position, isCurrentUser, onPress }: ITournamentMemberRowProps) => (
  <Box px={24} bg={Colours.neutral.n50}>
    <ListItem
      score={addCommasToNumber(member.score)}
      position={position}
      showNewMedal={true}
      type="leaderboard"
      name={member.name}
      uri={member.image?.uri ?? ""}
      data={member.id}
      onPress={onPress}
      theme={isCurrentUser ? "active" : undefined}
    />
  </Box>
);

export default memo(TournamentMemberRow);
