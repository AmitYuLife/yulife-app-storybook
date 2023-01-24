import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { GetMobilePurchasesList as Req, GetMobilePurchasesListVariables as ReqVars } from "@graphql/_core/schema";
import { GQL_QUERY_GET_MOBILE_PURCHASES_LIST } from "@graphql/rewards";
import { ROUTES } from "@navigation/constants";
import { PurchasedListScreen } from "@screens/index";
import { IMainTabsProps } from "@navigation/root";
import { addCommasToNumber } from "@utils";
import { useLazyGqlLoading, LazyGqlLoadingArgs } from "@hooks";

type Props = Pick<IMainTabsProps, "componentId">;

const LIMIT = 20;

const LAZY_LOADING_ARGS: LazyGqlLoadingArgs<Req["data"]["list"][0], Req, ReqVars> = {
  gql: GQL_QUERY_GET_MOBILE_PURCHASES_LIST,
  buildVariables: (page) => ({ offset: Math.floor(page * LIMIT), limit: LIMIT }),
  buildFullData: (req, prevData) => [...prevData, ...(req.data.list || [])],
  checkIfReachedEnd: (req) => req.data.list.length === 0,
};

function RewardsPurchasesContainer(props: Props) {
  const needle = useLazyGqlLoading<Req["data"]["list"][0], Req, ReqVars>(LAZY_LOADING_ARGS);
  const { fullData, data, loading, handleEndReached, handleRefresh } = needle;

  const handleBackPress = useCallback(() => {
    Navigation.popToRoot(ROUTES.rewards);
  }, []);

  const items = useMemo(
    () =>
      fullData.map((purchase) => {
        const { id, status, date, yuCoin, title, statusColour } = purchase;
        const [day, month] = moment(date).format("DD-MMM").split("-");

        return {
          id,
          day,
          month,
          status,
          statusColour,
          reward: title,
          cost: t("yu_coin.amount", { amount: addCommasToNumber(yuCoin) }),
          onPress: () =>
            Navigation.push(props.componentId, {
              component: {
                id: ROUTES.rewardPurchase,
                name: ROUTES.rewardPurchase,
                passProps: {
                  stepId: data?.data?.sduiStepId || "reward_purchase",
                  dynamicId: id,
                },
              },
            }),
        };
      }),
    [fullData.length, data?.data?.sduiStepId]
  );

  return (
    <PurchasedListScreen
      data={items}
      onEndReached={handleEndReached}
      onRefresh={handleRefresh}
      onLeftMenuPress={handleBackPress}
      loading={loading}
    />
  );
}

export default RewardsPurchasesContainer;
