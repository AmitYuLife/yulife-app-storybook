import { Box, Image } from "@atoms";
import { Colours, Style } from "@styles";
import { Markdown } from "@molecules";
import { memo } from "react";

interface IProps {
  items: {
    title: string;
    description: string;
    icon: {
      uri?: string;
      id: string;
    };
  }[];
}
const AchievementExtraInfo = ({ items }: IProps) => (
  <Box ph={38}>
    {items.map((item) => (
      <Box
        key={item.title}
        flexDirection="row"
        alignItems="center"
        borderWidth={1}
        borderColor={Colours.metallic.m200}
        br={16}
        justifyContent="space-between"
        ph={16}
      >
        <Box flexDirection="row" alignItems="center" gap={8}>
          <Image source={item.icon} width={Style.adjust(24)} height={Style.adjust(24)} />
          <Markdown text={item.title} />
        </Box>
        <Markdown text={item.description} />
      </Box>
    ))}
  </Box>
);

export default memo(AchievementExtraInfo);
