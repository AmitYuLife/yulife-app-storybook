import { memo } from "react";
import { Box } from "@atoms";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { Colours } from "@styles";
import SmokingStatsEntry from "./smoking-stats-entry";

type Props = {
  smokingState: HealthSmokingState;
  width: number;
  animated: boolean;
};

const SmokingStatsCard = ({ smokingState, width, animated }: Props) => {
  return (
    <Box pv={16} ph={20} w={width} gap={16} bg={Colours.neutral.white} br={8} withBorder={Colours.neutral.n150}>
      <SmokingStatsEntry {...smokingState.totalAvoided} animated={animated} />
      <SmokingStatsEntry {...smokingState.totalSaved} animated={animated} />
    </Box>
  );
};

export default memo(SmokingStatsCard);
