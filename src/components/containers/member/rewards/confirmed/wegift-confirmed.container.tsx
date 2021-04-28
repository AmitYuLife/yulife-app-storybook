import moment from "moment";
import { Component } from "react";
import * as React from "react";
import Clipboard from "@react-native-community/clipboard";
import Config from "react-native-config";
import { GetAllPurchases_getAllPurchases } from "../../../../../graphql/_core/schema";
import { WegiftRewardConfirmedScreen } from "../../../../screens";
import { handleLinkPress } from "@services/app-link";

interface IProps {
  componentId: string;
  purchase: GetAllPurchases_getAllPurchases;
  onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

interface IState {
  isAccessingUrl: boolean;
}

class WegiftRewardConfirmedContainer extends Component<IProps, IState> {
  public state = {
    isAccessingUrl: false,
  };

  public render() {
    const {
      purchase: { name, reward, createdAt, expiry_date },
    } = this.props;
    const { expiry_date_policy } = reward;

    const { isAccessingUrl } = this.state;

    const purchaseDate = moment(new Date(createdAt).toISOString()).format("DD MMM YYYY");

    const validDate = expiry_date
      ? moment(new Date(expiry_date).toISOString()).format("DD MMM YYYY")
      : expiry_date_policy || null;

    return (
      <WegiftRewardConfirmedScreen
        rewardName={name}
        redeemInstructions={(reward && reward.redeem_steps.steps) || []}
        description={(reward && reward.description) || ""}
        purchaseDate={purchaseDate}
        validDate={validDate}
        imageUrl={(reward && reward.card_image_url) || ""}
        onPressCancel={this.goToRewards}
        onPressConfirm={this.linkToUrl}
        isLoadingConfirmAction={isAccessingUrl}
        onPressTerms={this.openPDFs("terms")}
        onPressPolicy={this.openPDFs("policy")}
        onPressTopBar={this.goBack}
      />
    );
  }

  public copyToClipboard = async () => Clipboard.setString(this.props.purchase.delivery_url);

  public openPDFs = (pdf: "policy" | "terms") =>
    handleLinkPress(pdf === "policy" ? Config.REWARDS_POLICY_URL : this.props.purchase.reward.terms_and_conditions_url);

  public linkToUrl = async () => {
    try {
      this.setState({ isAccessingUrl: true });
      const openLink = handleLinkPress(this.props.purchase.delivery_url);
      await openLink();
    } catch (e) {
      // console.warn("unable to open url because: ", e);
    } finally {
      // added a timeout to just show loader for a few seconds
      setTimeout(() => {
        this.setState({ isAccessingUrl: false });
      }, 500);
    }
  };

  public goBack = async () => {
    await this.props.onTabChange("purchases", this.props.componentId);
  };

  public goToRewards = async () => {
    await this.props.onTabChange("rewards", this.props.componentId);
  };
}

export default WegiftRewardConfirmedContainer;
