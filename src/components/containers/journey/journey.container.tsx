import React from "react";
import { useQuery } from "@apollo/client";
import { SduiScreen } from "@components/screens";
import { GQL_QUERY_GET_SDUI_JOURNEY } from "@graphql/journey";
import { GetSduiJourney, GetSduiJourneyVariables } from "@graphql/_core/schema";
import { JourneyLayout } from "./journey.layout";

interface JourneyContainerProps {
  journeyId: string;
}

const JourneyContainer = ({ journeyId }: JourneyContainerProps) => {
  const { data, loading } = useQuery<GetSduiJourney, GetSduiJourneyVariables>(GQL_QUERY_GET_SDUI_JOURNEY, {
    variables: {
      journeyId,
    },
    fetchPolicy: "no-cache",
  });

  return (
    <JourneyLayout isLoading={!data?.getSduiJourney}>
      <SduiScreen isLoading={loading} {...(data?.getSduiJourney || {})} />
    </JourneyLayout>
  );
};

export default JourneyContainer;
