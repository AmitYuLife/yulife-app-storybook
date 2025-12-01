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
    <Box key={dayLabel} width={32} flexDirection="column" justifyContent="space-between" alignItems="center">
      <Box mb={12}>
        <TextTemplate type={isToday ? "b2b" : "b2"} color={isToday ? Colours.inkStrong : Colours.inkBase}>
          {dayLabel}
        </TextTemplate>
      </Box>
      {iconUrl ? (
        <Image source={{ uri: iconUrl }} width={24} height={24} resizeMode="cover" />
      ) : (
        <Box
          width={24}
          height={24}
          borderColor={Colours.neutral.n250}
          bg={Colours.neutral.n20}
          borderWidth={1}
          br={12}
        />
      )}
    </Box>
  );
};

export default memo(MoodDay);
