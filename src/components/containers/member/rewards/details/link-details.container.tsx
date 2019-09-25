import { RedeemRewardFunctionType, RedeemRewardMutation } from "@graphql/rewards";
import * as React from "react";
import { Component } from "react";
import { Alert, Linking } from "react-native";
import Config from "react-native-config";
import { connect } from "react-redux";
import { GetRewards_getRewards } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../../redux/app/app.selectors";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import Logger from "../../../../../services/logging/logger";
import { WegiftRewardDetailsScreen } from "../../../../screens";

interface IProps {
    componentId: string;
    reward: GetRewards_getRewards;
    onTabChange: (tab: "rewards" | "purchases", componentId: string) => void;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & ConnectedState;

class LinkRewardDetailsContainer extends Component<Props> {
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
                uiSettings,
                link_type
            }
        } = this.props;
        const labelCtaPrimary = uiSettings.ctaLabel || "claim reward";

        return (
            <RedeemRewardMutation>
                {(redeemReward, { loading }) => (
                    <WegiftRewardDetailsScreen
                        uiSettings={uiSettings}
                        code={code}
                        linkType={link_type}
                        cost={0}
                        rewardValue={0}
                        rewardCurrency={currency_code}
                        description={description}
                        instructions={steps}
                        isLoading={loading}
                        onPressCtaPrimary={this.handleSubmit(redeemReward)}
                        labelCtaPrimary={labelCtaPrimary}
                        onPressTerms={this.openPDFs("terms")}
                        onPressPolicy={this.openPDFs("policy")}
                        coins={totalCoins}
                        onPressTopBar={this.handleRewardsPress}
                        onLeftTabPress={this.handleRewardsPress}
                        onRightTabPress={this.handlePurchasesPress}
                    />
                )}
            </RedeemRewardMutation>
        );
    }

    private handleRewardsPress = () => {
        this.props.onTabChange("rewards", this.props.componentId);
    };

    private handlePurchasesPress = () => {
        this.props.onTabChange("purchases", this.props.componentId);
    };

    private openPDFs = (pdf: "policy" | "terms") => async () => {
        const { reward } = this.props;
        const url = pdf === "policy" ? Config.REWARDS_POLICY_URL : reward.terms_and_conditions_url;

        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
    };

    private handleSubmit = (redeemReward: RedeemRewardFunctionType) => () => {
        const {
            reward: { name, availability, code, uiSettings = {} as any, available_denominations }
        } = this.props;

        const [{ value }] = available_denominations;

        Alert.alert(
            uiSettings.alertHeading || "Claim reward",
            uiSettings.alertSubheading || `You will be redirected to ${name}.`,
            [
                { text: uiSettings.alertCancelLabel || "Cancel", style: "cancel" },
                {
                    onPress: async () => {
                        try {
                            await redeemReward({ variables: { id: code, amount: value } });
                        } catch (e) {
                            Logger.logMixpanelError(e, "linkRewardDetailsContainer");
                        }

                        const supported = await Linking.canOpenURL(availability);

                        if (supported) {
                            Logger.logEvent("reward_redeem_pressed", {
                                reward_amount: 0,
                                reward_code: code,
                                reward_name: name,
                                reward_yucoin_spent: 0
                            });
                            await Linking.openURL(availability);
                        } else {
                            // Record the fact that the user didn't see the link.
                            Logger.logEvent("reward_redeem_link_unsupported", {
                                reward_code: code,
                                reward_name: name
                            });
                        }
                    },
                    text: uiSettings.alertOkLabel || "OK"
                }
            ]
        );
    };
}

const mapStateToProps = (state: IReduxState) => ({
    offline: getOfflineState(state),
    totalCoins: getTotalCoins(state)
});

export default connect<ConnectedState>(mapStateToProps)(LinkRewardDetailsContainer);
