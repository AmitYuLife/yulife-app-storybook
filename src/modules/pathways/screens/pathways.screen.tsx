import { memo } from "react";
import { Box, RawImage, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MoodWeekView, { MoodData } from "@organisms/mood-week-view/mood-week-view";
import PathwaysHeader from "../components/pathways-header/pathways-header";
import { t } from "@locale";
import { Colours, StyleSheet, TOP_BAR } from "@styles";
import {
  PathwayAdviceSectionProps,
  PathwaysAdviceSection,
} from "../components/pathways-advice-section/pathways-advice-section";
import { FeatureCardSection, WellbeingHubSection } from "@graphql/__generated";
import { useWindowDimensions } from "react-native";
import { useMeasure } from "@hooks";
import { PathwaysInterventionSection } from "../components/pathways-intervention-section/pathways-intervention-section";
import { PATHWAYS_SCREEN } from "@ids";
import { PathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";
import PathwayStreaks from "../components/pathway-streaks/pathway-streaks";
import PathwaysTitle from "../components/pathways-title/pathways-title";
import { PathwaysContentSkeleton, PathwaysHeaderSkeleton, PathwaysStreaksSkeleton } from "./pathways.skeletons";

interface IPathwaysScreenProps {
  onClose: () => void;
  moodSubmissions: MoodData[];
  onReflect: () => void;
  onOpenMoodCalendar: () => void;
  reflectionProgress: number;
  coinAwards: number[];
  reflectedToday: boolean;
  nextQuestionnaireLocalDate: string;
  adviceSection?: PathwayAdviceSectionProps;
  interventionSections: Array<FeatureCardSection | WellbeingHubSection>;
  isLoading: boolean;
  maxProgress: number;
  pathwayChallenge: PathwayChallenge;
  isStreakComplete: boolean;
}

const PathwaysScreen = ({
  onReflect,
  onClose,
  moodSubmissions,
  reflectionProgress,
  coinAwards,
  reflectedToday,
  nextQuestionnaireLocalDate,
  onOpenMoodCalendar,
  adviceSection,
  interventionSections,
  isLoading,
  maxProgress,
  pathwayChallenge,
  isStreakComplete,
}: IPathwaysScreenProps) => {
  const scrollY = useSharedValue(0);
  const { width, height } = useWindowDimensions();
  const bottomBackgroundHeight = (1636 / 1125) * width;
  const topBackgroundHeight = (4656 / 1125) * width;

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const { height: streakContainerHeight, onLayout: onStreakContainerLayout } = useMeasure({
    initialHeight: 0,
  });

  const headerPaddingTop = TOP_BAR.TOP_BAR_WITH_PAD + streakContainerHeight;

  return (
    <Box flex={1} testID={PATHWAYS_SCREEN}>
      <Box position="absolute" top={0} width={"100%"} bg={Colours.pathways.header} h={height / 2} />
      <Animated.ScrollView
        style={styles.flex}
        contentInsetAdjustmentBehavior="never"
        onScroll={scrollHandler}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        scrollEnabled={!isLoading}
      >
        <Box position="absolute" bg={Colours.pathways.background} h="100%" top={0} w="100%" />
        <Box position="absolute" top={0} width={"100%"}>
          <RawImage
            source={require("../assets/pathways-background-top.webp")}
            width={width}
            disableAutoAdjust={true}
            h={topBackgroundHeight}
            contentPosition={{ top: 0, left: 0 }}
            contentFit="contain"
            bg={Colours.pathways.background}
          />
        </Box>

        <Box position="absolute" bottom={0} width={"100%"} bg={Colours.pathways.background} disableAutoAdjust={true}>
          <Box
            position="absolute"
            bottom={-height + 1}
            width={"100%"}
            bg={Colours.pathways.sand}
            h={height}
            disableAutoAdjust={true}
          />
          <RawImage
            source={require("../assets/pathways-bottom-background.webp")}
            width={width}
            height={bottomBackgroundHeight}
            disableAutoAdjust={true}
            contentFit="contain"
            contentPosition={{ bottom: 0 }}
          />
        </Box>

        {isLoading ? (
          <PathwaysHeaderSkeleton pt={headerPaddingTop} />
        ) : (
          <PathwaysHeader
            onReflect={onReflect}
            reflectionProgress={reflectionProgress}
            reflectedToday={reflectedToday}
            nextQuestionnaireLocalDate={nextQuestionnaireLocalDate}
            coinAwards={coinAwards}
            maxProgress={maxProgress}
            pathwayChallenge={pathwayChallenge}
            isStreakComplete={isStreakComplete}
            pt={headerPaddingTop}
          />
        )}

        {isLoading ? (
          <PathwaysContentSkeleton />
        ) : (
          <Box minHeight={500} width={"100%"} gap={20} ph={16} pt={30}>
            <Box gap={16}>
              {interventionSections?.length ? (
                <PathwaysInterventionSection sections={interventionSections} scrollY={scrollY} />
              ) : null}
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
            <Box pb={0}>
              <PathwaysAdviceSection items={adviceSection?.items} scrollY={scrollY} />
            </Box>
          </Box>
        )}
        <Box pb={bottomBackgroundHeight * 0.3} />
      </Animated.ScrollView>
      <GenericHeadingAbsolute
        backgroundColor={Colours.pathways.header}
        onLeftIconPress={onClose}
        color="white"
        scrollValue={scrollY}
        hasShadow={true}
        heading={<PathwaysTitle />}
      >
        {isLoading ? (
          <PathwaysStreaksSkeleton count={maxProgress} onLayout={onStreakContainerLayout} />
        ) : (
          <PathwayStreaks
            currentStreak={reflectionProgress}
            reflectedToday={reflectedToday}
            maxProgress={maxProgress}
            textColor={Colours.neutral.white}
            completedBorderColor={Colours.pathways.streakBorder}
            notCompletedBorderColor={Colours.pathways.streakBorder}
            notCompletedColor={Colours.pathways.background}
            notCompletedChestForegroundColor={Colours.pathways.streakBorder}
            notCompletedChestBackgroundColor={Colours.pathways.background}
            onLayout={onStreakContainerLayout}
            pb={12}
          />
        )}
      </GenericHeadingAbsolute>
    </Box>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
});

export default memo(PathwaysScreen);
