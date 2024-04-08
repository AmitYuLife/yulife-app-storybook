import React from "react";
import { useQuery } from "@apollo/client";
import { SduiScreen } from "@components/screens";
import { JourneyLayout } from "./journey.layout";
import { SduiProvider } from "@components/sdui/_context/SduiProvider";
import { gql } from "@graphql/__generated";

interface JourneyContainerProps {
  journeyId: string;
  dynamicId?: string;
}

const JourneyContainer = ({ journeyId, dynamicId }: JourneyContainerProps) => {
  const { data } = useQuery(gql("GetSduiJourneyDocument"), {
    variables: {
      journeyId,
      dynamicId,
    },
    fetchPolicy: "no-cache",
  });

  return (
    <JourneyLayout isLoading={!data?.getSduiJourney}>
      <SduiProvider isLoading={!data?.getSduiJourney}>
        <SduiScreen {...(data?.getSduiJourney || {})} />
      </SduiProvider>
    </JourneyLayout>
  );
};

export default JourneyContainer;
