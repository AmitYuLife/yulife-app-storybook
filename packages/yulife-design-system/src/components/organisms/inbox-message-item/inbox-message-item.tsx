import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export interface IInboxMessageItemProps {
  title: string;
  subtitle: string;
  timestamp: string;
  imageSource?: string;
  badgeSource?: string | null;
  category?: string;
  showNotificationDot?: boolean;
  onPress?: () => void;
}

export const InboxMessageItem = ({
  title,
  subtitle,
  timestamp,
  imageSource,
  badgeSource,
  category,
  showNotificationDot,
  onPress,
}: IInboxMessageItemProps) => (
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
    <Box style={{ position: "relative", flexShrink: 0 }} w={64} h={64}>
      <Box br={8} overflow="hidden" w={badgeSource ? 56 : 64} h={badgeSource ? 56 : 64} bg={Colours.neutral.n100}>
        {imageSource ? (
          <Image
            source={{ uri: imageSource }}
            width={badgeSource ? 56 : 64}
            height={badgeSource ? 56 : 64}
            style={{ objectFit: "cover" }}
          />
        ) : null}
      </Box>
      {badgeSource ? (
        <Box
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            border: `2px solid ${Colours.neutral.white}`,
          }}
          w={24}
          h={24}
          br={12}
          bg={Colours.neutral.n100}
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
        >
          <Image source={{ uri: badgeSource }} width={16} height={16} />
        </Box>
      ) : null}
    </Box>
    <Box flexDirection="column" gap={2} style={{ flex: 1, overflow: "hidden" }}>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" gap={8}>
        <Text type="b2b" color={Colours.neutral.n900} numberOfLines={1}>
          {title}
        </Text>
        <Text type="l2" color={Colours.neutral.n600} style={{ flexShrink: 0 }}>
          {timestamp}
        </Text>
      </Box>
      {category ? (
        <Text type="l2b" color={Colours.primary.p600}>
          {category}
        </Text>
      ) : null}
      <Text type="l1" color={Colours.neutral.n700} numberOfLines={2}>
        {subtitle}
      </Text>
    </Box>
    {showNotificationDot ? <Box w={10} h={10} br={5} bg={Colours.primary.p600} style={{ flexShrink: 0 }} /> : null}
  </Box>
);
