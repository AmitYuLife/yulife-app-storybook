import moment from "moment";
import React, { useEffect } from "react";
import { Alert } from "react-native";
import Config from "react-native-config";
import Intercom from "@intercom/intercom-react-native";
import { connect } from "react-redux";
import { GetAllPurchases_getAllPurchases } from "@graphql/_core/schema";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { AviosRewardConfirmedScreen } from "@screens";
import { handleLinkPress } from "@services/app-link";

interface IProps {
  componentId: string;
  purchase: GetAllPurchases_getAllPurchases;
  onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & ConnectedState;

const AviosRewardConfirmedContainer = ({
  onTabChange,
  componentId,
  copy,
  purchase: {
    name,
    status,
    createdAt,
    amount,
    metadata: {
      avios: { loyaltyProgramme },
    },
  },
}: Props) => {
  const purchaseDate = moment(new Date(createdAt).toISOString()).format("DD MMM YYYY");

  const showIntercom = () => {
    Intercom.displayMessenger();
  };

  const openRewardsPolicy = handleLinkPress(Config.REWARDS_POLICY_URL);

  const goBack = async () => {
    await onTabChange("purchases", componentId);
  };

  const goToRewards = async () => {
    await onTabChange("rewards", componentId);
  };

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

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "purchases"),
});

export default connect<ConnectedState>(mapStateToProps)(AviosRewardConfirmedContainer);
