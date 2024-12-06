import { Box } from "@atoms";
import { ReactNode, memo, useCallback, useState } from "react";
import WrappedStage1Screen from "./stages/wrapped-stage-1/wrapped-stage-1.screen";
import { IWrappedStageProps } from "./wrapped.types";
import WrappedStagingScreen from "./stages/wrapped-staging/wrapped-staging.screen";
import { FAKE_STATS } from "./wrapped.constants";

const WRAPPED_STAGES: ((props: IWrappedStageProps) => ReactNode)[] = [WrappedStagingScreen, WrappedStage1Screen];

const WrappedContainer = () => {
  const [stageIndex, setStageIndex] = useState<number>(0);

  const nextStage = useCallback(() => {
    const nextIndex = stageIndex + 1;
    if (nextIndex < WRAPPED_STAGES.length) {
      setStageIndex(nextIndex);
      return;
    }

    setStageIndex(0);
  }, [stageIndex]);

  const CurrentStage = WRAPPED_STAGES?.[stageIndex];
  return <Box>{CurrentStage ? <CurrentStage nextStage={nextStage} stats={FAKE_STATS} /> : null}</Box>;
};

export default memo(WrappedContainer);
