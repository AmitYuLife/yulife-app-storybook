import React, { useCallback } from "react";
import { WellbeingHubDetailsScreen } from "@components/screens/wellbeing-hub/wellbeing-hub-details.screen";
import { WellbeingHubDetailsLoading } from "@components/screens/wellbeing-hub/wellbeing-hub-details-loading.screen";
import { Navigation } from "@navigation/main";
import { GQL_QUERY_GET_WELLBEING_HUB_DETAILS } from "@graphql/wellbeingHub";
import { GetWellbeingHubItem } from "@graphql/_core/schema";
import { useQuery } from "@apollo/client";
import { Platform } from "react-native";

interface Props {
  componentId: string;
  itemId: string;
}

const WellbeingHubDetailsContainer = ({ componentId, itemId }: Props) => {
  const { data, loading } = useQuery<GetWellbeingHubItem>(GQL_QUERY_GET_WELLBEING_HUB_DETAILS, {
    variables: { id: itemId, os: Platform.OS },
    fetchPolicy: "no-cache",
  });

  const handleBack = useCallback(() => Navigation.pop(componentId), [componentId]);

  if (loading) {
    return <WellbeingHubDetailsLoading handleBack={handleBack} />;
  }

  return <WellbeingHubDetailsScreen handleBack={handleBack} item={data?.wellbeingHubItem} />;
};

export default WellbeingHubDetailsContainer;
