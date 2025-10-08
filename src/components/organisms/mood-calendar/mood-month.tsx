import { memo } from "react";
import { FlashList } from "@shopify/flash-list";
import { Box, MoodDay } from "@atoms";
import { TextTemplate } from "@atoms/text/text-template";
import { Style } from "@styles";

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

const render = ({ item }: { item: CalendarDay }) => {
  if (!item) {
    return <Box flex={1} py={4} />;
  }

  return (
    <Box center={true} py={4} flex={1}>
      <MoodDay day={item.dayNumber} moodImage={item.moodImage} isToday={item.isToday} />
    </Box>
  );
};

const keyExtractor = (item: CalendarDay, index: number) => item?.date || `empty-${index}`;

export const MoodMonth = ({ monthSection }: { monthSection: IMonth }) => {
  return (
    <Box mb={32} px={16}>
      <Box mb={12}>
        <TextTemplate type="h2">{monthSection.monthLabel}</TextTemplate>
      </Box>
      <FlashList
        data={monthSection.days}
        renderItem={render}
        keyExtractor={keyExtractor}
        numColumns={7}
        estimatedItemSize={Style.adjust(72)}
        scrollEnabled={false}
      />
    </Box>
  );
};

export default memo(MoodMonth);
