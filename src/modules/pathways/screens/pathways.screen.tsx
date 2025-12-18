import React, { memo } from "react";
import { Box, RawImage, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import MoodWeekView, { MoodData } from "@organisms/mood-week-view/mood-week-view";
import PathwaysHeader from "../components/pathways-header/pathways-header";
import { t } from "@locale";
import { Colours, StyleSheet } from "@styles";
import {
  PathwayAdviceSectionProps,
  PathwaysAdviceSection,
} from "../components/pathways-advice-section/pathways-advice-section";
import { YuScreenSection } from "@graphql/__generated";
import { useWindowDimensions } from "react-native";
import { PathwaysInterventionSection } from "../components/pathways-intervention-section/pathways-intervention-section";
import { PATHWAYS_SCREEN } from "@ids";

interface IPathwaysScreenProps {
  onClose: () => void;
  moodSubmissions: MoodData[];
  onReflect: () => void;
  onOpenMoodCalendar: () => void;
  reflectionProgress: number;
  coinAwards: number[];
  reflectedToday: boolean;
  nextQuestionnaireLocalDate: string;
  adviceSection: PathwayAdviceSectionProps;
  interventionSections: YuScreenSection[];
  isLoading: boolean;
  maxProgress: number;
  streakAwardId?: string;
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
  maxProgress,
  streakAwardId,
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

  return (
    <Box flex={1} testID={PATHWAYS_SCREEN}>
      <Box position="absolute" top={0} width={"100%"} bg={Colours.pathways.header} h={height / 2} />
      <Animated.ScrollView
        style={styles.flex}
        contentInsetAdjustmentBehavior="never"
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
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

        <PathwaysHeader
          onReflect={onReflect}
          reflectionProgress={reflectionProgress}
          reflectedToday={reflectedToday}
          nextQuestionnaireLocalDate={nextQuestionnaireLocalDate}
          coinAwards={coinAwards}
          maxProgress={maxProgress}
          streakAwardId={streakAwardId}
        />

        <Box minHeight={500} width={"100%"} gap={20} ph={12} pt={30}>
          <Box gap={16}>
            {interventionSections?.length ? <PathwaysInterventionSection sections={interventionSections} /> : null}
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
            <PathwaysAdviceSection items={adviceSection?.items} />
          </Box>
        </Box>
        {/* <Box mv={24}>
          <SecondaryButton translationKey="screens.pathways.secondary_button_label" size="Large" onPress={onClose} />
        </Box> */}
        <Box pb={bottomBackgroundHeight * 0.3} />
      </Animated.ScrollView>
      <GenericHeadingAbsolute
        backgroundColor={"transparent"}
        onLeftIconPress={onClose}
        color="white"
        hasShadow={true}
        scrollValue={scrollY}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
});

export default memo(PathwaysScreen);
