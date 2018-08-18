import * as React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import { Navigation } from "react-native-navigation";
import GetRewardsQuery, { getRewardsGql } from "../../../../graphql/rewards/getRewards.gql";
import GetAllPurchases, { getAllPurchasesGql } from "../../../../graphql/rewards/getAllPurchases.gql";
import { Loading } from "../../../atoms";
import { RewardsListScreen, PurchasedListScreen } from "../../../screens";
import { GetAllPurchases_getAllPurchases, GetRewards_getRewards } from "../../../../graphql/_core/schema";
import moment from "moment";
import { formatMoney } from "../../../../services/money";
import { ROUTES } from "../../../../navigation/routes";

type Tab = "rewards" | "purchases";

interface IProps {
    isLoaded: boolean;
}

interface IState {
    tab: Tab;
}

class RewardsContainer extends PureComponent<IProps, IState> {
    public state: IState = {
        tab: "rewards",
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
        <GetRewardsQuery query={getRewardsGql} skip={!this.props.isLoaded} fetchPolicy="cache-first">
            {({ error, loading, data, refetch }) => {
                if (loading || !this.props.isLoaded) {
                    return <Loading />;
                }

                if (error) {
                    return <Text> ERROR!!! </Text>;
                }

                return (
                    <RewardsListScreen
                        data={data.getRewards}
                        onLeftTabPress={() => refetch()}
                        onRightTabPress={() => this.handleTabChange("purchases")}
                        onItemPress={this.handleRewardDetailsItemPress}
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
        const route = this.getDetailsRoute(reward.rewardProviderId);

        await Navigation.push(ROUTES.member, {
            component: {
                id: route,
                name: route,
                passProps: {
                    reward,
                    onTabChange: this.handleTabChange,
                },
            },
        });
    }

    // all related to the purchases tab
    private renderPurchases = () => (
        <GetAllPurchases query={getAllPurchasesGql} fetchPolicy="cache-and-network">
            {({ error, loading, data, refetch }) => {
                if (loading) {
                    return <Loading />;
                }

                if (error) {
                    return <Text> ERROR!!! </Text>;
                }

                const items = this.formatPuchaseItem(data.getAllPurchases);

                return (
                    <PurchasedListScreen
                        data={items}
                        onLeftTabPress={() => this.handleTabChange("rewards")}
                        onRightTabPress={() => refetch()}
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
                day,
                month,
                reward,
                cost: `${yuCoinsSpent} yucoin`,
                status,
                id,
                onPress: async () => {
                    await Navigation.push(ROUTES.member, {
                        component: {
                            id: route,
                            name: route,
                            passProps: {
                                purchase,
                                onTabChange: this.handleTabChange,
                            },
                        },
                    });
                },
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

export default RewardsContainer;
