import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export interface IRewardSearchListItemProps {
  label: string;
  imageUrl?: string;
  onPress?: () => void;
}

export const RewardSearchListItem = ({ label, imageUrl, onPress }: IRewardSearchListItemProps) => (
  <Box
    flexDirection="row"
    alignItems="center"
    gap={12}
    ph={16}
    pv={12}
    style={{
      borderBottom: `1px solid ${Colours.neutral.n100}`,
      cursor: onPress ? "pointer" : "default",
    }}
    onClick={onPress as any}
  >
    <Box w={48} h={48} br={8} overflow="hidden" bg={Colours.neutral.n20}>
      {imageUrl ? <Image source={{ uri: imageUrl }} width={48} height={48} style={{ objectFit: "cover" }} /> : null}
    </Box>
    <Text type="b2b" color={Colours.neutral.n900} style={{ flex: 1 }} numberOfLines={1}>
      {label}
    </Text>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M6 12l4-4-4-4"
        stroke={Colours.neutral.n400}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Box>
);
