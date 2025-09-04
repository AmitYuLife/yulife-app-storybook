import React, { memo } from "react";
import { TextTemplate } from "@components/atoms/text/text-template";
import { Box, Image } from "@atoms";
import { Colours } from "@styles";

interface Props {
  dayLabel: string;
  iconUrl?: string;
  isToday?: boolean;
}

const MoodDay = ({ dayLabel, isToday, iconUrl }: Props) => {
  return (
    <Box key={dayLabel} width={48} flexDirection="column" justifyContent="space-between" alignItems="center">
      <Box mb={12}>
        <TextTemplate type={isToday ? "b2b" : "b2"} color={isToday ? Colours.darkHotPink : Colours.neutral.n800}>
          {dayLabel}
        </TextTemplate>
      </Box>
      {iconUrl ? (
        <Image source={{ uri: iconUrl }} width={24} height={24} resizeMode="cover" />
      ) : (
        <Box width={24} height={24} borderColor={Colours.neutral.n150} borderWidth={1} br={12} />
      )}
    </Box>
  );
};

export default memo(MoodDay);
