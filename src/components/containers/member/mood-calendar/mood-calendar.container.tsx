import React, { memo, useCallback, useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import moment from "moment";
import { GetUserMoodSubmissionsQuery, gql } from "@graphql/__generated";
import { Box } from "@atoms";
import { ActivityIndicator } from "react-native";
import { generateMissingData } from "@components/containers/member/mood-calendar/calendar-helper";
import { IMonth } from "@organisms/mood-calendar/mood-month";
import { DATE_FORMAT } from "@utils";
import MoodCalendarScreen from "@components/screens/member/pathways/mood-calendar.screen";
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

const MoodCalendarContainer = () => {
  const [startDate, setStartDate] = useState<string>(
    moment().subtract(MONTHS_PER_PAGE, "months").startOf("month").format(DATE_FORMAT)
  );
  const [endDate, setEndDate] = useState<string>(moment().endOf("month").format(DATE_FORMAT));
  const [moodData, setMoodData] = useState<IMonth[]>([]);

  const onClose = useCallback(() => {
    Navigation.pop(ROUTES.moodCalendar);
  }, []);

  const [getUserMoodSubmissions, { loading }] = useLazyQuery(gql("GetUserMoodSubmissionsDocument"), {
    variables: {
      startDate,
      endDate,
    },
    fetchPolicy: "cache-and-network",
  });

  const generateMoodData = useCallback((data: GetUserMoodSubmissionsQuery, newEndDate: string): void => {
    if (!data?.getUserMoodSubmissions?.submissions) {
      return;
    }

    const fullData = generateMissingData(data, newEndDate, MONTHS_PER_PAGE);

    setMoodData((prev) => [...prev, ...fullData]);
  }, []);

  useEffect(() => {
    if (moodData.length > 0) {
      return;
    }

    (async () => {
      const response = await getUserMoodSubmissions({ variables: { startDate, endDate } });
      generateMoodData(response.data, endDate);
    })();
  }, [getUserMoodSubmissions, generateMoodData, endDate, startDate, moodData]);

  const handleLoadMore = useCallback(async () => {
    const newStartDate = moment(startDate).subtract(MONTHS_PER_PAGE, "months").startOf("month").format(DATE_FORMAT);
    const newEndDate = moment(endDate).subtract(MONTHS_PER_PAGE, "months").endOf("month").format(DATE_FORMAT);

    const response = await getUserMoodSubmissions({
      variables: {
        startDate: newStartDate,
        endDate: newEndDate,
      },
    });

    generateMoodData(response.data, newEndDate);

    setStartDate(newStartDate);
    setEndDate(newEndDate);
  }, [startDate, endDate, getUserMoodSubmissions, generateMoodData]);

  if (loading && !moodData.length) {
    return (
      <Box flex={1} center={true}>
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  return <MoodCalendarScreen onClose={onClose} data={moodData} onEndReached={handleLoadMore} loading={loading} />;
};

export default memo(MoodCalendarContainer);
