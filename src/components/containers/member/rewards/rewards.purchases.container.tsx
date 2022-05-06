import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { Navigation } from "react-native-navigation";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { BaseQueryOptions } from "@apollo/react-common";
import { GetAllPurchases } from "@graphql/_core/schema";
import { GQL_QUERY_GET_ALL_PURCHASES } from "@graphql/rewards";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { getPurchasesCopy } from "@redux/copy/copy.selectors";
import { PurchasedListScreen } from "@screens/index";
import { IMainTabsProps } from "@navigation/root";
import { formatMoney } from "@services/money";
import { addCommasToNumber } from "@utils";

type Props = Pick<IMainTabsProps, "componentId">;

const requestOptions: BaseQueryOptions = {
  fetchPolicy: "cache-and-network",
};

function RewardsPurchasesContainer(props: Props) {
  const copy = useSelector(getPurchasesCopy);

  const { loading, data: purchases, refetch } = useQuery<GetAllPurchases>(GQL_QUERY_GET_ALL_PURCHASES, requestOptions);

  const handleBackPress = useCallback(() => {
    Navigation.popToRoot(ROUTES.rewards);
  }, []);

  const handleRefresh = useCallback(async () => {
    try {
      await refetch();
    } catch (e) {
      // safe fail
    }
  }, []);

  const items = useMemo(
    () =>
      (purchases?.getAllPurchases || []).map((purchase) => {
        const { id, amount, currency_code, name, status, createdAt, yuCoinsSpent } = purchase;
        const [day, month] = moment(new Date(createdAt).toISOString()).format("DD-MMM").split("-");
        const reward = formatVoucherName(amount, currency_code, name);
        const route = getConfirmedRoute(purchase.rewardProviderId);

        return {
          cost: `${addCommasToNumber(yuCoinsSpent)} YuCoin`,
          day,
          id,
          month,
          onPress: () =>
            Navigation.push(props.componentId, {
              component: {
                id: route,
                name: route,
                passProps: {
                  purchase,
                },
                options: { bottomTabs },
              },
            }),
          reward,
          status,
        };
      }),
    [purchases, props.componentId]
  );

  return (
    <PurchasedListScreen
      data={items}
      onRefresh={handleRefresh}
      onLeftMenuPress={handleBackPress}
      loading={loading}
      copy={copy}
    />
  );
}

export default RewardsPurchasesContainer;

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
