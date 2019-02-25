import {
    GetAllPurchasesQuery,
    GetAllPurchasesResultType,
    GetRewardsQuery,
    GetRewardsResultType
} from "@graphql/rewards";
import moment from "moment";
import { PureComponent } from "react";
import * as React from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetAllPurchases_getAllPurchases, GetRewards_getRewards } from "../../../../graphql/_core/schema";
import { MODALS, ROUTES } from "../../../../navigation/constants";
import { IMainTabsProps } from "../../../../navigation/root";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { getHasNotification } from "../../../../redux/levels/levels.selectors";
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
        const { hasNotification, labels, onLeftMenuPress, totalCoins } = this.props;

        return (
            <RewardsListScreen
                data={data.getRewards || []}
                hasNotification={hasNotification}
                labels={labels}
                onItemPress={this.handleRewardDetailsItemPress}
                onLeftMenuPress={onLeftMenuPress}
                onLeftTabPress={() => refetch()}
                onRightTabPress={() => this.handleTabChange("purchases")}
                refreshing={loading}
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
        if (!reward.available_denominations.length) {
            await Navigation.showModal({
                component: {
                    id: MODALS.rewards,
                    name: MODALS.rewards,
                    passProps: {
                        ctaLabel: "check other rewards",
                        heading: "the voucher is locked",
                        onPress: () => Navigation.dismissModal(MODALS.rewards),
                        subheading: "You'll be able to process it when you progress further."
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
                    }
                }
            });
        }
    };

    // all related to the purchases tab
    private renderPurchases = ({ loading, data, refetch }: GetAllPurchasesResultType) => {
        const { hasNotification, labels, onLeftMenuPress, totalCoins } = this.props;
        const items = this.formatPuchaseItem(data.getAllPurchases);

        return (
            <PurchasedListScreen
                data={items}
                hasNotification={hasNotification}
                labels={labels}
                onLeftMenuPress={onLeftMenuPress}
                onLeftTabPress={() => this.handleTabChange("rewards")}
                onRightTabPress={() => refetch()}
                refreshing={loading}
                totalCoins={totalCoins}
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
                            }
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
            case "GBP":
            default:
                return `£${formatMoney(num)} ${name} VOUCHER`;
        }
    };
}

const mapStateToProps = (state: IReduxState) => ({
    hasNotification: getHasNotification(state),
    totalCoins: getTotalCoins(state)
});

export default connect<ConnectedState>(mapStateToProps)(RewardsContainer);
