import {
    GetAllPurchasesQuery,
    GetAllPurchasesResultType,
    GetRewardsQuery,
    GetRewardsResultType
} from "@graphql/rewards";
import { bottomTabs } from "@navigation/constants";
import moment from "moment";
import { PureComponent } from "react";
import * as React from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetAllPurchases_getAllPurchases, GetRewards_getRewards } from "../../../../graphql/_core/schema";
import { MODALS, ROUTES } from "../../../../navigation/constants";
import { IMainTabsProps, onLeftMenuPress } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { getCurrentLevel, getHasNotification } from "../../../../redux/levels/levels.selectors";
import Logger from "../../../../services/logging/logger";
import { formatMoney } from "../../../../services/money";
import { PurchasedListScreen, RewardsListScreen } from "../../../screens";

type Tab = "rewards" | "purchases";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IState {
    tab: Tab;
}

type Props = IMainTabsProps & ConnectedState;

class RewardsContainer extends PureComponent<Props, IState> {
    public state: IState = {
        tab: "rewards"
    };
    private backHandler: NativeEventSubscription;
    private backPressed: number = 0;

    constructor(props: Props) {
        super(props);
        Navigation.events().bindComponent(this);
    }

    public componentDidAppear() {
        this.backPressed = 0;
        this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
            if (this.backPressed > 0) {
                return false;
            }

            this.backPressed += 1;
            return true;
        });
    }

    public componentDidDisappear() {
        if (this.backHandler) {
            this.backHandler.remove();
        }
    }

    public render() {
        const { tab } = this.state;

        return tab === "rewards" ? (
            <GetRewardsQuery>{this.renderRewards}</GetRewardsQuery>
        ) : (
            <GetAllPurchasesQuery>{this.renderPurchases}</GetAllPurchasesQuery>
        );
    }

    private handleTabChange = (tab: Tab, componentId: string = "") => {
        this.setState({ tab }, async () => {
            if (componentId) {
                await Navigation.popToRoot(componentId);
            }
        });
    };

    // all related to the rewards tab
    private renderRewards = ({ loading, data, refetch }: GetRewardsResultType) => {
        const { hasNotification, totalCoins } = this.props;

        return (
            <RewardsListScreen
                data={data && data.getRewards ? data.getRewards : []}
                hasNotification={hasNotification}
                onItemPress={this.handleRewardDetailsItemPress}
                onLeftMenuPress={onLeftMenuPress}
                onLeftTabPress={() => refetch()}
                onRightTabPress={() => this.handleTabChange("purchases")}
                loading={loading}
                totalCoins={totalCoins}
            />
        );
    };

    private getDetailsRoute = (rewardProviderId: string) => {
        switch (rewardProviderId) {
            case "avios":
                return ROUTES.aviosDetails;
            case "link":
                return ROUTES.linkDetails;
            case "wegift":
            default:
                return ROUTES.wegiftDetails;
        }
    };

    private handleRewardDetailsItemPress = async (reward: GetRewards_getRewards) => {
        const { copy } = this.props;
        if (!reward.available_denominations.length) {
            Logger.logMixpanelEvent("reward_viewed", {
                locked: true,
                reward_availability: reward.availability,
                reward_best_sticker: reward.reward_sticker,
                reward_code: reward.code,
                reward_name: reward.name
            });

            await Navigation.showModal({
                component: {
                    id: MODALS.rewards,
                    name: MODALS.rewards,
                    passProps: {
                        ctaLabel: copy.newLockedReward.ctaLabel,
                        heading: copy.newLockedReward.heading,
                        onPress: () => Navigation.dismissModal(MODALS.rewards),
                        subheading: copy.newLockedReward.subheading.replace("${rewardName}", reward.name)
                    }
                }
            });
        } else {
            const route = this.getDetailsRoute(reward.rewardProviderId);

            await Navigation.push(this.props.componentId, {
                component: {
                    id: route,
                    name: route,
                    passProps: {
                        onTabChange: this.handleTabChange,
                        reward
                    },
                    options: { bottomTabs }
                }
            });
        }
    };

    // all related to the purchases tab
    private renderPurchases = ({ loading, data, refetch }: GetAllPurchasesResultType) => {
        const { hasNotification, totalCoins, copy } = this.props;
        const items = this.formatPuchaseItem(data && data.getAllPurchases ? data.getAllPurchases : []);

        return (
            <PurchasedListScreen
                data={items}
                hasNotification={hasNotification}
                onLeftMenuPress={onLeftMenuPress}
                onLeftTabPress={() => this.handleTabChange("rewards")}
                onRightTabPress={() => refetch()}
                loading={loading}
                totalCoins={totalCoins}
                copy={copy}
            />
        );
    };

    private getConfirmedRoute = (rewardProviderId: string) => {
        switch (rewardProviderId) {
            case "avios":
                return ROUTES.aviosConfirmed;
            case "wegift":
            default:
                return ROUTES.wegiftConfirmed;
        }
    };

    private formatPuchaseItem = (data: GetAllPurchases_getAllPurchases[] = []) => {
        return data.map((purchase) => {
            const { id, amount, currency_code, name, status, createdAt, yuCoinsSpent } = purchase;
            const [day, month] = moment(new Date(createdAt).toISOString())
                .format("DD-MMM")
                .split("-");
            const reward = this.formatVoucherName(amount, currency_code, name);
            const route = this.getConfirmedRoute(purchase.rewardProviderId);

            return {
                cost: `${yuCoinsSpent} yucoin`,
                day,
                id,
                month,
                onPress: async () => {
                    await Navigation.push(this.props.componentId, {
                        component: {
                            id: route,
                            name: route,
                            passProps: {
                                onTabChange: this.handleTabChange,
                                purchase
                            },
                            options: { bottomTabs }
                        }
                    });
                },
                reward,
                status
            };
        });
    };

    private formatVoucherName = (num: number, currencyType: string, name: string) => {
        switch (currencyType) {
            case "AVIOS":
                return `${formatMoney(num)} AVIOS`;
            case "HUGGG":
                return name;
            case "GBP":
            default:
                return `£${formatMoney(num)} ${name} VOUCHER`;
        }
    };
}

const mapStateToProps = (state: IReduxState) => ({
    hasNotification: getHasNotification(state),
    totalCoins: getTotalCoins(state),
    copy: getCopy(state, "purchases"),
    currentLevel: getCurrentLevel(state)
});

export default connect<ConnectedState>(mapStateToProps)(RewardsContainer);
