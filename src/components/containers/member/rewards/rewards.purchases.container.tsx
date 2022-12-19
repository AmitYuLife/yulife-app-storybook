import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { useQuery } from "@apollo/client";
import { BaseQueryOptions } from "@apollo/client";
import { GetAllPurchases } from "@graphql/_core/schema";
import { GQL_QUERY_GET_ALL_PURCHASES } from "@graphql/rewards";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { PurchasedListScreen } from "@screens/index";
import { IMainTabsProps } from "@navigation/root";
import { addCommasToNumber } from "@utils";

type Props = Pick<IMainTabsProps, "componentId">;

const requestOptions: BaseQueryOptions = {
  fetchPolicy: "cache-and-network",
};

function RewardsPurchasesContainer(props: Props) {
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
        const { id, status, createdAt, yuCoinsSpent, rewardTitle } = purchase;
        const [day, month] = moment(new Date(createdAt).toISOString()).format("DD-MMM").split("-");
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
          reward: rewardTitle,
          status,
        };
      }),
    [purchases, props.componentId]
  );

  return (
    <PurchasedListScreen data={items} onRefresh={handleRefresh} onLeftMenuPress={handleBackPress} loading={loading} />
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
