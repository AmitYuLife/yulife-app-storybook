import { Box } from "../../box";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export interface IRecentRewardCardProps {
  imageUrl: string;
  onPress?: () => void;
  size?: number;
}

export const RecentRewardCard = ({ imageUrl, onPress, size = 100 }: IRecentRewardCardProps) => (
  <Box
    br={16}
    overflow="hidden"
    borderWidth={1}
    borderColor={Colours.neutral.n150}
    bg={Colours.neutral.white}
    style={{
      width: size,
      height: size,
      cursor: onPress ? "pointer" : "default",
      boxShadow: `0 2px 8px ${Colours.overlay.black08}`,
    }}
    onClick={onPress as any}
  >
    <Image source={{ uri: imageUrl }} width={size} height={size} style={{ objectFit: "cover" }} />
  </Box>
);
