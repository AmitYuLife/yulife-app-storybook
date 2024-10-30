import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { SduiScreen } from "@components/screens";
import { JourneyLayout } from "./journey.layout";
import { SduiProvider } from "@components/sdui/_context/SduiProvider";
import { gql } from "@graphql/__generated";
import { useDispatch, useSelector } from "react-redux";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { setLoadingState } from "@redux/server-driven-ui/sdui.actions";

interface JourneyContainerProps {
  journeyId: string;
  dynamicId?: string;
}

const JourneyContainer = ({ journeyId, dynamicId }: JourneyContainerProps) => {
  const [stepId, setStepId] = useState<string | null>(null);
  const isLoading = useSelector(getSduiLoadingForKey("__disabled"));
  const dispatch = useDispatch();
  const { data } = useQuery(gql("GetSduiJourneyDocument"), {
    variables: {
      journeyId,
      dynamicId,
    },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (stepId !== data?.getSduiJourney?.stepId) {
      setStepId(data?.getSduiJourney?.stepId);
      dispatch(setLoadingState({ __disabled: false }));
    }
  }, [data]);

  return (
    <JourneyLayout isLoading={!data?.getSduiJourney}>
      <SduiProvider id={data?.getSduiJourney?.stepId} isLoading={isLoading}>
        <SduiScreen {...(data?.getSduiJourney || {})} />
      </SduiProvider>
    </JourneyLayout>
  );
};

export default JourneyContainer;
