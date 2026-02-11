import { memo } from "react";
import { useSharedValue } from "react-native-reanimated";
import { GenericHeadingAbsolute, GenericHeadingPad, MoodCalendar } from "@organisms";
import { IMonth } from "@organisms/mood-calendar/mood-month";
import { t } from "@locale";
import { Box } from "@atoms";
import { WeekDays } from "../../../components/molecules";

export interface IMoodCalendarScreenProps {
  onClose: () => void;
  data: IMonth[];
  loading: boolean;
}

const PathwaysMoodCalendarScreen = ({ onClose, data, loading }: IMoodCalendarScreenProps) => {
  const scrollValue = useSharedValue(0);

  return (
    <Box flex={1}>
      <GenericHeadingPad hasShadow={true} />
      <MoodCalendar data={data} loading={loading} scrollValue={scrollValue} />
      <GenericHeadingAbsolute
        heading={t("screens.mood-calendar.title")}
        onRightIconPress={onClose}
        hasShadow={true}
        scrollValue={scrollValue}
      >
        <WeekDays />
      </GenericHeadingAbsolute>
    </Box>
  );
};

export default memo(PathwaysMoodCalendarScreen);
