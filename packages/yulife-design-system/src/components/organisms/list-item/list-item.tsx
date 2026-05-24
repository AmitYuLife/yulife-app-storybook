import { Box } from "../../box";
import { Text } from "../../text";
import { Avatar } from "../../avatar";
import { Colours } from "../../../tokens/colours";

export type ListItemType = "leaderboard" | "search";
export type ListItemTheme = "active" | "default";

export interface IListItemProps {
  name: string;
  uri?: string;
  type?: ListItemType;
  theme?: ListItemTheme;
  position?: number;
  score?: string;
  onPress?: () => void;
}

const POSITION_COLORS: Record<number, string> = {
  1: "#FFD700",
  2: "#C0C0C0",
  3: "#CD7F32",
};

export const ListItem = ({
  name,
  uri,
  type = "search",
  theme = "default",
  position,
  score,
  onPress,
}: IListItemProps) => {
  const isActive = theme === "active";
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      gap={12}
      ph={16}
      pv={12}
      bg={isActive ? Colours.primary.p20 : Colours.neutral.white}
      style={{
        borderBottom: `1px solid ${Colours.neutral.n100}`,
        cursor: onPress ? "pointer" : "default",
      }}
      onClick={onPress as any}
    >
      {type === "leaderboard" && position != null ? (
        <Box
          w={32}
          h={32}
          br={16}
          justifyContent="center"
          alignItems="center"
          bg={POSITION_COLORS[position] ?? Colours.neutral.n100}
        >
          <Text type="l2b" color={position <= 3 ? Colours.neutral.white : Colours.neutral.n700} align="center">
            {position}
          </Text>
        </Box>
      ) : null}
      <Avatar name={name} src={uri} size={40} />
      <Text type="b2b" color={Colours.neutral.n900} numberOfLines={1} style={{ flex: 1 }}>
        {name}
      </Text>
      {type === "leaderboard" && score ? (
        <Text type="b2b" color={isActive ? Colours.primary.p600 : Colours.neutral.n700}>
          {score}
        </Text>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 12l4-4-4-4"
            stroke={Colours.neutral.n400}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Box>
  );
};
