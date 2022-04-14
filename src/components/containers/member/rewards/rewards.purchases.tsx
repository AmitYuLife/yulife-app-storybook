import { useQuery } from "@apollo/react-hooks";
import { BaseQueryOptions } from "@apollo/react-common";
import { GetAllPurchases } from "@graphql/_core/schema";
import { GQL_QUERY_GET_ALL_PURCHASES } from "@graphql/rewards";
import { bottomTabs, ROUTES } from "@navigation/constants";
import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { formatMoney } from "@services/money";
import { PurchasedListScreen } from "@screens/index";
import { IMainTabsProps } from "@navigation/root";

interface IProps {
  hasNewRewards: boolean;
  onTabChange: (newTab: "rewards" | "purchases", componentId?: string) => void;
  onLeftMenuPress: IMainTabsProps["onLeftMenuPress"];
  componentId?: IMainTabsProps["componentId"];
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IProps & ConnectedState;

const getConfirmedRoute = (rewardProviderId: string) => {
  switch (rewardProviderId) {
    case "avios":
      return ROUTES.aviosConfirmed;
    case "wegift":
    default:
      return ROUTES.wegiftConfirmed;
  }
};

const formatVoucherName = (num: number, currencyType: string, name: string) => {
  switch (currencyType) {
    case "AVIOS":
      return `${formatMoney(num)} avios`;
    case "HUGGG":
      return name;
    case "GBP":
    default:
      return `£${formatMoney(num)} ${name} voucher`;
  }
};

const requestOptions: BaseQueryOptions = {
  fetchPolicy: "cache-and-network",
};

function RewardsPurchasesContainer(props: Props) {
  const { copy, onTabChange, hasNewRewards } = props;

  const { loading: purchasesAreLoading, data: purchases, refetch: refetchPurchases } = useQuery<GetAllPurchases>(
    GQL_QUERY_GET_ALL_PURCHASES,
    requestOptions
  );

  const items = useMemo(
    () =>
      (purchases && purchases.getAllPurchases ? purchases.getAllPurchases : []).map((purchase) => {
        const { id, amount, currency_code, name, status, createdAt, yuCoinsSpent } = purchase;
        const [day, month] = moment(new Date(createdAt).toISOString()).format("DD-MMM").split("-");
        const reward = formatVoucherName(amount, currency_code, name);
        const route = getConfirmedRoute(purchase.rewardProviderId);

        return {
          cost: `${yuCoinsSpent} yucoin`,
          day,
          id,
          month,
          onPress: () =>
            Navigation.push(props.componentId, {
              component: {
                id: route,
                name: route,
                passProps: {
                  onTabChange,
                  purchase,
                },
                options: { bottomTabs },
              },
            }),
          reward,
          status,
        };
      }),
    [purchases, onTabChange, props.componentId]
  );

  const handlePurchasesRefetch = useCallback(() => refetchPurchases().catch(() => null), [refetchPurchases]);
  const handleLeftTabPress = useCallback(() => onTabChange("rewards"), [onTabChange]);

  return (
    <PurchasedListScreen
      data={items}
      hasNewRewards={hasNewRewards}
      onLeftMenuPress={props.onLeftMenuPress}
      onLeftTabPress={handleLeftTabPress}
      onRightTabPress={handlePurchasesRefetch}
      loading={purchasesAreLoading}
      copy={copy}
    />
  );
}

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "purchases"),
  currentLevel: getCurrentLevel(state),
});

export default connect<ConnectedState>(mapStateToProps)(RewardsPurchasesContainer);
