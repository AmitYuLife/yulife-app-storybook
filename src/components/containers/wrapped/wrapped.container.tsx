import { useMutation, useQuery } from "@apollo/client";
import { Box } from "@atoms";
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

const WRAPPED_STAGES: ((props: IWrappedStageProps) => ReactNode)[] = [
  WrappedStagingScreen,
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
  const [stageIndex, setStageIndex] = useState<number>(0);
  const dispatch = useDispatch();
  const { data, loading } = useQuery(gql("GetMobileUserWrappedDocument"), {
    fetchPolicy: "network-only",
    variables: { wrappedId },
  });
  const [markMobileUserWrappedAsViewed] = useMutation(gql("MarkMobileUserWrappedAsViewedDocument"));

  const nextStage = useCallback(() => {
    const nextIndex = stageIndex + 1;
    if (nextIndex === 1) {
      markMobileUserWrappedAsViewed({ variables: { wrappedId } });
    }

    dispatch(
      logMixpanelEventActionCreator("wrapped_screen_view", {
        screen: stageIndex,
        wrappedId,
      })
    );
    if (nextIndex < WRAPPED_STAGES.length) {
      setStageIndex(nextIndex);
      return;
    }

    setStageIndex(0);
  }, [dispatch, markMobileUserWrappedAsViewed, stageIndex, wrappedId]);

  const CurrentStage = WRAPPED_STAGES?.[stageIndex];
  if (!data?.getMobileUserWrapped || loading) {
    return null;
  }

  return <Box>{CurrentStage ? <CurrentStage nextStage={nextStage} stats={data?.getMobileUserWrapped} /> : null}</Box>;
};

export default memo(WrappedContainer);
