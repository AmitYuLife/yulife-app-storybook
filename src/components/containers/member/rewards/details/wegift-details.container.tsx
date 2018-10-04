import * as React from "react";
import { Component } from "react";
import { Alert, Linking } from "react-native";
import Config from "react-native-config";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetRewards_getRewards, RedeemReward } from "../../../../../graphql/_core/schema";
import RedeemRewardMutation, {
    redeemRewardGql,
    RedeemRewardMutationType
} from "../../../../../graphql/rewards/redeemReward.gql";
import { MODALS, ROUTES } from "../../../../../navigation/routes";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import Logger from "../../../../../services/logging/logger";
import { Loading } from "../../../../atoms";
import { WegiftRewardDetailsScreen } from "../../../../screens";

interface IProps {
    componentId: string;
    reward: GetRewards_getRewards;
    onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

interface IConnectedState {
    offline: boolean;
    totalCoins: number;
}

type Props = IProps & IConnectedState;

class WegiftRewardDetailsContainer extends Component<Props> {
    public componentDidMount() {
        const { reward } = this.props;
        // TODO: Move to sagas
        Logger.logEvent("reward_viewed", {
            reward_availability: reward.availability,
            reward_available_denominations: reward.available_denominations,
            reward_best_sticker: reward.reward_sticker,
            reward_code: reward.code,
            reward_name: reward.name
        });
    }

    public render() {
        const {
            totalCoins,
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
                            coins={totalCoins}
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
            pdf === "policy" ? `${Config.API_URL}/docs/rewards-policy.pdf` : reward.terms_and_conditions_url;

        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
    }

    private handleRewardPurchase = (redeemReward: RedeemRewardMutationType) => {
        const { offline, reward, totalCoins } = this.props;

        const [{ value, yuCoin }] = reward.available_denominations;
        Alert.alert(
            "Confirm purchase",
            `You'll purchase ${reward.name} £${value.toFixed(2)} voucher with ${yuCoin} yu coin.`,
            [
                { text: "Cancel", style: "cancel" },
                {
                    onPress: async () => {
                        try {
                            const result = await redeemReward({ variables: { id: reward.code, amount: value } });

                            if ((result as { data: RedeemReward }).data.redeemReward) {
                                await Navigation.push(ROUTES.rewards, {
                                    component: {
                                        id: ROUTES.wegiftConfirmed,
                                        name: ROUTES.wegiftConfirmed,
                                        passProps: {
                                            onTabChange: this.props.onTabChange,
                                            purchase: (result as { data: RedeemReward }).data.redeemReward
                                        }
                                    }
                                });
                            }
                        } catch (e) {
                            const passProps = {
                                ctaLabel: "check other rewards",
                                heading: "the voucher is not currently available",
                                onPress: () => Navigation.dismissModal(MODALS.rewards),
                                subheading: "Please come back later."
                            };

                            if (offline) {
                                passProps.ctaLabel = "got it";
                                passProps.heading = "you're offline";
                                passProps.subheading = "check your internet connection";
                            } else if (totalCoins < yuCoin) {
                                passProps.ctaLabel = "got it";
                                passProps.heading = "not enough coin";
                                passProps.subheading = "Earn more and come back later!";
                            }

                            await Navigation.showModal({
                                component: {
                                    id: MODALS.rewards,
                                    name: MODALS.rewards,
                                    passProps
                                }
                            });
                        }
                    },
                    text: "OK"
                }
            ]
        );
    }
}

const mapStateToProps = (state: IReduxState) => ({
    offline: getOfflineState(state),
    totalCoins: getTotalCoins(state)
});

export default connect<IConnectedState>(mapStateToProps)(WegiftRewardDetailsContainer);
