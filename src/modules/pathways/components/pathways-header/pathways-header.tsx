import { memo, useCallback, useEffect, useState } from "react";
import { Box, Image } from "@atoms";
import { Style, TOP_BAR } from "@styles";
import moment from "moment";
import ButtonPulseAnimationWrapper from "@components/molecules/button/animation/button-pulse-animation-wrapper";
import { Button } from "@components/molecules";
import PathwayStreaks from "../pathway-streaks/pathway-streaks";

interface Props {
  onReflect: () => void;
  nextQuestionnaireLocalDate: string;
  reflectionProgress: number;
  reflectedToday: boolean;
  maxProgress: number;
  streakAwardId?: string;
  isLoading: boolean;
  isStreaksEnabled: boolean;
}

const TIME_REMAINING_REFRESH_RATE_MS = 5000;

const PathwaysHeader = ({
  onReflect,
  nextQuestionnaireLocalDate,
  reflectedToday,
  maxProgress,
  streakAwardId,
  isLoading,
  reflectionProgress,
  isStreaksEnabled,
}: Props) => {
  // if the next questionnaire local date is today, enable the reflect button,
  // else disable it and count down to the next day
  const [timeRemaining, setTimeRemaining] = useState({
    hasTimeRemaining: true,
    hours: 0,
    minutes: 0,
  });

  const updateTimeRemaining = useCallback(() => {
    const secondsRemaining = moment(nextQuestionnaireLocalDate).diff(moment(), "seconds");
    const hours = Math.floor(secondsRemaining / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    setTimeRemaining({ hasTimeRemaining: secondsRemaining > 0, hours, minutes });
  }, [nextQuestionnaireLocalDate]);

  useEffect(() => {
    updateTimeRemaining();
    const interval = setInterval(updateTimeRemaining, TIME_REMAINING_REFRESH_RATE_MS);
    return () => clearInterval(interval);
  }, [updateTimeRemaining]);

  return (
    <Box flex={1} width="100%" disableAutoAdjust={true} pt={TOP_BAR.TOP_BAR_WITH_PAD} h={Style.adjust(550)}>
      {!isStreaksEnabled ? (
        <Box position="absolute" top={-50} width={"100%"}>
          <Image
            source={require("./pathways-header-background.webp")}
            width={"100%"}
            height={Style.adjust(512)}
            contentFit="cover"
          />
        </Box>
      ) : null}
      {isStreaksEnabled ? (
        <PathwayStreaks
          currentStreak={reflectionProgress}
          reflectedToday={reflectedToday}
          maxProgress={maxProgress}
          streakAwardId={streakAwardId}
          isLoading={isLoading}
        />
      ) : null}
      <Box position="absolute" bottom={50} alignSelf="center">
        <ButtonPulseAnimationWrapper animatePulse={!timeRemaining.hasTimeRemaining} pulseVerticalOffset={5}>
          <Button
            size="Medium"
            onPress={onReflect}
            translationKey={timeRemaining.hasTimeRemaining ? "screens.pathways.reflect_in" : "screens.pathways.reflect"}
            translationArgs={timeRemaining}
            disabled={timeRemaining.hasTimeRemaining}
          />
        </ButtonPulseAnimationWrapper>
      </Box>
    </Box>
  );
};

export default memo(PathwaysHeader);
