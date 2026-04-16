import React, { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import { MedalIcon } from "@atoms/icon/medal-icon";
import { Colours, Style } from "@styles";
import TournamentAvatarStack from "../tournament-avatar-stack/tournament-avatar-stack";

interface ITournamentLeaderboardCardProps {
  position: number;
  teamName: string;
  score: number;
  avatars: { uri?: string }[];
}

const AVATAR_SIZE = 50;

const TournamentLeaderboardCard = ({ position, teamName, score, avatars }: ITournamentLeaderboardCardProps) => {
  return (
    <Box
      w={136}
      bg={Colours.neutral.white}
      br={8}
      borderWidth={1}
      borderColor={Colours.metallic.m200}
      overflow="hidden"
    >
      <Box h={90} alignItems="center" justifyContent="center">
        <Box pt={16}>
          <TournamentAvatarStack avatars={avatars} size={AVATAR_SIZE} />
        </Box>
        <Box position="absolute" bottom={-8} alignSelf="center">
          <MedalIcon position={position} size={Style.adjust(28)} />
        </Box>
      </Box>
      <Box py={12} px={8} alignItems="center">
        <TextTemplate type="l1b" color={Colours.neutral.n900} numberOfLines={1}>
          {teamName}
        </TextTemplate>
        <Box mt={4}>
          <TextTemplate type="l1" color={Colours.neutral.n900}>
            {score}
          </TextTemplate>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(TournamentLeaderboardCard);
