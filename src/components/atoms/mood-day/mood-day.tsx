import React, { memo, useMemo } from "react";
import { Image } from "react-native";
import { TextTemplate } from "../text/text-template";
import { Colours } from "@styles";
import Box from "../box/box";

interface IProps {
  day: number;
  moodImage?: string;
  isToday?: boolean;
}

const MoodDay = ({ day, moodImage, isToday = false }: IProps) => {
  const isTodayProps = useMemo(() => {
    if (!isToday) {
      return {};
    }

    return {
      bg: Colours.primary.p600,
      br: 24,
      pl: 1,
      pt: 1,
    };
  }, [isToday]);

  return (
    <Box alignItems="center" justifyContent="center" gap={8}>
      <Box height={33} width={33} alignItems="center" justifyContent="center" {...isTodayProps}>
        <TextTemplate type={isToday ? "b2b" : "b2"} color={isToday ? Colours.neutral.white : Colours.neutral.n800}>
          {day}
        </TextTemplate>
      </Box>
      {moodImage ? (
        <Image source={{ uri: moodImage }} width={24} height={24} />
      ) : (
        <Box width={24} height={24} br={12} borderWidth={1} borderColor={Colours.neutral.n150} />
      )}
    </Box>
  );
};

export default memo(MoodDay);
