import React from "react";
import { useQuery } from "@apollo/client";
import { SduiScreen } from "@components/screens";
import { GQL_QUERY_GET_SDUI_JOURNEY } from "@graphql/journey";
import { JourneyLayout } from "./journey.layout";
import { SduiProvider } from "@components/sdui/_context/SduiProvider";

interface JourneyContainerProps {
  journeyId: string;
  dynamicId?: string;
}

const JourneyContainer = ({ journeyId, dynamicId }: JourneyContainerProps) => {
  const { data } = useQuery(GQL_QUERY_GET_SDUI_JOURNEY, {
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
