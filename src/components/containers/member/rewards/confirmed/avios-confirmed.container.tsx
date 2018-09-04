import moment from "moment";
import { Component } from "react";
import * as React from "react";
import { Alert, Linking } from "react-native";
import { Config } from "react-native-config";
import Intercom from "react-native-intercom";
import { connect } from "react-redux";
import { GetAllPurchases_getAllPurchases } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { AviosRewardConfirmedScreen } from "../../../../screens";

interface IProps {
    componentId: string;
    purchase: GetAllPurchases_getAllPurchases;
    onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

interface IConnectedState {
    totalCoins: number;
}

type Props = IProps & IConnectedState;

class AviosRewardConfirmedContainer extends Component<Props> {
    public componentDidMount() {
        const { purchase } = this.props;

        if (purchase.status === "pending") {
            this.showPendingAlert(purchase.amount);
        }
    }

    public render() {
        const {
            totalCoins,
            purchase: {
                name,
                status,
                createdAt,
                metadata: {
                    avios: { loyaltyProgramme }
                }
            }
        } = this.props;
        const purchaseDate = moment(new Date(createdAt).toISOString()).format("DD MMM YYYY");

        return (
            <AviosRewardConfirmedScreen
                rewardName={name}
                status={status}
                purchaseDate={purchaseDate}
                loyaltyProgramme={loyaltyProgramme}
                coins={totalCoins}
                onPressCancel={this.goToRewards}
                onPressConfirm={status === "pending" ? this.showIntercom : () => null}
                onPressPolicy={this.openRewardsPolicy}
                onPressTopBar={this.goBack}
            />
        );
    }

    public showIntercom = () => {
        Intercom.displayConversationsList();
    }

    public showPendingAlert = (amount: number) => {
        Alert.alert(
            "AVIOS Sent",
            `Your ${amount} AVIOS points will appear on your account within the next 24hrs.
 We will email you as soon as they are there.`,
            [
                {
                    style: "cancel",
                    text: "OK, got it"
                }
            ]
        );
    }

    public openRewardsPolicy = async () => {
        const url = `${Config.FRONTEND_URL}/static/rewardsPolicy.pdf`;
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
    }

    public goBack = async () => {
        await this.props.onTabChange("purchases", this.props.componentId);
    }

    public goToRewards = async () => {
        await this.props.onTabChange("rewards", this.props.componentId);
    }
}

const mapStateToProps = (state: IReduxState) => ({
    totalCoins: getTotalCoins(state)
});

export default connect<IConnectedState>(mapStateToProps)(AviosRewardConfirmedContainer);
