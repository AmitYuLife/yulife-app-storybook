import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { FC, ReactNode, memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import WrappedEndingScreen from "./stages/wrapped-ending/wrapped-ending.screen";
import WrappedStage1Screen from "./stages/wrapped-stage-1/wrapped-stage-1.screen";
import WrappedStage2Screen from "./stages/wrapped-stage-2/wrapped-stage-2.screen";
import WrappedStage3Screen from "./stages/wrapped-stage-3/wrapped-stage-3.screen";
import WrappedStage4Screen from "./stages/wrapped-stage-4/wrapped-stage-4.screen";
import WrappedStagingScreen from "./stages/wrapped-staging/wrapped-staging.screen";
import { IWrappedStageProps } from "./wrapped.types";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Box } from "@atoms";

const WRAPPED_STAGES: ((props: IWrappedStageProps) => ReactNode)[] = [
  WrappedStage1Screen,
  WrappedStage2Screen,
  WrappedStage3Screen,
  WrappedStage4Screen,
  WrappedEndingScreen,
];

interface IProps {
  wrappedId: string;
}

const WrappedContainer: FC<IProps> = ({ wrappedId }: IProps) => {
  const dispatch = useDispatch();
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [markMobileUserWrappedAsViewed, { loading: isMarkLoading }] = useMutation(
    gql("MarkMobileUserWrappedAsViewedDocument")
  );
  const {
    data,
    loading: isLoading,
    error,
  } = useQuery(gql("GetMobileUserWrappedDocument"), {
    fetchPolicy: "network-only",
    variables: { wrappedId },
  });

  const onBack = useCallback(() => {
    Navigation.pop(ROUTES.wrapped);
  }, []);

  const nextStage = useCallback(() => {
    let nextIndex = stageIndex + 1;

    // Yudoku stage
    if (nextIndex === 4) {
      const { totalYudokus, bestYudokuTime, totalYudokuTime } = data?.getMobileUserWrapped || {};
      // If we don't have the stats, skip the stage
      if (!totalYudokus || !bestYudokuTime || !totalYudokuTime) {
        nextIndex++;
      }
    }

    dispatch(
      logMixpanelEventActionCreator("wrapped_screen_view", {
        screen: stageIndex,
        wrappedId,
      })
    );

    if (nextIndex < WRAPPED_STAGES.length + 1) {
      setStageIndex(nextIndex);
      return;
    }

    onBack();
  }, [data?.getMobileUserWrapped, dispatch, onBack, stageIndex, wrappedId]);

  const onStartPress = useCallback(() => {
    markMobileUserWrappedAsViewed({ variables: { wrappedId } });
  }, [markMobileUserWrappedAsViewed, wrappedId]);

  const CurrentStage = WRAPPED_STAGES?.[stageIndex - 1];

  if (!data?.getMobileUserWrapped || isLoading || stageIndex === 0) {
    return (
      <WrappedStagingScreen
        onBack={onBack}
        isError={!!error}
        onAnimationEnd={nextStage}
        onStartPress={onStartPress}
        isLoading={isLoading || isMarkLoading}
        wrappedLogo={data?.getMobileUserWrapped?.wrappedLogo}
      />
    );
  }

  return <Box>{CurrentStage ? <CurrentStage nextStage={nextStage} stats={data?.getMobileUserWrapped} /> : null}</Box>;
};

export default memo(WrappedContainer);
