import { Box, TextTemplate } from "@atoms";
import { Markdown } from "@components/molecules";
import { t } from "@locale";
import { Colours, StyleSheet, templateTextStyles } from "@styles";
import { padNum } from "@utils";
import { memo } from "react";

interface IPathwaysJourneyHeaderProps {
  maxProgress: number;
  timeToNextQuestionnaire: {
    hours: number;
    minutes: number;
    seconds: number;
    hasTimeRemaining: boolean;
  };
}

const PathwaysJourneyHeader = ({ maxProgress, timeToNextQuestionnaire }: IPathwaysJourneyHeaderProps) => {
  return (
    <Box gap={5} alignItems="center">
      <TextTemplate type="b1b" color={Colours.neutral.white}>
        {t("screens.pathways.journey_header")}
      </TextTemplate>
      <Markdown
        markdownStyles={markdownStyles}
        text={
          timeToNextQuestionnaire.hasTimeRemaining
            ? t("screens.pathways.journey_header_starts_in", {
                hours: timeToNextQuestionnaire.hours,
                minutes: padNum(timeToNextQuestionnaire.minutes || 0),
                seconds: padNum(timeToNextQuestionnaire.seconds || 0),
              })
            : t("screens.pathways.journey_header_starts", { maxProgress })
        }
      />
    </Box>
  );
};

const markdownStyles = StyleSheet.create({
  paragraph: {
    paddingVertical: 0,
  },
  text: {
    ...templateTextStyles.l1,
    color: Colours.neutral.white,
    fontVariant: ["tabular-nums"],
  },
});

export default memo(PathwaysJourneyHeader);
