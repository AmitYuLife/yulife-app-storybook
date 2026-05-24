import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export interface ICouponListItemProps {
  title: string;
  description: string;
  onPress?: () => void;
  icon: string;
}

export const CouponListItem = ({ title, description, onPress, icon }: ICouponListItemProps) => (
  <Box
    flexDirection="row"
    alignItems="center"
    gap={12}
    p={16}
    br={12}
    borderWidth={1}
    borderColor={Colours.neutral.n150}
    bg={Colours.neutral.white}
    style={{ cursor: onPress ? "pointer" : "default" }}
    onClick={onPress as any}
  >
    <Image source={{ uri: icon }} width={50} height={46} style={{ objectFit: "contain" }} />
    <Box flexDirection="column" gap={4} style={{ flex: 1 }}>
      <Text type="l1b" color={Colours.neutral.n900}>
        {title}
      </Text>
      <Text type="l1" color={Colours.neutral.n700}>
        {description}
      </Text>
    </Box>
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
