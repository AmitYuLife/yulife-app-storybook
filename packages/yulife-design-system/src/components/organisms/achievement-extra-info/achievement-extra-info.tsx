import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export interface IAchievementExtraInfoItem {
  title: string;
  description: string;
  icon: { uri?: string; id: string };
}

export interface IAchievementExtraInfoProps {
  items: IAchievementExtraInfoItem[];
}

export const AchievementExtraInfo = ({ items }: IAchievementExtraInfoProps) => (
  <Box ph={16} pv={12} borderWidth={1} borderColor={Colours.neutral.n150} br={16} flexDirection="column" gap={12}>
    {items.map((item) => (
      <Box key={item.title} flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box flexDirection="row" alignItems="center" gap={8}>
          {item.icon.uri ? <Image source={{ uri: item.icon.uri }} width={24} height={24} /> : null}
          <Text type="b2">{item.title}</Text>
        </Box>
        <Text type="b2b">{item.description}</Text>
      </Box>
    ))}
  </Box>
);
