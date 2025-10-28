import React, { memo } from "react";
import { Box } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MoodWeekView, { MoodData } from "@organisms/mood-week-view/mood-week-view";
import PathwaysHeader from "./subcomponents/pathways-header";
import { t } from "@locale";
import { Colours } from "@styles";

interface Props {
  onClose: () => void;
  moodSubmissions: MoodData[];
  onReflect: () => void;
  onOpenMoodCalendar: () => void;
  reflectionProgress: number;
  reflectedToday: boolean;
  nextQuestionnaireLocalDate: string;
}

const PathwaysScreen = ({
  onClose,
  onReflect,
  moodSubmissions,
  reflectionProgress,
  reflectedToday,
  nextQuestionnaireLocalDate,
  onOpenMoodCalendar,
}: Props) => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <Box flex={1} bg="white">
      <Animated.ScrollView
        style={{ flex: 1 }}
        contentInsetAdjustmentBehavior="never"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <PathwaysHeader
          onReflect={onReflect}
          reflectionProgress={reflectionProgress}
          reflectedToday={reflectedToday}
          nextQuestionnaireLocalDate={nextQuestionnaireLocalDate}
        />
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
      </Animated.ScrollView>
      <GenericHeadingAbsolute
        onLeftIconPress={onClose}
        backgroundColor={Colours.pathways.background}
        heading={t("screens.pathways.header")}
        color="white"
        hasShadow={true}
        scrollValue={scrollY}
      />
    </Box>
  );
};

export default memo(PathwaysScreen);
