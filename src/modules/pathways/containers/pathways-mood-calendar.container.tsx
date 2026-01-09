import React, { memo, useCallback, useMemo } from "react";
import { useQuery } from "@apollo/client";
import moment from "moment";
import { GetUserMoodSubmissionsQuery, gql } from "@graphql/__generated";
import { Box } from "@atoms";
import { ActivityIndicator } from "react-native";
import { generateMissingData } from "@app/modules/pathways/utils/calendar-helper.util";
import { DATE_FORMAT } from "@utils";
import PathwaysMoodCalendarScreen from "@app/modules/pathways/screens/pathways-mood-calendar.screen";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";

const MONTHS_PER_PAGE = 3;
interface MoodDayData {
  date: string;
  moodImage: string;
}
export interface MonthMoodData {
  month: string;
  days: MoodDayData[];
}

const PathwaysMoodCalendarContainer = () => {
  const startDate = moment().subtract(MONTHS_PER_PAGE, "months").startOf("month").format(DATE_FORMAT);
  const endDate = moment().endOf("month").format(DATE_FORMAT);

  const onClose = useCallback(() => {
    Navigation.pop(ROUTES.moodCalendar);
  }, []);

  const { data, loading } = useQuery<GetUserMoodSubmissionsQuery>(gql("GetUserMoodSubmissionsDocument"), {
    variables: {
      startDate,
      endDate,
    },
    fetchPolicy: "cache-and-network",
  });

  const moodData = useMemo(() => {
    if (loading) {
      return [];
    }

    return generateMissingData(data, endDate, MONTHS_PER_PAGE);
  }, [data, endDate, loading]);

  if (loading && !moodData.length) {
    return (
      <Box flex={1} center={true}>
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  return <PathwaysMoodCalendarScreen onClose={onClose} data={moodData} loading={loading} />;
};

export default memo(PathwaysMoodCalendarContainer);
