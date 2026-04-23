import React, { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import { useMutation, useQuery } from "@apollo/client";
import { PerkSubscriptionInfoLoadingScreen, PerkSubscriptionInfoScreen } from "@components/screens";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import Logger from "@services/logger/logger";
import { gql } from "@graphql/__generated";

interface Props {
  componentId: string;
  perkId: string;
}

const PerkSubscriptionInfoContainer = ({ componentId, perkId }: Props) => {
  const [subscribeToPerk, { loading: submitLoading }] = useMutation(gql("SubscribeToPerkDocument"));
  const { data, loading } = useQuery(gql("GetPerkSubscriptionInfoDocument"), {
    variables: { perkId },
    fetchPolicy: "no-cache",
  });

  const onSubmit = useCallback(async (formValues: Record<string, string>) => {
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
      Logger.notify(error, { file: "perk-subscription-info.container" });
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
