import React, { memo } from "react";
import { Box, Image, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MoodWeekView, { MoodData } from "@organisms/mood-week-view/mood-week-view";
import { t } from "@locale";
import { Colours, Style, StyleSheet } from "@styles";
import {
  PathwaysAdviceSection,
  PathwayAdviceSectionProps,
} from "../components/pathways-advice-section/pathways-advice-section";
import PathwaysHeaderOld from "../components/pathways-header/pathways-header-old";

interface Props {
  onClose: () => void;
  moodSubmissions: MoodData[];
  onReflect: () => void;
  onOpenMoodCalendar: () => void;
  reflectionProgress: number;
  reflectedToday: boolean;
  nextQuestionnaireLocalDate: string;
  adviceSection: PathwayAdviceSectionProps;
  isLoading: boolean;
  maxProgress: number;
  streakAwardId?: string;
}

const PathwaysOldScreen = ({
  onReflect,
  onClose,
  moodSubmissions,
  reflectionProgress,
  reflectedToday,
  nextQuestionnaireLocalDate,
  onOpenMoodCalendar,
  adviceSection,
  isLoading,
  maxProgress,
  streakAwardId,
}: Props) => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  return (
    <Box flex={1} bg={Colours.pathways.header}>
      <Animated.ScrollView
        style={styles.flex}
        contentInsetAdjustmentBehavior="never"
        contentContainerStyle={styles.contentContainer}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Box position="absolute" bottom={0} width={"100%"}>
          <Image
            source={require("../assets/pathways-background.webp")}
            width={"100%"}
            height={Style.adjust(1144)}
            contentFit="cover"
          />
        </Box>
        <PathwaysHeaderOld
          onReflect={onReflect}
          reflectionProgress={reflectionProgress}
          reflectedToday={reflectedToday}
          nextQuestionnaireLocalDate={nextQuestionnaireLocalDate}
          maxProgress={maxProgress}
          streakAwardId={streakAwardId}
          isLoading={isLoading}
          isStreaksEnabled={false}
        />

        <Box minHeight={100} width={"100%"} gap={20} ph={16}>
          <Box gap={16}>
            <Box ph={8}>
              <TextTemplate type="b1b" color={Colours.neutral.white}>
                {t("screens.pathways.health_insights")}
              </TextTemplate>
            </Box>
            <MoodWeekView
              data={moodSubmissions}
              openCalendar={() => {
                onOpenMoodCalendar();
              }}
            />
          </Box>
          <PathwaysAdviceSection items={adviceSection?.items} />
        </Box>
        {/* <Box mv={24}>
          <SecondaryButton translationKey="screens.pathways.secondary_button_label" size="Large" onPress={onClose} />
        </Box> */}
      </Animated.ScrollView>
      <GenericHeadingAbsolute
        backgroundColor={Colours.pathways.header}
        onLeftIconPress={onClose}
        heading={t("screens.pathways.header")}
        color="white"
        hasShadow={true}
        scrollValue={scrollY}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  contentContainer: {
    paddingBottom: Style.adjust(40),
  },
});

export default memo(PathwaysOldScreen);
