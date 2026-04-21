import React, { memo } from "react";
import { Colours } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { addCommasToNumber } from "@utils";

interface ITournamentScoreCardProps {
  label: string;
  score: number;
}

const TournamentScoreCard = ({ label, score }: ITournamentScoreCardProps) => (
  <Box px={24} pt={8} pb={16} bg={Colours.neutral.n50}>
    <Box br={10} borderWidth={1} borderColor={Colours.metallic.m200} p={16} bg={Colours.neutral.white}>
      <TextTemplate type="l1" color={Colours.neutral.n700}>
        {label}
      </TextTemplate>
      <Box mt={4}>
        <TextTemplate type="h2" color={Colours.neutral.n900}>
          {addCommasToNumber(score)}
        </TextTemplate>
      </Box>
    </Box>
  </Box>
);

export default memo(TournamentScoreCard);
