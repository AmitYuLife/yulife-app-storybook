import React, { memo } from "react";
import { Box } from "@atoms";
import Avatar from "@molecules/avatar/avatar";
import { Colours } from "@styles";

interface ITournamentAvatarStackProps {
  avatars: { uri?: string | null }[];
  maxAvatars?: number;
  size?: number;
  overlap?: number;
}

const DEFAULT_SIZE = 40;
const DEFAULT_OVERLAP = 14;

const TournamentAvatarStack = ({
  avatars,
  maxAvatars = 2,
  size = DEFAULT_SIZE,
  overlap = DEFAULT_OVERLAP,
}: ITournamentAvatarStackProps) => (
  <Box flexDirection="row" alignItems="center">
    {avatars.slice(0, maxAvatars).map((avatar, i) => (
      <Box
        key={i}
        borderWidth={2}
        borderColor={Colours.neutral.white}
        br={100}
        overflow="hidden"
        ml={i > 0 ? -overlap : 0}
      >
        <Avatar uri={avatar.uri ?? ""} size={size} heightScale={2.1} />
      </Box>
    ))}
  </Box>
);

export default memo(TournamentAvatarStack);
