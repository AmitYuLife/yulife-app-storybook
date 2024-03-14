import React, { memo, useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { ActivityHistoryScreen } from "@screens";
import moment from "moment";
import { DATE_FORMAT } from "@utils";
import { useBackHandler } from "@hooks";

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

  const onRightIconPress = useCallback(() => Navigation.pop(componentId), [componentId]);
  const onLeftIconPress = useCallback(() => getActivityHistory(), [getActivityHistory]);
  const onMonthSelected = useCallback(
    ({ startDate, endDate }: ISelectedMonth) => setMonthSelected({ startDate, endDate }),
    []
  );
  return (
    <ActivityHistoryScreen
      days={data?.getMobileUserActivityHistory}
      onRightIconPress={onRightIconPress}
      onLeftIconPress={onLeftIconPress}
      onMonthSelected={onMonthSelected}
      loading={loading}
      onRefresh={getActivityHistory}
    />
  );
};

export default memo(ActivityHistoryContainer);
