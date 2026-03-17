import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { PurchasedListScreen } from "@screens/index";
import { IMainTabsProps } from "@navigation/root";
import { addCommasToNumber } from "@utils";
import { useLazyGqlLoading, LazyGqlLoadingArgs } from "@hooks";
import {
  GetMobilePurchasesListQuery as Req,
  GetMobilePurchasesListQueryVariables as ReqVars,
  gql,
} from "@graphql/__generated";

type MobilePurchasesList = Req["data"]["list"][number];

type Props = Pick<IMainTabsProps, "componentId"> & { filter: Record<string, string> };

const LIMIT = 20;

function createLazyLoadingArgs(filter = {}): LazyGqlLoadingArgs<MobilePurchasesList, Req, ReqVars> {
  return {
    gql: gql("GetMobilePurchasesListDocument"),
    buildVariables: (page) => ({ filter, offset: Math.floor(page * LIMIT), limit: LIMIT }),
    buildFullData: (req, prevData) => [...prevData, ...(req.data.list || [])],
    checkIfReachedEnd: (req) => req.data.list.length === 0,
  };
}

const RewardsPurchasesContainer = (props: Props) => {
  const needle = useLazyGqlLoading<Req["data"]["list"][0], Req, ReqVars>(createLazyLoadingArgs(props.filter));
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
};

export default RewardsPurchasesContainer;
