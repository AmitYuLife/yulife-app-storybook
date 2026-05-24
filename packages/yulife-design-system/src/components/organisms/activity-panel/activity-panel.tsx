import { Box } from "../../box";
import { Text } from "../../text";
import { Image } from "../../image";
import { Colours } from "../../../tokens/colours";

export interface IActivityPanelProps {
  title: string;
  milestone: string;
  rewardText: string;
  icon: { uri?: string; id: string };
  isPoweredUp?: boolean;
}

export const ActivityPanel = ({ title, milestone, rewardText, icon, isPoweredUp }: IActivityPanelProps) => (
  <Box
    pv={16}
    ph={16}
    br={12}
    borderWidth={1}
    borderColor={isPoweredUp ? Colours.primary.p300 : Colours.neutral.n150}
    bg={isPoweredUp ? Colours.primary.p20 : Colours.neutral.white}
    flexDirection="row"
    alignItems="center"
    gap={12}
  >
    {icon.uri ? (
      <Box br={24} overflow="hidden" w={48} h={48} justifyContent="center" alignItems="center">
        <Image source={{ uri: icon.uri }} width={48} height={48} />
      </Box>
    ) : null}
    <Box flexDirection="column" gap={2} style={{ flex: 1 }}>
      <Text type="b2b" color={Colours.neutral.n900}>
        {title}
      </Text>
      <Text type="l1" color={Colours.neutral.n700}>
        {milestone}
      </Text>
      <Text type="l1" color={isPoweredUp ? Colours.primary.p600 : Colours.neutral.n700}>
        Up to {rewardText} YuCoins
      </Text>
    </Box>
    {isPoweredUp ? (
      <Box bg={Colours.primary.p600} br={12} ph={8} pv={4}>
        <Text type="l2b" color={Colours.neutral.white}>
          Powered up
        </Text>
      </Box>
    ) : null}
  </Box>
);
