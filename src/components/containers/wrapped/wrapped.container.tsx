import { Box } from "@atoms";
import { ReactNode, memo, useCallback, useState } from "react";
import WrappedStage1Screen from "./stages/wrapped-stage-1/wrapped-stage-1.screen";
import { IWrappedStageProps } from "./wrapped.types";
import WrappedStagingScreen from "./stages/wrapped-staging/wrapped-staging.screen";
import { FAKE_STATS } from "./wrapped.constants";
import WrappedStage2Screen from "./stages/wrapped-stage-2/wrapped-stage-2.screen";
import WrappedStage3Screen from "./stages/wrapped-stage-3/wrapped-stage-3.screen";
import WrappedStage4Screen from "./stages/wrapped-stage-4/wrapped-stage-4.screen";
import WrappedEndingScreen from "./stages/wrapped-ending/wrapped-ending.screen";
import { Pressable } from "@components/molecules";

const WRAPPED_STAGES: ((props: IWrappedStageProps) => ReactNode)[] = [
  WrappedStagingScreen,
  WrappedStage1Screen,
  WrappedStage2Screen,
  WrappedStage3Screen,
  WrappedStage4Screen,
  WrappedEndingScreen,
];

const WrappedContainer = () => {
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [shouldRender, setShouldRender] = useState<boolean>(true);

  const reset = () => {
    setShouldRender(false);

    setTimeout(() => {
      setShouldRender(true);
    }, 500);
  };

  const nextStage = useCallback(() => {
    const nextIndex = stageIndex + 1;
    if (nextIndex < WRAPPED_STAGES.length) {
      setStageIndex(nextIndex);
      return;
    }

    setStageIndex(0);
  }, [stageIndex]);

  const CurrentStage = WRAPPED_STAGES?.[stageIndex];
  return (
    <Box>
      {CurrentStage ? (
        <Pressable onPress={reset}>
          {shouldRender ? <CurrentStage nextStage={nextStage} stats={FAKE_STATS} /> : null}
        </Pressable>
      ) : null}
    </Box>
  );
};

export default memo(WrappedContainer);
