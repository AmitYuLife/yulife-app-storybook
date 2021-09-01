import * as React from "react";
import { ScrollView, View } from "react-native";
import { Style } from "@styles";
import { Pad, Text } from "@atoms";
import { RewardItemContent } from "@molecules";
import styles from "./avios-confirmed.screen.styles";
import CardStates from "./card-states";
import { TopBarLeftIconTypes } from "@components/organisms/top-bar/top-bar.helpers";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

export type PurchaseStatus = "pending" | "failed" | "delivered";

export interface IServerProps {
  rewardName: string;
  purchaseDate: string;
  loyaltyProgramme: string;
  status: PurchaseStatus | string;
}

interface IContainerProps {
  onPressCancel: () => void;
  onPressConfirm?: () => void;
  onPressPolicy: () => void;
  onPressTopBar: () => void;
}

type Props = IServerProps & IContainerProps;

const RewardsConfirmedScreen = ({
  onPressCancel,
  onPressConfirm,
  onPressPolicy,
  onPressTopBar,
  rewardName = "",
  purchaseDate = "",
  status,
  loyaltyProgramme = "",
}: Props) => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapper}
        contentContainerStyle={styles.contentWrapper}
      >
        <Pad height={Style.isShortToMediumAndroid() ? 0 : 14} />
        {status === "delivered" ? CardStates.Delivered : status === "failed" ? CardStates.Failed : CardStates.Pending}

        <View style={styles.rewardNameWrapper}>
          <Text style={styles.rewardName} bold={true}>
            {rewardName}
          </Text>
          <Text style={styles.loyaltyProgramme}>{loyaltyProgramme}</Text>
        </View>

        <View style={styles.divider} />
        <View style={styles.dateRowWrapper}>
          <View style={styles.dateLabelWrapper}>
            <Text style={styles.textSizeDefault}>Purchased date</Text>
          </View>
          <View style={styles.dateWrapper}>
            <Text style={styles.textSizeDefault}>{purchaseDate}</Text>
          </View>
        </View>
        <Pad height={Style.isShortToMediumAndroid() ? 0 : 50} />
        <RewardItemContent
          onPressCtaPrimary={onPressCancel}
          labelCtaPrimary="see other rewards"
          onPressCtaSecondary={onPressConfirm}
          labelCtaSecondary="need help? talk to us"
          onPressCtaTertiary={onPressPolicy}
          labelCtaTertiary="Rewards policy"
        />
        <Pad height={50} />
      </ScrollView>
      <TopBarAbsolute
        hasShadow={true}
        hasWhiteBackground={true}
        leftIcon={TopBarLeftIconTypes.BACK}
        onPressLeftIcon={onPressTopBar}
      />
    </>
  );
};

export default RewardsConfirmedScreen;
