import moment from "moment";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { useQuery } from "@apollo/client";
import { GetMobilePurchasesList as Req, GetMobilePurchasesListVariables as ReqVars } from "@graphql/_core/schema";
import { GQL_QUERY_GET_MOBILE_PURCHASES_LIST } from "@graphql/rewards";
import { ROUTES } from "@navigation/constants";
import { PurchasedListScreen } from "@screens/index";
import { IMainTabsProps } from "@navigation/root";
import { addCommasToNumber } from "@utils";

type Props = Pick<IMainTabsProps, "componentId">;

const LIMIT = 20;

function RewardsPurchasesContainer(props: Props) {
  const [purchases, setPurchases] = useState<Req["data"]["list"]>([]);
  const [page, setPage] = useState(0);

  const hasReachedTheEnd = useRef(false);

  const handleBackPress = useCallback(() => {
    Navigation.popToRoot(ROUTES.rewards);
  }, []);

  const handleRefresh = useCallback(() => {
    hasReachedTheEnd.current = false;
    setPage((p) => {
      if (p) {
        setPurchases([]);
        return 0;
      }

      return p;
    });
  }, []);

  const handleEndReached = useCallback(() => {
    if (!hasReachedTheEnd.current) {
      setPage((s) => s + 1);
    }
  }, []);

  const { loading, data } = useQuery<Req, ReqVars>(GQL_QUERY_GET_MOBILE_PURCHASES_LIST, {
    fetchPolicy: "cache-and-network",
    variables: { offset: Math.floor(page * LIMIT), limit: LIMIT },
    onError: () => (hasReachedTheEnd.current = true),
    onCompleted: (req) => {
      const isDone = req.data.list.length === 0;
      hasReachedTheEnd.current = isDone;

      if (!isDone) {
        setPurchases((s) => [...s, ...data.data.list]);
      }
    },
  });

  const items = useMemo(
    () =>
      purchases.map((purchase) => {
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
    [purchases.length, data?.data?.sduiStepId]
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
