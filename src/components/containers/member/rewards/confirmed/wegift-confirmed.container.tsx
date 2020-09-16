import moment from "moment";
import { Component } from "react";
import * as React from "react";
import { Clipboard } from "react-native";
import Config from "react-native-config";
import { GetAllPurchases_getAllPurchases } from "../../../../../graphql/_core/schema";
import { WegiftRewardConfirmedScreen } from "../../../../screens";
import { handleOpenWebView } from "@navigation/utils";

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
    const { isAccessingUrl } = this.state;
    const purchaseDate = moment(new Date(createdAt).toISOString()).format("DD MMM YYYY");
    const validDate = moment(new Date(expiry_date).toISOString()).format("DD MMM YYYY");

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

  public openPDFs = (pdf: "policy" | "terms") => async () => {
    const data =
      pdf === "policy"
        ? {
            uri: Config.REWARDS_POLICY_URL,
            title: "Rewards Policy",
          }
        : {
            uri: this.props.purchase.reward.terms_and_conditions_url,
            title: "T&Cs",
          };

    handleOpenWebView(data);
  };

  public linkToUrl = async () => {
    try {
      this.setState({ isAccessingUrl: true });
      const uri = this.props.purchase.delivery_url;

      handleOpenWebView({ uri, title: "Wegift" });
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
