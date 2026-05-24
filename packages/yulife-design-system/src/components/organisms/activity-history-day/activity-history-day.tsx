import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";
import { StarRating } from "../../star-rating";

export interface IActivityHistoryItem {
  title: string;
  yucoin: string;
  stars?: number;
  leftIcon: { uri?: string; id: string };
  rightIcon?: { uri?: string; id: string };
}

export interface IActivityHistoryGroup {
  title: string;
  activityItems: IActivityHistoryItem[];
}

export interface IActivityHistoryDayProps {
  title: string;
  level: string;
  yucoin: string;
  leftIcon: { uri?: string; id: string };
  rightIcon?: { uri?: string; id: string };
  historyItems: IActivityHistoryGroup[];
}

export const ActivityHistoryDay = ({
  title,
  level,
  yucoin,
  leftIcon,
  rightIcon,
  historyItems,
}: IActivityHistoryDayProps) => (
  <Box flexDirection="column" br={12} borderWidth={1} borderColor={Colours.neutral.n150} overflow="hidden">
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      ph={16}
      pv={12}
      bg={Colours.neutral.n50}
    >
      <Box flexDirection="row" alignItems="center" gap={10}>
        {leftIcon.uri ? <Image source={{ uri: leftIcon.uri }} width={32} height={32} borderRadius={16} /> : null}
        <Box flexDirection="column" gap={2}>
          <Text type="b2b" color={Colours.neutral.n900}>
            {title}
          </Text>
          <Text type="l1" color={Colours.neutral.n700}>
            {level}
          </Text>
        </Box>
      </Box>
      <Box flexDirection="row" alignItems="center" gap={6}>
        {rightIcon?.uri ? <Image source={{ uri: rightIcon.uri }} width={20} height={20} /> : null}
        <Text type="b2b" color={Colours.neutral.n900}>
          {yucoin}
        </Text>
      </Box>
    </Box>
    {historyItems.map((group) => (
      <Box key={group.title} flexDirection="column">
        <Box ph={16} pv={8} bg={Colours.neutral.n20}>
          <Text type="l2b" color={Colours.neutral.n700}>
            {group.title}
          </Text>
        </Box>
        {group.activityItems.map((item) => (
          <Box
            key={item.title}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            ph={16}
            pv={10}
            borderWidth={1}
            borderColor={Colours.neutral.n100}
            style={{ borderLeft: "none", borderRight: "none", borderTop: "none" }}
          >
            <Box flexDirection="row" alignItems="center" gap={10}>
              {item.leftIcon.uri ? <Image source={{ uri: item.leftIcon.uri }} width={28} height={28} /> : null}
              <Box flexDirection="column" gap={2}>
                <Text type="b2" color={Colours.neutral.n900}>
                  {item.title}
                </Text>
                {typeof item.stars === "number" ? <StarRating totalStars={3} activeStars={item.stars} /> : null}
              </Box>
            </Box>
            <Box flexDirection="row" alignItems="center" gap={4}>
              {item.rightIcon?.uri ? <Image source={{ uri: item.rightIcon.uri }} width={16} height={16} /> : null}
              <Text type="b2b" color={Colours.neutral.n900}>
                {item.yucoin}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    ))}
  </Box>
);
