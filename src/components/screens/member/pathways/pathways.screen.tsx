import React, { memo } from "react";
import { Box, Image, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MoodWeekView, { MoodData } from "@organisms/mood-week-view/mood-week-view";
import PathwaysHeader from "./subcomponents/pathways-header";
import { t } from "@locale";
import { Colours, Style, StyleSheet } from "@styles";
import { AdviceSection, PathwayAdviceSectionProps } from "./subcomponents/advice-section/advice-section";
import { YuScreenSection } from "@graphql/__generated";
import { InterventionItemsSection } from "./subcomponents/intervention-items-section";

interface Props {
  onClose: () => void;
  moodSubmissions: MoodData[];
  onReflect: () => void;
  onOpenMoodCalendar: () => void;
  reflectionProgress: number;
  reflectedToday: boolean;
  nextQuestionnaireLocalDate: string;
  adviceSection: PathwayAdviceSectionProps;
  interventionSections: YuScreenSection[];
  isLoading: boolean;
  maxProgress: number;
  streakAwardId?: string;
  isStreaksEnabled: boolean;
}

const PathwaysScreen = ({
  onReflect,
  onClose,
  moodSubmissions,
  reflectionProgress,
  reflectedToday,
  nextQuestionnaireLocalDate,
  onOpenMoodCalendar,
  adviceSection,
  interventionSections,
  isLoading,
  maxProgress,
  streakAwardId,
  isStreaksEnabled,
}: Props) => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });
  return (
    <Box flex={1} bg={Colours.pathways.background}>
      <Animated.ScrollView
        style={{ flex: 1 }}
        contentInsetAdjustmentBehavior="never"
        contentContainerStyle={styles.contentContainer}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Box position="absolute" bottom={0} width={"100%"}>
          <Image
            source={require("@assets/pathways/pathway-background.webp")}
            width={"100%"}
            height={Style.adjust(1144)}
            contentFit="cover"
          />
        </Box>
        <PathwaysHeader
          onReflect={onReflect}
          reflectionProgress={reflectionProgress}
          reflectedToday={reflectedToday}
          nextQuestionnaireLocalDate={nextQuestionnaireLocalDate}
          maxProgress={maxProgress}
          streakAwardId={streakAwardId}
          isLoading={isLoading}
          isStreaksEnabled={isStreaksEnabled}
        />

        <Box minHeight={100} width={"100%"} gap={20} ph={16}>
          <Box gap={16}>
            {interventionSections?.length ? <InterventionItemsSection sections={interventionSections} /> : null}
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
          <AdviceSection items={adviceSection?.items} />
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
  contentContainer: {
    paddingBottom: Style.adjust(40),
  },
});

export default memo(PathwaysScreen);
