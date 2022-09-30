import React, { memo, useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { useMutation, useQuery } from "@apollo/client";
import { GQL_QUERY_GET_PERK_SUBSCRIPTION_INFO } from "@graphql/perks/getPerkSubscriptionInfo.gql";
import { GetPerkSubscriptionInfo } from "@graphql/_core/schema";
import { PerkSubscriptionInfoLoadingScreen, PerkSubscriptionInfoScreen } from "@components/screens";
import { GQL_MUTATION_SUBSCRIBE_TO_PERK, SubscribeToPerkMutationTuple } from "@graphql/perks/subscribeToPerk.gql";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import Logger from "@services/logging/logger";

interface Props {
  componentId: string;
  perkId: string;
}

const PerkSubscriptionInfoContainer = ({ componentId, perkId }: Props) => {
  const [subscribeToPerk, { loading: submitLoading }]: SubscribeToPerkMutationTuple = useMutation(
    GQL_MUTATION_SUBSCRIBE_TO_PERK
  );
  const { data, loading } = useQuery<GetPerkSubscriptionInfo>(GQL_QUERY_GET_PERK_SUBSCRIPTION_INFO, {
    variables: { perkId },
    fetchPolicy: "no-cache",
  });

  const onSubmit = useCallback(async (formValues) => {
    const perkFields = Object.keys(formValues).map((key) => ({
      key,
      value: formValues[key],
    }));

    try {
      const {
        data: { subscribeToPerk: subscribeToPerkResponse },
      } = await subscribeToPerk({ variables: { perkId, perkFields } });
      showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            heading: subscribeToPerkResponse.title,
            subheading: subscribeToPerkResponse.description,
            ctaLabelSecondary: subscribeToPerkResponse.buttonLabel,
            onPressSecondary: () => Navigation.dismissModal(MODALS.generic),
          },
        },
      });
    } catch (error) {
      Logger.error(error, { file: "perk-subscription-info.container" });
    }
  }, []);

  const handleBack = useCallback(() => Navigation.pop(componentId), [componentId]);

  if (loading) {
    return <PerkSubscriptionInfoLoadingScreen handleBack={handleBack} />;
  }

  return (
    <PerkSubscriptionInfoScreen
      handleBack={handleBack}
      item={data?.getPerkSubscriptionInfo}
      onSubmit={onSubmit}
      loading={submitLoading}
    />
  );
};

export default memo(PerkSubscriptionInfoContainer);
