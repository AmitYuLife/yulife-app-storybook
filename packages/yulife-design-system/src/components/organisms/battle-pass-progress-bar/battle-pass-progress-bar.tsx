import { Colours } from "../../../tokens/colours";
import { Text } from "../../text";
import { Image } from "../../image";
import { Box } from "../../box";

export interface IBattlePassProgressBarProps {
  level: number;
  step: number;
  steps: number;
  status?: string;
  backgroundColor?: string;
  fillColor?: string;
  icon?: string;
}

export const BattlePassProgressBar = ({
  level,
  step,
  steps,
  backgroundColor = "#EFF0FA",
  fillColor = Colours.primary.p600,
  icon,
}: IBattlePassProgressBarProps) => {
  const pct = steps > 0 ? Math.min((step / steps) * 100, 100) : 0;

  return (
    <Box flexDirection="row" alignItems="center" gap={10} ph={16} pv={8}>
      {icon ? <Image source={{ uri: icon }} width={24} height={24} borderRadius={12} /> : null}
      <Box style={{ flex: 1 }}>
        <div
          style={{
            width: "100%",
            height: 10,
            borderRadius: 5,
            backgroundColor,
            overflow: "hidden",
          }}
        >
          <div style={{ width: `${pct}%`, height: "100%", borderRadius: 5, backgroundColor: fillColor }} />
        </div>
      </Box>
      <Box w={32} h={32} br={16} bg={fillColor} justifyContent="center" alignItems="center">
        <Text type="l2b" color={Colours.neutral.white} align="center">
          {level}
        </Text>
      </Box>
    </Box>
  );
};
