import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Box } from "@atoms";
import { Colours, TOP_BAR } from "@styles";
import PathwayStreaks from "../pathway-streaks/pathway-streaks";
import PathwaysJourneyHeader from "../pathways-journey-header/pathways-journey-header";
import PathwaysReflectionItem from "../pathways-reflection-item/pathways-reflection-item";
import PathwaysReflectChest from "../pathways-reflection-chest/pathways-reflect-chest";
import { t } from "@locale";
import { PATHWAYS_REFLECTION_ITEMS, PATHWAYS_REFLECTION_ITEM, PATHWAYS_REFLECT_CHEST } from "@ids";
import moment from "moment";

interface IPathwaysHeaderProps {
  onReflect: () => void;
  nextQuestionnaireLocalDate: string;
  reflectionProgress: number;
  reflectedToday: boolean;
  coinAwards: number[];
  maxProgress: number;
  streakAwardId?: string;
}

const BOX_SIZE = 134;
const BOX_GAP = 16;

const TIME_REMAINING_REFRESH_RATE_MS = 1000;

const MAX_REFLECTION_ITEMS = 4;

const PathwaysHeader = ({
  onReflect,
  nextQuestionnaireLocalDate,
  reflectedToday,
  maxProgress,
  coinAwards,
  streakAwardId,
  reflectionProgress,
}: IPathwaysHeaderProps) => {
  const finalItemStatus = useMemo(() => {
    return getReflectionItemStatus(maxProgress - 1, reflectionProgress, reflectedToday);
  }, [maxProgress, reflectionProgress, reflectedToday]);

  const [timeRemaining, setTimeRemaining] = useState({
    hasTimeRemaining: true,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateTimeRemaining = useCallback(() => {
    const secondsRemaining = moment(nextQuestionnaireLocalDate).diff(moment(), "seconds");
    const hours = Math.floor(secondsRemaining / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;
    setTimeRemaining({ hasTimeRemaining: secondsRemaining > 0, hours, minutes, seconds });
  }, [nextQuestionnaireLocalDate]);

  useEffect(() => {
    updateTimeRemaining();
    const interval = setInterval(updateTimeRemaining, TIME_REMAINING_REFRESH_RATE_MS);
    return () => clearInterval(interval);
  }, [updateTimeRemaining]);

  return (
    <Box flex={1} width="100%" disableAutoAdjust={true} pt={TOP_BAR.TOP_BAR_WITH_PAD} mt={7}>
      <PathwayStreaks
        currentStreak={reflectionProgress}
        reflectedToday={reflectedToday}
        maxProgress={maxProgress}
        streakAwardId={streakAwardId}
        textColor={Colours.neutral.white}
        completedBorderColor={Colours.pathways.streakBorder}
        notCompletedBorderColor={Colours.pathways.streakBorder}
        notCompletedColor={Colours.pathways.background}
        notCompletedChestForegroundColor={Colours.pathways.streakBorder}
        notCompletedChestBackgroundColor={Colours.pathways.background}
      />
      <Box mt={30} gap={20}>
        <PathwaysJourneyHeader maxProgress={maxProgress} timeToNextQuestionnaire={timeRemaining} />
        <Box
          flexWrap="wrap"
          flexDirection="row"
          gap={BOX_GAP}
          justifyContent="center"
          testID={PATHWAYS_REFLECTION_ITEMS(MAX_REFLECTION_ITEMS)}
        >
          {Array.from({ length: MAX_REFLECTION_ITEMS }).map((_, index) => {
            const itemStatus = getReflectionItemStatus(index, reflectionProgress, reflectedToday);
            const onPress = itemStatus === "active" ? onReflect : undefined;

            return (
              <Box w={BOX_SIZE} key={index} flexDirection="row" testID={PATHWAYS_REFLECTION_ITEM(index, itemStatus)}>
                <PathwaysReflectionItem
                  label={
                    itemStatus === "active"
                      ? t("screens.pathways.reflection_active_label")
                      : t("screens.pathways.reflection_inactive_label")
                  }
                  onPress={onPress}
                  yucoinAmount={coinAwards[index]}
                  status={itemStatus}
                  timeToNextQuestionnaire={timeRemaining}
                />
              </Box>
            );
          })}
          <Box w={BOX_SIZE * 2 + BOX_GAP} flexDirection="row" testID={PATHWAYS_REFLECT_CHEST(finalItemStatus)}>
            <PathwaysReflectChest
              onPress={reflectionProgress >= maxProgress - 1 ? onReflect : undefined}
              yucoinAmount={coinAwards[coinAwards.length - 1]}
              status={finalItemStatus}
              timeToNextQuestionnaire={timeRemaining}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const getReflectionItemStatus = (index: number, reflectionProgress: number, reflectedToday: boolean) => {
  if (reflectionProgress < index) {
    return "locked";
  }

  if (reflectedToday && reflectionProgress === index) {
    // this item will be unlocked tomorrow
    return "next";
  }

  if (reflectionProgress === index) {
    return "active";
  }

  return "completed";
};

export default memo(PathwaysHeader);
