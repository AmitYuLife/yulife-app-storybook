import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Box } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import PathwaysJourneyHeader from "../pathways-journey-header/pathways-journey-header";
import PathwaysReflectionItem from "../pathways-reflection-item/pathways-reflection-item";
import PathwaysReflectChest from "../pathways-reflection-chest/pathways-reflect-chest";
import { PATHWAYS_REFLECTION_ITEMS, PATHWAYS_REFLECTION_ITEM, PATHWAYS_REFLECT_CHEST } from "@ids";
import moment from "moment";
import { PathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";
import { PathwaysReflectionStatus } from "../../pathways.types";
import { SwimmingFish } from "@molecules";
import { DETOX_ENABLED } from "@services/socket";

interface IPathwaysHeaderProps extends IBoxProps {
  onReflect: () => void;
  nextQuestionnaireLocalDate: string;
  reflectionProgress: number;
  reflectedToday: boolean;
  coinAwards: number[];
  maxProgress: number;
  pathwayChallenge: PathwayChallenge;
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
  reflectionProgress,
  pathwayChallenge,
  ...boxProps
}: IPathwaysHeaderProps) => {
  const finalItemStatus = useMemo(() => {
    return getReflectionItemStatus(maxProgress - 1, reflectionProgress, reflectedToday, maxProgress);
  }, [maxProgress, reflectionProgress, reflectedToday]);

  const finalItemOnPress = useMemo(() => {
    if (finalItemStatus === "active") {
      return onReflect;
    }

    if (finalItemStatus === "completed") {
      return pathwayChallenge?.onPress;
    }

    return undefined;
  }, [onReflect, pathwayChallenge, finalItemStatus]);

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
    <Box flex={1} width="100%" disableAutoAdjust={true} mt={7} {...boxProps}>
      {DETOX_ENABLED ? null : (
        <Box position="absolute" top={190} width={"100%"} h={40}>
          <SwimmingFish duration={12000} delay={2000} endY={100} />
        </Box>
      )}
      <Box mt={0} gap={20} alignItems="center">
        <PathwaysJourneyHeader maxProgress={maxProgress} timeToNextQuestionnaire={timeRemaining} />
        <Box
          flexWrap="wrap"
          flexDirection="row"
          gap={BOX_GAP}
          justifyContent="center"
          testID={PATHWAYS_REFLECTION_ITEMS(MAX_REFLECTION_ITEMS)}
          maxWidth={(BOX_GAP + BOX_SIZE) * 2}
        >
          {Array.from({ length: MAX_REFLECTION_ITEMS }).map((_, index) => {
            const itemStatus = getReflectionItemStatus(index, reflectionProgress, reflectedToday, maxProgress);
            const onPress = itemStatus === "active" ? onReflect : undefined;

            return (
              <Box w={BOX_SIZE} key={index} flexDirection="row" testID={PATHWAYS_REFLECTION_ITEM(index, itemStatus)}>
                <PathwaysReflectionItem
                  onPress={onPress}
                  yucoinAmount={coinAwards[index]}
                  status={itemStatus}
                  timeToNextQuestionnaire={timeRemaining}
                  height={BOX_SIZE}
                />
              </Box>
            );
          })}
          <Box w={BOX_SIZE * 2 + BOX_GAP} flexDirection="row" testID={PATHWAYS_REFLECT_CHEST(finalItemStatus)}>
            <PathwaysReflectChest
              onPress={finalItemOnPress}
              yucoinAmount={coinAwards[coinAwards.length - 1]}
              status={finalItemStatus}
              timeToNextQuestionnaire={timeRemaining}
              isChallengeCompleted={pathwayChallenge?.isCompleted}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const getReflectionItemStatus = (
  index: number,
  reflectionProgress: number,
  reflectedToday: boolean,
  maxProgress: number
): PathwaysReflectionStatus => {
  if (reflectionProgress === 0 && index === maxProgress - 1 && reflectedToday) {
    // they have completed the final item today
    // the progress will be reset to 0 already, so we
    // need to show the item as completed not locked
    return "completed";
  }

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
