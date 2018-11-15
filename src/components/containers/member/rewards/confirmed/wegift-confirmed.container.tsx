import moment from "moment";
import { Component } from "react";
import * as React from "react";
import { Clipboard, Linking } from "react-native";
import Config from "react-native-config";
import { connect } from "react-redux";
import { GetAllPurchases_getAllPurchases } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { WegiftRewardConfirmedScreen } from "../../../../screens";

interface IProps {
    componentId: string;
    purchase: GetAllPurchases_getAllPurchases;
    onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

interface IConnectedState {
    totalCoins: number;
}

type Props = IProps & IConnectedState;

class WegiftRewardConfirmedContainer extends Component<Props> {
    public render() {
        const {
            totalCoins,
            purchase: {
                name,
                reward: {
                    redeem_steps: { steps },
                    card_image_url,
                    description
                },
                createdAt,
                expiry_date
            }
        } = this.props;
        const purchaseDate = moment(new Date(createdAt).toISOString()).format("DD MMM YYYY");
        const validDate = moment(new Date(expiry_date).toISOString()).format("DD MMM YYYY");

        return (
            <WegiftRewardConfirmedScreen
                rewardName={name}
                redeemInstructions={steps}
                description={description}
                purchaseDate={purchaseDate}
                validDate={validDate}
                imageUrl={card_image_url}
                coins={totalCoins}
                onPressCancel={this.goToRewards}
                onPressConfirm={this.linkToUrl}
                onPressTerms={this.openPDFs("terms")}
                onPressPolicy={this.openPDFs("policy")}
                onPressTopBar={this.goBack}
            />
        );
    }

    public copyToClipboard = async () => {
        await Clipboard.setString(this.props.purchase.delivery_url);
    }

    public openPDFs = (pdf: "policy" | "terms") => async () => {
        const url =
            pdf === "policy"
                ? `${Config.FRONTEND_URL}/static/rewardsPolicy.pdf`
                : this.props.purchase.reward.terms_and_conditions_url;
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
    }

    public linkToUrl = async () => {
        try {
            await Linking.openURL(this.props.purchase.delivery_url);
        } catch (e) {
            // console.warn("unable to open url because: ", e);
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

export default connect<IConnectedState>(mapStateToProps)(WegiftRewardConfirmedContainer);
