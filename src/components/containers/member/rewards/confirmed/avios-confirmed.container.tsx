import moment from "moment";
import React, { useCallback, useEffect } from "react";
import { Alert } from "react-native";
import Intercom from "@intercom/intercom-react-native";
import { useSelector } from "react-redux";
import { GetAllPurchases_getAllPurchases } from "@graphql/_core/schema";
import { getPurchasesCopy } from "@redux/copy/copy.selectors";
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
  const copy = useSelector(getPurchasesCopy);
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
      const { aviosConfirmed } = copy;
      Alert.alert(aviosConfirmed.title, aviosConfirmed.message.replace("${amount}", amount.toString()), [
        {
          style: "cancel",
          text: aviosConfirmed.cancelButtonText,
        },
      ]);
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
