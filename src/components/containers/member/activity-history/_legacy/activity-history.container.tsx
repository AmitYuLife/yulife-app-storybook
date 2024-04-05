import { useMutation } from "@apollo/client";
import { GQL_QUERY_GET_ACTIVITY_HISTORY } from "@graphql/user";
import { GetActivityHistory as Req, GetActivityHistoryVariables as ReqVars } from "@graphql/_core/schema";
import moment from "moment";
import React, { useCallback, FC } from "react";
import { Navigation } from "@navigation/main";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataStart, getUserStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { getUserFeatures } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import GenericConnectionErrorModal from "@modals/generic-modal/generic-connection-error-modal";
import { ActivityHistoryLevels } from "@screens";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { LazyGqlLoadingArgs, useLazyGqlLoading } from "@hooks";
import { gql } from "@graphql/__generated";
import { fetchActivityData } from "@utils";

type Props = {
  componentId: string;
};

const LAZY_LOADING_ARGS: LazyGqlLoadingArgs<Req["getActivityHistoryWithLevels"][0] | string, Req, ReqVars> = {
  gql: GQL_QUERY_GET_ACTIVITY_HISTORY,
  buildVariables: (monthsAgo) => ({ monthsAgo, isFullActivity: true }),
  checkIfReachedEnd: (req) => req.getActivityHistoryWithLevels.length === 0,
  buildFullData: (req) =>
    req.getActivityHistoryWithLevels.reduce<(Req["getActivityHistoryWithLevels"][0] | string)[]>(
      (acc, item, i) => {
        const nextItem = req.getActivityHistoryWithLevels[i + 1];

        acc.push(item);

        if (nextItem && nextItem.monthAndYear !== item.monthAndYear) {
          acc.push(nextItem.monthAndYear);
        }

        return acc;
      },
      [req.getActivityHistoryWithLevels[0].monthAndYear]
    ),
};

const ActivityHistoryContainer: FC<Props> = ({ componentId }) => {
  const dispatch = useDispatch();
  const stepsBlackListApps = useSelector(getStepsBlackListApps);
  const features = useSelector(getUserFeatures);

  const handleClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const { fullData, error, loading, handleRefresh, handleEndReached } = useLazyGqlLoading(LAZY_LOADING_ARGS);

  const [addHistoricalSteps] = useMutation(gql("UpsertDailyPassivesDocument"));

  const onRefresh = useCallback(async () => {
    Logger.logEvent("activity_history_updated");

    if (features.canUpdateActivityHistory) {
      const start = moment().subtract(30, "days").startOf("day");
      const end = moment().subtract(1, "days").endOf("day");

      const { stepsResults, meditationResults, cyclingResults } = await fetchActivityData({
        features,
        stepsBlackListApps,
        start,
        end,
      });

      const payload = [...stepsResults, ...meditationResults, ...cyclingResults];

      if (payload.length) {
        try {
          const response = await addHistoricalSteps({
            variables: { payload },
          });

          if (
            response &&
            response.data &&
            (Object.prototype.hasOwnProperty.call(response.data, "upsertPassiveChallenges") ||
              Object.prototype.hasOwnProperty.call(response.data, "upsertDailyPassives"))
          ) {
            handleRefresh();
            dispatch(getUserStart());
            dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));
          }
        } catch (e) {
          Logger.error(e, { event: "@activity_history_reload_catched" });
        }
      }
    } else {
      handleRefresh();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [features]);

  if (error) {
    return <GenericConnectionErrorModal onPress={handleClose} />;
  }

  return (
    // return empty array if data.getActivityHistoryWithLevels is undefined
    <ActivityHistoryLevels
      data={fullData}
      loading={loading}
      onPressClose={handleClose}
      onFetchMoreData={handleEndReached}
      onRefresh={onRefresh}
    />
  );
};

export default ActivityHistoryContainer;
