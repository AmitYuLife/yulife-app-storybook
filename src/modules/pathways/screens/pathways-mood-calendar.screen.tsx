import { memo } from "react";
import { GenericHeadingAbsolute, GenericHeadingPad, MoodCalendar } from "@organisms";
import { IMonth } from "@organisms/mood-calendar/mood-month";
import { t } from "@locale";
import { Box } from "@atoms";

export interface IMoodCalendarScreenProps {
  onClose: () => void;
  data: IMonth[];
  loading: boolean;
}

const PathwaysMoodCalendarScreen = ({ onClose, data, loading }: IMoodCalendarScreenProps) => {
  return (
    <Box flex={1}>
      <GenericHeadingPad />
      <MoodCalendar data={data} loading={loading} />
      <GenericHeadingAbsolute heading={t("screens.mood-calendar.title")} onRightIconPress={onClose} />
    </Box>
  );
};

export default memo(PathwaysMoodCalendarScreen);
