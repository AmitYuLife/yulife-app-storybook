import { memo } from "react";
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
}: ITournamentAvatarStackProps) => {
  const filled = avatars.slice(0, maxAvatars);
  const placeholders = Math.max(0, maxAvatars - filled.length);

  return (
    <Box flexDirection="row" alignItems="center">
      {filled.map((avatar, i) => (
        <Box
          key={`a-${i}`}
          borderWidth={2}
          borderColor={Colours.neutral.white}
          br={100}
          overflow="hidden"
          ml={i > 0 ? -overlap : 0}
        >
          <Avatar uri={avatar.uri ?? ""} size={size} heightScale={2.1} />
        </Box>
      ))}
      {Array.from({ length: placeholders }).map((_, i) => (
        <Box
          key={`p-${i}`}
          w={size}
          h={size}
          br={100}
          bg={Colours.neutral.n200}
          borderWidth={2}
          borderColor={Colours.neutral.white}
          ml={filled.length + i > 0 ? -overlap : 0}
        />
      ))}
    </Box>
  );
};

export default memo(TournamentAvatarStack);
