import { StreakTicks } from "@atoms/icon/streak-ticks";
import React from "react";
import { Box, TextTemplate } from "@atoms";

interface IProps {
  streakMax: number;
  streakCompleted: number;
  heading: string;
  textColor: string;
}

const StreakStart = ({ streakMax, streakCompleted, heading, textColor }: IProps) => {
  return (
    <Box alignItems="center">
      <Box mb={24}>
        <TextTemplate type="b1" textAlign="center" color={textColor}>
          {heading}
        </TextTemplate>
      </Box>
      <Box flexDirection="row" dir="ltr">
        {Array.from({ length: streakMax }).map((_, index) => (
          <Box key={index} mh={7}>
            <StreakTicks checked={index < streakCompleted} label={(index + 1).toString()} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default StreakStart;
