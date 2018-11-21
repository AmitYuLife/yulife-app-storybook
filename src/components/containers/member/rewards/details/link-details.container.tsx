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

interface IConnectedState {
    offline: boolean;
    totalCoins: number;
}

type Props = IProps & IConnectedState;

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
            <WegiftRewardDetailsScreen
                uiSettings={uiSettings}
                code={code}
                linkType={link_type}
                cost={0}
                rewardValue={0}
                rewardCurrency={currency_code}
                description={description}
                instructions={steps}
                onPressCtaPrimary={this.handleSubmit}
                labelCtaPrimary={labelCtaPrimary}
                onPressTerms={this.openPDFs("terms")}
                onPressPolicy={this.openPDFs("policy")}
                coins={totalCoins}
                onPressTopBar={this.handleRewardsPress}
                onLeftTabPress={this.handleRewardsPress}
                onRightTabPress={this.handlePurchasesPress}
            />
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
        const url = pdf === "policy" ? `${Config.API_URL}/docs/rewards-policy.pdf` : reward.terms_and_conditions_url;

        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        }
    }

    private handleSubmit = () => {
        const {
            reward: { name, availability, code, uiSettings = {} as any }
        } = this.props;

        Alert.alert(
            uiSettings.alertHeading || "Claim reward",
            uiSettings.alertSubheading || `You will be redirected to ${name}.`,
            [
                { text: uiSettings.alertCancelLabel || "Cancel", style: "cancel" },
                {
                    onPress: async () => {
                        const supported = await Linking.canOpenURL(availability);

                        if (supported) {
                            Logger.logEvent("reward_redeem_pressed", {
                                reward_amount: 0,
                                reward_code: code,
                                reward_name: name,
                                reward_yucoin_spent: 0
                            });
                            await Linking.openURL(availability);
                        }
                    },
                    text: uiSettings.alertOkLabel || "OK"
                }
            ]
        );
    }
}

const mapStateToProps = (state: IReduxState) => ({
    offline: getOfflineState(state),
    totalCoins: getTotalCoins(state)
});

export default connect<IConnectedState>(mapStateToProps)(LinkRewardDetailsContainer);
