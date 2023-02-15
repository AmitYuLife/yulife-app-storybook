import * as React from "react";
import { ActivityIndicator, Image, ScrollView, View } from "react-native";
import { Pad, Text } from "@atoms";
import { RewardItemContent } from "@molecules";
import styles from "./wegift-confirmed.screen.styles";
import { WEGIFT_CONFIRMED, PURCHASE_IMAGE } from "@ids";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { t } from "@locale";
export interface IServerProps {
  rewardName: string;
  redeemInstructions: string[];
  description: string;
  purchaseDate: string;
  validDate: string;
  imageUrl: string;
}

interface IContainerProps {
  isLoadingConfirmAction: boolean;
  onPressCancel: () => void;
  onPressConfirm: () => void;
  onPressTerms: () => void;
  onPressPolicy: () => void;
  onPressTopBar: () => void;
}

type Props = IServerProps & IContainerProps;

interface IState {
  hasLoaded: boolean;
}

class WegiftRewardsConfirmed extends React.PureComponent<Props, IState> {
  public state = {
    hasLoaded: false,
  };

  public render() {
    const {
      onPressCancel,
      onPressConfirm,
      onPressTerms,
      onPressPolicy,
      onPressTopBar,
      rewardName,
      redeemInstructions = [],
      description,
      purchaseDate,
      validDate,
      imageUrl,
      isLoadingConfirmAction,
    } = this.props;
    const { hasLoaded } = this.state;
    return (
      <View style={styles.wrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.wrapper}
          contentContainerStyle={styles.contentWrapper}
          testID={WEGIFT_CONFIRMED}
        >
          <View style={styles.imageWrapper}>
            <Image
              testID={PURCHASE_IMAGE(imageUrl)}
              onLoad={this.handleLoadImage}
              style={styles.image}
              source={
                imageUrl ? { uri: imageUrl } : require("../../../../../../assets/rewards-confirmed/delivered.png")
              }
            />
            <ActivityIndicator animating={!hasLoaded} style={styles.activityIndicator} />
          </View>
          <View style={styles.rewardNameWrapper}>
            <Text style={styles.rewardName} bold={true}>
              {rewardName}
            </Text>
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
          {validDate ? (
            <View style={styles.dateRowWrapper}>
              <View style={styles.dateLabelWrapper}>
                <Text style={styles.textSizeDefault}>{t("screens.rewards.confirmed.valid_until")}</Text>
              </View>
              <View style={styles.dateWrapper}>
                <Text style={styles.textSizeDefault}>{validDate}</Text>
              </View>
            </View>
          ) : null}
          <RewardItemContent
            description={description}
            instructions={redeemInstructions}
            onPressCtaPrimary={onPressCancel}
            labelCtaPrimary={t("screens.rewards.confirmed.label_cta.other_rewards")}
            onPressCtaSecondary={onPressConfirm}
            labelCtaSecondary={t("screens.rewards.confirmed.label_cta.get_voucher")}
            onPressTerms={onPressTerms}
            onPressPolicy={onPressPolicy}
            isLoadingSecondary={isLoadingConfirmAction}
          />
          <Pad height={50} />
        </ScrollView>
        <TopBarAbsolute
          hasWhiteBackground={true}
          hasShadow={true}
          leftIcon={LeftIcon.BACK}
          onPressLeftIcon={onPressTopBar}
        />
      </View>
    );
  }

  private handleLoadImage = () => {
    this.setState({ hasLoaded: true });
  };
}

export default WegiftRewardsConfirmed;
