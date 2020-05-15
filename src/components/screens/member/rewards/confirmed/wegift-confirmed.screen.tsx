import * as React from "react";
import { ActivityIndicator, Image, SafeAreaView, ScrollView, View } from "react-native";
import { Pad, Text } from "../../../../atoms";
import { RewardItemContent, TopBar } from "../../../../molecules";
import styles from "./wegift-confirmed.screen.styles";
import { WEGIFT_CONFIRMED, PURCHASE_IMAGE } from "@ids";
export interface IServerProps {
  rewardName: string;
  redeemInstructions: string[];
  description: string;
  purchaseDate: string;
  validDate: string;
  imageUrl: string;
  coins: number;
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
      coins,
      isLoadingConfirmAction,
    } = this.props;
    const { hasLoaded } = this.state;
    return (
      <SafeAreaView style={styles.wrapper}>
        <TopBar leftIcon={TopBar.LeftIcon.BACK} onPressLeftIcon={onPressTopBar} coins={coins} />
        <Pad height={10} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper} contentContainerStyle={styles.contentWrapper} testID={WEGIFT_CONFIRMED}>
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
              <Text style={styles.textSizeDefault}>Purchased date</Text>
            </View>
            <View style={styles.dateWrapper}>
              <Text style={styles.textSizeDefault}>{purchaseDate}</Text>
            </View>
          </View>
          <View style={styles.dateRowWrapper}>
            <View style={styles.dateLabelWrapper}>
              <Text style={styles.textSizeDefault}>Valid date</Text>
            </View>
            <View style={styles.dateWrapper}>
              <Text style={styles.textSizeDefault}>{validDate}</Text>
            </View>
          </View>
          <RewardItemContent
            description={description}
            instructions={redeemInstructions}
            onPressCtaPrimary={onPressCancel}
            labelCtaPrimary="see other rewards"
            onPressCtaSecondary={onPressConfirm}
            labelCtaSecondary="get voucher"
            onPressTerms={onPressTerms}
            onPressPolicy={onPressPolicy}
            isLoadingSecondary={isLoadingConfirmAction}
          />
          <Pad height={50} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  private handleLoadImage = () => {
    this.setState({ hasLoaded: true });
  };
}

export default WegiftRewardsConfirmed;
