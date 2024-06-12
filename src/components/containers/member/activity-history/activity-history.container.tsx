import React, { memo, useCallback, useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { ActivityHistoryScreen } from "@screens";
import moment from "moment";
import { DATE_FORMAT, fetchActivityData } from "@utils";
import { useBackHandler } from "@hooks";
import Logger from "@services/logging/logger";
import { useDispatch, useSelector } from "react-redux";
import { getStepsBlackListApps } from "@redux/daily-steps/daily-steps.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getUserDataStart, getUserStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";
import { has } from "lodash";
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

  const onRefresh = useCallback(async () => {
    Logger.logEvent("activity_history_updated");

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

    if (payload.length) {
      try {
        const response = await upsertDailyPassivesMutation({
          variables: { payload },
        });

        if (response?.data && has(response.data, "upsertDailyPassives")) {
          getActivityHistory();
          dispatch(getUserStart());
          dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivities] }));
        }
      } catch (e) {
        Logger.error(e, { event: "@activity_history_reload_catched" });
      }
    }
  }, [features]);

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
