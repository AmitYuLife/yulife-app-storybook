import React, { memo, useMemo } from "react";
import { FlashList } from "@shopify/flash-list";
import { Box } from "@atoms";
import { MoodMonth, IMonth } from "./mood-month";
import WeekDays from "../../molecules/week-days/week-days";
import { getMissingDays } from "./calendar-helper";
import { Style } from "@styles";

export interface MoodDayData {
  date: string;
  moodImage: string;
}

export interface MonthMoodData {
  month: string;
  days: MoodDayData[];
}

interface IMoodCalendarProps {
  data: MonthMoodData[];
}

export const MoodCalendar = ({ data }: IMoodCalendarProps) => {
  const monthSections = useMemo(() => getMissingDays(data), [data]);

  return (
    <Box flex={1}>
      <WeekDays />
      <FlashList
        data={monthSections}
        renderItem={render}
        keyExtractor={keyExtractor}
        estimatedItemSize={Style.adjust(500)}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

const keyExtractor = (item: IMonth) => item.monthDate;

const render = ({ item }: { item: IMonth }) => <MoodMonth monthSection={item} />;

export default memo(MoodCalendar);
