import { Box, TextTemplate } from "@atoms";
import { Markdown } from "@components/molecules";
import { t } from "@locale";
import { Colours, StyleSheet, templateTextMarkdownStyles } from "@styles";
import { memo } from "react";

interface IPathwaysJourneyHeaderProps {
  maxProgress: number;
}

const PathwaysJourneyHeader = ({ maxProgress }: IPathwaysJourneyHeaderProps) => {
  return (
    <Box gap={5} alignItems="center">
      <TextTemplate type="b1b" color={Colours.neutral.white}>
        {t("screens.pathways.journey_header")}
      </TextTemplate>
      <Markdown markdownStyles={markdownStyles} text={t("screens.pathways.journey_header_starts", { maxProgress })} />
    </Box>
  );
};

const markdownStyles = StyleSheet.create({
  paragraph: {
    paddingVertical: 0,
  },
  text: {
    ...templateTextMarkdownStyles.l1,
    color: Colours.neutral.white,
    fontVariant: ["tabular-nums"],
  },
});

export default memo(PathwaysJourneyHeader);
