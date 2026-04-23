import React, { memo, useCallback, useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { ActivityHistoryScreen } from "@screens";
import moment from "moment";
import { DATE_FORMAT, fetchActivityData } from "@utils";
import { useBackHandler } from "@hooks";
import EngagementTracking from "@services/logging/engagement-tracking";
import Logger from "@services/logger/logger";
import { useDispatch, useSelector } from "react-redux";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { getUserFeatures, getUserPassiveChallengesLastUpdate } from "@redux/user/user.selectors";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { has } from "lodash";
import { randomUUID } from "expo-crypto";

interface IProps {
  componentId: string;
}

interface ISelectedMonth {
  startDate: string;
  endDate: string;
}

const ActivityHistoryContainer = ({ componentId }: IProps) => {
  const [monthSelected, setMonthSelected] = useState<ISelectedMonth>({
    startDate: moment().startOf("month").format(DATE_FORMAT),
    endDate: moment().endOf("month").format(DATE_FORMAT),
  });
  const dispatch = useDispatch();
  const stepsBlackListApps = useSelector(getStepsBlackListApps);
  const features = useSelector(getUserFeatures);

  const [upsertDailyPassivesMutation, { loading: addHistoricalLoading }] = useMutation(
    gql("UpsertDailyPassivesDocument")
  );

  const [getActivityHistory, { data, loading }] = useLazyQuery(gql("GetMobileUserActivityHistoryDocument"), {
    fetchPolicy: "cache-and-network",
    variables: {
      startDate: monthSelected.startDate,
      endDate: monthSelected.endDate,
    },
  });

  useBackHandler(() => {
    onRightIconPress();
    return true;
  });

  useEffect(() => {
    getActivityHistory();
  }, [monthSelected]);

  const { sessionId } = useSelector(getUserPassiveChallengesLastUpdate);

  const onRefresh = useCallback(async () => {
    EngagementTracking.logEvent("activity_history_updated");

    if (!features.canUpdateActivityHistory) {
      return getActivityHistory();
    }

    const start = moment().subtract(30, "days").startOf("day");
    const end = moment().subtract(1, "days").endOf("day");

    const { stepsResults, meditationResults, cyclingResults } = await fetchActivityData({
      features,
      stepsBlackListApps,
      start,
      end,
    });

    const payload = [...stepsResults, ...meditationResults, ...cyclingResults];
    const querySessionId = sessionId || randomUUID();

    if (payload.length) {
      try {
        // sessionId is only generated on sendAllPassiveActivitySinceLastUpdate.saga.
        // If it exists, let it handle the sending of lastItem for session, else, allow this mutation to send hasLastItem
        const response = await upsertDailyPassivesMutation({
          variables: { payload, sessionId: querySessionId, hasLastItem: !sessionId },
        });

        if (response?.data && has(response.data, "upsertDailyPassives")) {
          getActivityHistory();
          dispatch(
            getUserDataStart({
              types: [AppDataType.currentUser, AppDataType.coinLedger, AppDataType.todayActivity],
            })
          );
        }
      } catch (e) {
        Logger.notify(e, { event: "@activity_history_reload_catched" });
      }
    }
  }, [features, sessionId]);

  const onRightIconPress = useCallback(() => Navigation.pop(componentId), [componentId]);
  const onMonthSelected = useCallback(
    ({ startDate, endDate }: ISelectedMonth) => setMonthSelected({ startDate, endDate }),
    []
  );
  return (
    <ActivityHistoryScreen
      days={data?.getMobileUserActivityHistory}
      onRightIconPress={onRightIconPress}
      onLeftIconPress={onRefresh}
      onMonthSelected={onMonthSelected}
      loading={loading || addHistoricalLoading}
      onRefresh={onRefresh}
    />
  );
};

export default memo(ActivityHistoryContainer);
