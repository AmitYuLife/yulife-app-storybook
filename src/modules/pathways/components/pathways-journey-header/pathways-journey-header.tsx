import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Colours } from "@styles";
import moment from "moment";
import { memo, useCallback, useEffect, useState } from "react";

interface IPathwaysJourneyHeaderProps {
  count: number;
  nextQuestionnaireLocalDate: string;
}

const TIME_REMAINING_REFRESH_RATE_MS = 1000;

const PathwaysJourneyHeader = ({ count, nextQuestionnaireLocalDate }: IPathwaysJourneyHeaderProps) => {
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
    <Box gap={5} w="100%" alignItems="center">
      <TextTemplate type="b1b" color={Colours.neutral.white}>
        {t("screens.pathways.journey_header", { count })}
      </TextTemplate>
      <TextTemplate type="b2" color={Colours.neutral.white}>
        {timeRemaining.hasTimeRemaining
          ? t("screens.pathways.journey_header_starts_in", {
              hours: timeRemaining.hours,
              minutes: timeRemaining.minutes,
              seconds: timeRemaining.seconds || "00",
            })
          : t("screens.pathways.journey_header_starts")}
      </TextTemplate>
    </Box>
  );
};

export default memo(PathwaysJourneyHeader);
