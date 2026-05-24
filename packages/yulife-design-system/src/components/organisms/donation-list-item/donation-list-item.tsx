import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export interface IDonationListItemProps {
  id?: string;
  title: string;
  description?: string;
  yuCoin: number;
  image: { uri?: string };
  onSubmit?: (id: string, amount: number) => void;
  onLeaderboardPress?: () => void;
  avatarUris?: string[];
}

export const DonationListItem = ({
  id,
  title,
  description,
  yuCoin,
  image,
  onSubmit,
  onLeaderboardPress: _onLeaderboardPress,
  avatarUris = [],
}: IDonationListItemProps) => (
  <Box
    flexDirection="row"
    alignItems="center"
    gap={12}
    p={16}
    br={12}
    borderWidth={1}
    borderColor={Colours.neutral.n150}
    bg={Colours.neutral.white}
  >
    {image.uri ? <Image source={{ uri: image.uri }} width={56} height={56} borderRadius={8} /> : null}
    <Box flexDirection="column" gap={4} style={{ flex: 1 }}>
      <Text type="b2b" color={Colours.neutral.n900}>
        {title}
      </Text>
      {description ? (
        <Text type="l1" color={Colours.neutral.n700}>
          {description}
        </Text>
      ) : null}
      {avatarUris.length > 0 ? (
        <Box flexDirection="row" gap={-8} alignItems="center" mt={4}>
          {avatarUris.slice(0, 4).map((uri, i) => (
            <Image
              key={i}
              source={{ uri }}
              width={20}
              height={20}
              borderRadius={10}
              style={{ border: `2px solid ${Colours.neutral.white}`, marginLeft: i > 0 ? -6 : 0 }}
            />
          ))}
        </Box>
      ) : null}
    </Box>
    <Box flexDirection="column" alignItems="center" gap={6}>
      <Text type="l2" color={Colours.neutral.n700}>
        {yuCoin} YuCoin
      </Text>
      {onSubmit ? (
        <button
          onClick={() => onSubmit(id ?? "", yuCoin)}
          style={{
            backgroundColor: Colours.primary.p600,
            color: Colours.neutral.white,
            border: "none",
            borderRadius: 20,
            padding: "6px 16px",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 13,
          }}
        >
          Donate
        </button>
      ) : null}
    </Box>
  </Box>
);
