import { memo } from "react";
import { Box, MoodDay } from "@atoms";
import { TextTemplate } from "@atoms/text/text-template";

export interface IMonth {
  monthDate: string;
  monthLabel: string;
  days: (CalendarDay | null)[];
}

export interface CalendarDay {
  date: string;
  dayNumber: number;
  moodImage?: string;
  isToday: boolean;
}

export const MoodMonth = ({ monthSection }: { monthSection: IMonth }) => {
  return (
    <Box mb={32} px={16}>
      <Box mb={12}>
        <TextTemplate type="h2">{monthSection.monthLabel}</TextTemplate>
      </Box>
      <Box flexDirection="row" flexWrap="wrap">
        {monthSection.days.map((day, index) => {
          if (!day) {
            return <Box key={`empty-${index}`} width="14.285%" py={4} />;
          }

          return (
            <Box key={day.date} width="14.285%" center={true} py={4}>
              <MoodDay day={day.dayNumber} moodImage={day.moodImage} isToday={day.isToday} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default memo(MoodMonth);
