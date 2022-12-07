import moment from "moment";
import { Component } from "react";
import * as React from "react";
import Clipboard from "@react-native-community/clipboard";
import { GetAllPurchases_getAllPurchases } from "@graphql/_core/schema";
import { WegiftRewardConfirmedScreen } from "@screens";
import { handleLinkPress } from "@services/app-link";
import Logger from "@services/logging/logger";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import region from "@services/region";
import { t } from "@locale";

interface IProps {
  componentId: string;
  purchase: GetAllPurchases_getAllPurchases;
  shouldPopToRoot?: boolean;
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

    const purchaseDate = moment(new Date(createdAt).toISOString()).format(t("format.date_readable"));

    const validDate = expiry_date
      ? moment(new Date(expiry_date).toISOString()).format(t("format.date_readable"))
      : expiry_date_policy || null;

    return (
      <WegiftRewardConfirmedScreen
        rewardName={name}
        redeemInstructions={reward?.redeem_steps?.steps || []}
        description={reward?.description || ""}
        purchaseDate={purchaseDate}
        validDate={validDate}
        imageUrl={reward?.cardImage?.uri || ""}
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
    handleLinkPress(
      pdf === "policy" ? region.getConfig("urls").privacyPolicy : this.props.purchase.reward.terms_and_conditions_url
    );

  public linkToUrl = async () => {
    try {
      this.setState({ isAccessingUrl: true });
      const openLink = handleLinkPress(this.props.purchase.delivery_url);
      await openLink();
    } catch (e) {
      Logger.error(e, { event: "get voucher button", file: "wegift-confirmed.container" });
    } finally {
      // added a timeout to just show loader for a few seconds
      setTimeout(() => {
        this.setState({ isAccessingUrl: false });
      }, 500);
    }
  };

  public goBack = () => {
    const { componentId, shouldPopToRoot } = this.props;

    if (shouldPopToRoot) {
      return this.goToRewards();
    }

    return Navigation.pop(componentId);
  };

  public goToRewards = () => Navigation.popToRoot(ROUTES.rewards);
}

export default WegiftRewardConfirmedContainer;
