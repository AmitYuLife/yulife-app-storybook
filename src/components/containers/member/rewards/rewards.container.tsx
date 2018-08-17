import * as React from "react";
import { PureComponent } from "react";
import { Text } from "react-native";
import GetRewardsQuery, { getRewardsGql } from "../../../../graphql/rewards/getRewards.gql";
import GetAllPurchases, { getAllPurchasesGql } from "../../../../graphql/rewards/getAllPurchases.gql";
import { Loading } from "../../../atoms";
import { RewardsListScreen, PurchasedListScreen } from "../../../screens";
import { GetAllPurchases_getAllPurchases } from "../../../../graphql/_core/schema";
import moment from "moment";
import { formatMoney } from "../../../../services/money";

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
                        onItemPress={() => null}
                    />
                );
            }}
        </GetRewardsQuery>
    )

    private renderPurchases = () => (
        <GetAllPurchases query={getAllPurchasesGql} fetchPolicy="network-only">
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

    private handleTabChange = (tab: Tab) => {
        this.setState({ tab });
    }

    private formatPuchaseItem = (data: any) => {
        return data.map(this.formatDataItem);
    }

    private formatDataItem = ({
        id,
        rewardProviderId,
        amount,
        currency_code,
        name,
        status,
        createdAt,
        yuCoinsSpent,
    }: GetAllPurchases_getAllPurchases) => {
        const [day, month] = moment(new Date(createdAt).toISOString())
            .format("DD-MMM")
            .split("-");
        const reward = this.formatVoucherName(amount, currency_code, name);

        return {
            day,
            month,
            reward,
            cost: `${yuCoinsSpent} yucoin`,
            status,
            id,
            onPress: this.handleItemPress(id, rewardProviderId),
        };
    }

    private handleItemPress = (id: string, rewardProviderId: string) => () => {
        // console.log("opasea ... ", id, rewardProviderId);
        return { id, rewardProviderId };
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
