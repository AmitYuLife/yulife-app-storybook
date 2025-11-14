import { memo, useCallback, useEffect, useState } from "react";
import { Box, Image } from "@atoms";
import { Button } from "@components/molecules";
import { Colours, Style } from "@styles";
import moment from "moment";
import ButtonPulseAnimationWrapper from "@components/molecules/button/animation/button-pulse-animation-wrapper";
import { PathwayStreaks } from "./pathway-streaks";

// prevent a white BG from showing on scroll
const TOP_SCROLL_UNDERLAY_HEIGHT = 600;

const TIME_REMAINING_REFRESH_RATE_MS = 5000; // 5 seconds

interface Props {
  onReflect: () => void;
  nextQuestionnaireLocalDate: string;

  // TODO - re-instate progress UI in later pathways release
  reflectionProgress: number;
  reflectedToday: boolean;
  maxProgress: number;
  streakAwardId?: string;
  isLoading: boolean;
  isStreaksEnabled: boolean;
}

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
  const [timeRemaining, setTimeRemaining] = useState({ hasTimeRemaining: true, hours: 0, minutes: 0 });

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
    <Box flex={1} height={512} width={"100%"} pt={100}>
      <Box
        position="absolute"
        top={-TOP_SCROLL_UNDERLAY_HEIGHT}
        left={0}
        right={0}
        height={TOP_SCROLL_UNDERLAY_HEIGHT}
        bg={Colours.pathways.background}
      />

      <Box position="absolute" top={0} height={512} width={"100%"}>
        <Image
          source={require("@assets/pathways/reflection-background.webp")}
          width={"100%"}
          height={Style.adjust(512)}
          resizeMode="cover"
        />
      </Box>
      {isStreaksEnabled ? (
        <PathwayStreaks
          currentStreak={reflectionProgress}
          reflectedToday={reflectedToday}
          maxProgress={maxProgress}
          streakAwardId={streakAwardId}
          isLoading={isLoading}
        />
      ) : null}

      <Box position="absolute" bottom={52} alignSelf="center">
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
      {/* <Box width={"100%"} px={16}>
        <PathwaysReflectProgress progress={reflectionProgress} completedToday={reflectedToday} />
      </Box> */}
    </Box>
  );
};

export default memo(PathwaysHeader);
