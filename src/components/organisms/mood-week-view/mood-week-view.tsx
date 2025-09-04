import React, { memo } from "react";
import { TextTemplate } from "@components/atoms/text/text-template";
import { ArrowButton, TouchableOpacityWithDelay } from "@components/molecules";
import { Box } from "@atoms";
import { Colours } from "@styles";
import { t } from "@locale";
import MoodDay from "./subcomponets/mood-day";

type MoodData = {
  dayLabel: string;
  iconUrl?: string;
  isToday?: boolean;
};

interface IMoodViewProps {
  data: MoodData[];
  openCalendar: () => void;
}

const MoodWeekView = ({ data = [], openCalendar }: IMoodViewProps) => {
  return (
    <Box flexDirection="column" p={16}>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" mb={16}>
        <TextTemplate type="b2b">{t("screens.pathways.user_mood.heading")}</TextTemplate>
        <TouchableOpacityWithDelay onPress={openCalendar}>
          <Box flexDirection="row" alignItems="center" gap={8}>
            <TextTemplate type="b2">{t("screens.pathways.user_mood.view_calendar")}</TextTemplate>
            <ArrowButton color={Colours.primary.p600} size={16} />
          </Box>
        </TouchableOpacityWithDelay>
      </Box>

      <Box flexDirection="row" justifyContent="space-between" alignItems="center">
        {data.map(({ dayLabel, iconUrl, isToday }, index) => (
          <MoodDay key={`${dayLabel}-${index}`} dayLabel={dayLabel} isToday={isToday} iconUrl={iconUrl} />
        ))}
      </Box>
    </Box>
  );
};

export default memo(MoodWeekView);
