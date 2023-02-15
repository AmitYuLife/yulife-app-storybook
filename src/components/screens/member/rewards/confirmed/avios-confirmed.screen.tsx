import * as React from "react";
import { ScrollView, View } from "react-native";
import { Style } from "@styles";
import { Pad, Text } from "@atoms";
import { RewardItemContent } from "@molecules";
import styles from "./avios-confirmed.screen.styles";
import CardStates from "./card-states";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { t } from "@locale";

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
        {status === "delivered"
          ? CardStates.Delivered
          : status === "failed"
            ? CardStates.Failed
            : status === "refunded"
              ? CardStates.Refunded
              : CardStates.Pending}

        <View style={styles.rewardNameWrapper}>
          <Text style={styles.rewardName} bold={true}>
            {rewardName}
          </Text>
          <Text style={styles.loyaltyProgramme}>{loyaltyProgramme}</Text>
        </View>

        <View style={styles.divider} />
        <View style={styles.dateRowWrapper}>
          <View style={styles.dateLabelWrapper}>
            <Text style={styles.textSizeDefault}>{t("screens.rewards.confirmed.purchased_date")}</Text>
          </View>
          <View style={styles.dateWrapper}>
            <Text style={styles.textSizeDefault}>{purchaseDate}</Text>
          </View>
        </View>
        <Pad height={Style.isShortToMediumAndroid() ? 0 : 50} />
        <RewardItemContent
          onPressCtaPrimary={onPressCancel}
          labelCtaPrimary={t("screens.rewards.confirmed.label_cta.other_rewards")}
          onPressCtaSecondary={onPressConfirm}
          labelCtaSecondary={t("screens.rewards.confirmed.label_cta.need_help")}
          onPressCtaTertiary={onPressPolicy}
          labelCtaTertiary={t("screens.rewards.confirmed.label_cta.rewards_policy")}
        />
        <Pad height={50} />
      </ScrollView>
      <TopBarAbsolute
        hasShadow={true}
        hasWhiteBackground={true}
        leftIcon={LeftIcon.BACK}
        onPressLeftIcon={onPressTopBar}
      />
    </>
  );
};

export default RewardsConfirmedScreen;
