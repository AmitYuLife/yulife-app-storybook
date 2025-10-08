import React, { memo, useMemo } from "react";
import moment from "moment";
import { Box } from "@atoms";
import { TextTemplate } from "@atoms/text/text-template";
import { Colours } from "@styles";

export const WeekDays = () => {
  const weekDays = useMemo(() => {
    const startOfWeek = moment().startOf("week");
    const today = moment();

    return Array.from({ length: 7 }).map((_, i) => {
      const day = startOfWeek.clone().add(i, "days");
      return {
        label: day.format("dd"),
        isToday: day.isSame(today, "day"),
      };
    });
  }, []);

  return (
    <Box flexDirection="row" mb={24} px={16}>
      {weekDays.map((day) => {
        return (
          <Box key={day.label} flex={1} center={true}>
            <TextTemplate type="b2b" color={day.isToday ? Colours.primary.p500 : Colours.neutral.n600}>
              {day.label}
            </TextTemplate>
          </Box>
        );
      })}
    </Box>
  );
};

export default memo(WeekDays);
