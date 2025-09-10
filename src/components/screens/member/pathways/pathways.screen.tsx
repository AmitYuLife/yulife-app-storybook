import React, { memo } from "react";
import { Box } from "@atoms";
import { CarouselPathways, GenericHeadingAbsolute } from "@organisms";
import { ScrollView } from "react-native";
import { SecondaryButton } from "@components/molecules";
import MoodWeekView, { MoodData } from "@organisms/mood-week-view/mood-week-view";
import PathwaysHeader from "./subcomponents/pathways-header";

interface Props {
  onClose: () => void;
  moodSubmissions: MoodData[];
  onReflect: () => void;
}

const PathwaysScreen = ({ onClose, onReflect, moodSubmissions }: Props) => {
  return (
    <Box flex={1}>
      <ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="never">
        <PathwaysHeader onReflect={onReflect} />
        <Box minHeight={100} width={"100%"} gap={24}>
          <Box mt={27}>
            <CarouselPathways pathways={[]} />
          </Box>
          <MoodWeekView
            data={moodSubmissions}
            openCalendar={() => {
              /** empty */
            }}
          />
        </Box>
        <Box mv={24}>
          <SecondaryButton translationKey="screens.pathways.secondary_button_label" size="Large" onPress={onClose} />
        </Box>
      </ScrollView>
      <GenericHeadingAbsolute onLeftIconPress={onClose} backgroundColor="transparent" />
    </Box>
  );
};

export default memo(PathwaysScreen);
