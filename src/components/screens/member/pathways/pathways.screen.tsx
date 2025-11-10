import React, { memo } from "react";
import { Box } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MoodWeekView, { MoodData } from "@organisms/mood-week-view/mood-week-view";
import PathwaysHeader from "./subcomponents/pathways-header";
import { t } from "@locale";
import { Colours, Style, StyleSheet } from "@styles";

import { AdviceSection, PathwayAdviceSectionProps } from "./subcomponents/advice-section";

interface Props {
  onClose: () => void;
  moodSubmissions: MoodData[];
  onReflect: () => void;
  onOpenMoodCalendar: () => void;
  reflectionProgress: number;
  reflectedToday: boolean;
  nextQuestionnaireLocalDate: string;
  adviceSection: Omit<PathwayAdviceSectionProps, "isLoading">;
  isLoading: boolean;
}

const PathwaysScreen = ({
  onClose,
  onReflect,
  moodSubmissions,
  reflectionProgress,
  reflectedToday,
  nextQuestionnaireLocalDate,
  onOpenMoodCalendar,
  adviceSection,
  isLoading,
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
        contentContainerStyle={styles.contentContainer}
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
          {adviceSection?.items?.length > 0 ? (
            <AdviceSection heading={adviceSection.heading} items={adviceSection.items} isLoading={isLoading} />
          ) : null}
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

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: Style.adjust(40),
  },
});

export default memo(PathwaysScreen);
