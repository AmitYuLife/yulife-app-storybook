import { memo } from "react";
import { Colours } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { LeaderboardPositionIcon } from "@atoms/icon/leaderboard-position-icon";
import TournamentAvatarStack from "../tournament-avatar-stack/tournament-avatar-stack";
import { t } from "@locale";
import { addCommasToNumber } from "@utils";

interface ITournamentTeamRowProps {
  name: string;
  score: number;
  membersCount: number;
  avatars: { uri?: string | null }[];
  position: number;
}

const POSITION_THRESHOLD = 4;

const TournamentTeamRow = ({ name, score, membersCount, avatars, position }: ITournamentTeamRowProps) => (
  <Box flexDirection="row" alignItems="center" py={8} px={8}>
    <Box w={32} alignItems="center" mr={4}>
      {position < POSITION_THRESHOLD ? (
        <LeaderboardPositionIcon position={position} showNewMedal={true} />
      ) : (
        <TextTemplate textAlign="center" color={Colours.neutral.n900} type="b2">
          {position}
        </TextTemplate>
      )}
    </Box>

    <TournamentAvatarStack avatars={avatars} />

    <Box flex={1} ml={8}>
      <TextTemplate type="b2b" color={Colours.neutral.n900} numberOfLines={1}>
        {name}
      </TextTemplate>
      <TextTemplate type="l1" color={Colours.neutral.n700}>
        {t("screens.tournaments.joined", { smart_count: membersCount })}
      </TextTemplate>
    </Box>

    <Box flexDirection="row" alignItems="center">
      <TextTemplate type="b2b" color={Colours.neutral.n900}>
        {addCommasToNumber(score)}
      </TextTemplate>
    </Box>
  </Box>
);

export default memo(TournamentTeamRow);
