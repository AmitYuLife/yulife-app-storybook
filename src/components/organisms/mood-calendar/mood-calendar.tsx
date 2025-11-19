import React, { memo } from "react";
import { FlashList } from "@shopify/flash-list";
import { Box } from "@atoms";
import { MoodMonth, IMonth } from "./mood-month";
import WeekDays from "../../molecules/week-days/week-days";
import { Style } from "@styles";

interface IMoodCalendarProps {
  data: IMonth[];
  loading?: boolean;
}

export const MoodCalendar = ({ data, loading }: IMoodCalendarProps) => {
  return (
    <Box flex={1}>
      <WeekDays />
      <FlashList
        inverted={true}
        data={data}
        refreshing={loading}
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
