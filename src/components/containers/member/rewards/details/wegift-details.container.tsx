import * as React from "react";
import { Component } from "react";
import { Alert, Linking } from "react-native";
import { Config } from "react-native-config";
import { GetRewards_getRewards } from "../../../../../graphql/_core/schema";
import RedeemRewardMutation, {
    redeemRewardGql,
    RedeemRewardMutationType
} from "../../../../../graphql/rewards/redeemReward.gql";
import { Loading } from "../../../../atoms";
import { WegiftRewardDetailsScreen } from "../../../../screens";

interface IProps {
    componentId: string;
    reward: GetRewards_getRewards;
    onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

export default class WegiftRewardDetailsContainer extends Component<IProps> {
    public render() {
        const {
            reward: {
                code,
                currency_code,
                description,
                redeem_steps: { steps },
                available_denominations,
                uiSettings
            }
        } = this.props;
        const [{ yuCoin, value }] = available_denominations;
        const labelCtaPrimary = `buy with ${yuCoin} yucoin`;

        return (
            <RedeemRewardMutation mutation={redeemRewardGql}>
                {(redeemReward, { loading }) => {
                    const handleSubmit = async () => {
                        this.handleRewardPurchase(redeemReward);
                    };

                    if (loading) {
                        return <Loading />;
                    }

                    return (
                        <WegiftRewardDetailsScreen
                            uiSettings={uiSettings}
                            code={code}
                            cost={yuCoin}
                            rewardValue={value}
                            rewardCurrency={currency_code}
                            description={description}
                            instructions={steps}
                            onPressCtaPrimary={handleSubmit}
                            labelCtaPrimary={labelCtaPrimary}
                            onPressTerms={this.openPDFs("terms")}
                            onPressPolicy={this.openPDFs("policy")}
                            coins={12345}
                            onPressTopBar={this.handleRewardsPress}
                            onLeftTabPress={this.handleRewardsPress}
                            onRightTabPress={this.handlePurchasesPress}
                        />
                    );
                }}
            </RedeemRewardMutation>
        );
    }

    private handleRewardsPress = () => {
        this.props.onTabChange("rewards", this.props.componentId);
    }

    private handlePurchasesPress = () => {
        this.props.onTabChange("purchases", this.props.componentId);
    }

    private openPDFs = (pdf: "policy" | "terms") => async () => {
        const { reward } = this.props;
        const url =
            pdf === "policy" ? `${Config.FRONTEND_URL}/static/rewardsPolicy.pdf` : reward.terms_and_conditions_url;

        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
    }

    private handleRewardPurchase = (redeemReward: RedeemRewardMutationType) => {
        const { reward } = this.props;
        const [{ value, yuCoin }] = reward.available_denominations;
        Alert.alert(
            "Confirm purchase",
            `You'll purchase ${reward.name} £${value.toFixed(2)} voucher with ${yuCoin} yu coin.`,
            [
                { text: "Cancel", style: "cancel" },
                {
                    onPress: async () => {
                        await redeemReward({ variables: { id: reward.code, amount: value } });
                        // console.log("DAA SUCAAA... ", purchase);
                    },
                    text: "OK"
                }
            ]
        );
    }
}
