import moment from "moment";
import { PureComponent } from "react";
import * as React from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetAllPurchases_getAllPurchases, GetRewards_getRewards } from "../../../../graphql/_core/schema";
import GetAllPurchases, { getAllPurchasesGql } from "../../../../graphql/rewards/getAllPurchases.gql";
import GetRewardsQuery, { getRewardsGql } from "../../../../graphql/rewards/getRewards.gql";
import { IMainTabsProps } from "../../../../navigation/root";
import { ROUTES } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../redux/coins/coins.selectors";
import { formatMoney } from "../../../../services/money";
import { PurchasedListScreen, RewardsListScreen } from "../../../screens";

type Tab = "rewards" | "purchases";

interface IConnectedState {
    totalCoins: number;
}

interface IState {
    tab: Tab;
}

type Props = IMainTabsProps & IConnectedState;

class RewardsContainer extends PureComponent<Props, IState> {
    public state: IState = {
        tab: "rewards"
    };

    public render() {
        const { tab } = this.state;

        return tab === "rewards" ? this.renderRewards() : this.renderPurchases();
    }

    private handleTabChange = (tab: Tab, componentId: string = "") => {
        this.setState({ tab }, async () => {
            if (componentId) {
                await Navigation.popToRoot(componentId);
            }
        });
    }

    // all related to the rewards tab
    private renderRewards = () => (
        <GetRewardsQuery query={getRewardsGql} fetchPolicy="cache-first">
            {({ loading, data, refetch }) => {
                const { labels, onLeftMenuPress, totalCoins } = this.props;

                return (
                    <RewardsListScreen
                        data={data.getRewards}
                        labels={labels}
                        onItemPress={this.handleRewardDetailsItemPress}
                        onLeftMenuPress={onLeftMenuPress}
                        onLeftTabPress={() => refetch()}
                        onRightTabPress={() => this.handleTabChange("purchases")}
                        refreshing={loading}
                        totalCoins={totalCoins}
                    />
                );
            }}
        </GetRewardsQuery>
    )

    private getDetailsRoute = (rewardProviderId: string) => {
        switch (rewardProviderId) {
            case "avios":
                return ROUTES.aviosDetails;
            case "wegift":
            default:
                return ROUTES.wegiftDetails;
        }
    }

    private handleRewardDetailsItemPress = async (reward: GetRewards_getRewards) => {
        if (!reward.available_denominations.length) {
            await Navigation.showModal({
                component: {
                    id: ROUTES.modalGeneric,
                    name: ROUTES.modalGeneric,
                    passProps: {
                        ctaLabel: "check other rewards",
                        heading: "the voucher is locked",
                        onPress: () => Navigation.dismissModal(ROUTES.modalGeneric),
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
    }

    // all related to the purchases tab
    private renderPurchases = () => (
        <GetAllPurchases query={getAllPurchasesGql} fetchPolicy="cache-and-network">
            {({ loading, data, refetch }) => {
                const { labels, onLeftMenuPress, totalCoins } = this.props;
                const items = this.formatPuchaseItem(data.getAllPurchases);

                return (
                    <PurchasedListScreen
                        data={items}
                        labels={labels}
                        onLeftMenuPress={onLeftMenuPress}
                        onLeftTabPress={() => this.handleTabChange("rewards")}
                        onRightTabPress={() => refetch()}
                        refreshing={loading}
                        totalCoins={totalCoins}
                    />
                );
            }}
        </GetAllPurchases>
    )

    private getConfirmedRoute = (rewardProviderId: string) => {
        switch (rewardProviderId) {
            case "avios":
                return ROUTES.aviosConfirmed;
            case "wegift":
            default:
                return ROUTES.wegiftConfirmed;
        }
    }

    private formatPuchaseItem = (data: GetAllPurchases_getAllPurchases[]) => {
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
    }

    private formatVoucherName = (num: number, currencyType: string, name: string) => {
        switch (currencyType) {
            case "AVIOS":
                return `${formatMoney(num)} AVIOS`;
            case "GBP":
            default:
                return `£${formatMoney(num)} ${name} VOUCHER`;
        }
    }
}

const mapStateToProps = (state: IReduxState) => ({
    totalCoins: getTotalCoins(state)
});

export default connect<IConnectedState>(mapStateToProps)(RewardsContainer);
