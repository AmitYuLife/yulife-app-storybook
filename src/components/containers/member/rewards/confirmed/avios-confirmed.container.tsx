import moment from "moment";
import * as React from "react";
import { Component } from "react";
import { Alert, Linking } from "react-native";
import Config from "react-native-config";
import Intercom from "react-native-intercom";
import { connect } from "react-redux";
import { GetAllPurchases_getAllPurchases } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getCopy } from "../../../../../redux/copy/copy.selectors";
import { AviosRewardConfirmedScreen } from "../../../../screens";

interface IProps {
  componentId: string;
  purchase: GetAllPurchases_getAllPurchases;
  onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & ConnectedState;

class AviosRewardConfirmedContainer extends Component<Props> {
  public componentDidMount() {
    const { purchase } = this.props;

    if (purchase.status === "pending") {
      this.showPendingAlert(purchase.amount);
    }
  }

  public render() {
    const {
      purchase: {
        name,
        status,
        createdAt,
        metadata: {
          avios: { loyaltyProgramme },
        },
      },
    } = this.props;
    const purchaseDate = moment(new Date(createdAt).toISOString()).format("DD MMM YYYY");

    return (
      <AviosRewardConfirmedScreen
        rewardName={name}
        status={status}
        purchaseDate={purchaseDate}
        loyaltyProgramme={loyaltyProgramme}
        onPressCancel={this.goToRewards}
        onPressConfirm={this.showIntercom}
        onPressPolicy={this.openRewardsPolicy}
        onPressTopBar={this.goBack}
      />
    );
  }

  public showIntercom = () => {
    Intercom.displayConversationsList();
  };

  public showPendingAlert = (amount: number) => {
    const { aviosConfirmed } = this.props.copy;

    Alert.alert(aviosConfirmed.title, aviosConfirmed.message.replace("${amount}", amount.toString()), [
      {
        style: "cancel",
        text: aviosConfirmed.cancelButtonText,
      },
    ]);
  };

  public openRewardsPolicy = async () => {
    const url = Config.REWARDS_POLICY_URL;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  };

  public goBack = async () => {
    await this.props.onTabChange("purchases", this.props.componentId);
  };

  public goToRewards = async () => {
    await this.props.onTabChange("rewards", this.props.componentId);
  };
}

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "purchases"),
});

export default connect<ConnectedState>(mapStateToProps)(AviosRewardConfirmedContainer);
