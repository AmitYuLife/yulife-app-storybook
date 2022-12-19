import moment from "moment";
import React, { useCallback, useEffect } from "react";
import { Alert } from "react-native";
import Intercom from "@intercom/intercom-react-native";
import { GetAllPurchases_getAllPurchases } from "@graphql/_core/schema";
import { AviosRewardConfirmedScreen } from "@screens";
import { handleLinkPress } from "@services/app-link";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import region from "@services/region";
import { t } from "@locale";

interface IProps {
  shouldPopToRoot?: boolean;
  componentId: string;
  purchase: GetAllPurchases_getAllPurchases;
}

const AviosRewardConfirmedContainer = ({
  componentId,
  shouldPopToRoot,
  purchase: {
    name,
    status,
    createdAt,
    amount,
    metadata: {
      avios: { loyaltyProgramme },
    },
  },
}: IProps) => {
  const purchaseDate = moment(new Date(createdAt).toISOString()).format(t("format.date_readable"));

  const showIntercom = useCallback(() => {
    Intercom.displayMessenger();
  }, []);

  const openRewardsPolicy = handleLinkPress(region.getConfig("urls").rewardsPolicy);

  const goToRewards = useCallback(() => Navigation.popToRoot(ROUTES.rewards), []);

  const goBack = useCallback(async () => {
    if (shouldPopToRoot) {
      return goToRewards();
    }

    return Navigation.pop(componentId);
  }, [componentId, shouldPopToRoot]);

  useEffect(() => {
    if (status === "pending") {
      Alert.alert(
        t("screens.rewards.purchases.avios_confirmed.title"),
        t("screens.rewards.purchases.avios_confirmed.message", { amount }),
        [
          {
            style: "cancel",
            text: t("screens.rewards.purchases.avios_confirmed.cancel_button_text"),
          },
        ]
      );
    }
  }, [status, amount]);

  return (
    <AviosRewardConfirmedScreen
      rewardName={name}
      status={status}
      purchaseDate={purchaseDate}
      loyaltyProgramme={loyaltyProgramme}
      onPressCancel={goToRewards}
      onPressConfirm={showIntercom}
      onPressPolicy={openRewardsPolicy}
      onPressTopBar={goBack}
    />
  );
};

export default AviosRewardConfirmedContainer;
