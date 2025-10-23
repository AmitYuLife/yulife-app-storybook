import React, { memo } from "react";
import { Box } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import { ScrollView } from "react-native";
import MoodWeekView, { MoodData } from "@organisms/mood-week-view/mood-week-view";
import PathwaysHeader from "./subcomponents/pathways-header";
import { t } from "@locale";

interface Props {
  onClose: () => void;
  moodSubmissions: MoodData[];
  onReflect: () => void;
  onOpenMoodCalendar: () => void;
  reflectionProgress: number;
  reflectedToday: boolean;
}

const PathwaysScreen = ({
  onClose,
  onReflect,
  moodSubmissions,
  reflectionProgress,
  reflectedToday,
  onOpenMoodCalendar,
}: Props) => {
  return (
    <Box flex={1}>
      <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="never">
        <PathwaysHeader onReflect={onReflect} reflectionProgress={reflectionProgress} reflectedToday={reflectedToday} />
        <Box minHeight={100} width={"100%"} gap={24} pt={27}>
          {/* <Box mt={27}>
            <CarouselPathways pathways={[]} />
          </Box> */}
          <MoodWeekView
            data={moodSubmissions}
            openCalendar={() => {
              onOpenMoodCalendar();
            }}
          />
        </Box>
        {/* <Box mv={24}>
          <SecondaryButton translationKey="screens.pathways.secondary_button_label" size="Large" onPress={onClose} />
        </Box> */}
      </ScrollView>
      <GenericHeadingAbsolute
        onLeftIconPress={onClose}
        backgroundColor="#0177FF"
        heading={t("screens.pathways.header")}
        color="white"
      />
    </Box>
  );
};

export default memo(PathwaysScreen);
