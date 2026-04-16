import React, { memo } from "react";
import { Colours } from "@styles";
import { Box } from "@atoms";
import { Pressable } from "@molecules";
import { PADDING_TOP } from "@styles/top-bar.styles";
import { TournamentInfoIcon } from "../tournament-info-icon/tournament-info-icon";

interface ITournamentHowToPlayButtonProps {
  onPress: () => void;
}

const TournamentHowToPlayButton = ({ onPress }: ITournamentHowToPlayButtonProps) => (
  <Box position="absolute" top={PADDING_TOP + 8} right={16} zIndex={10}>
    <Pressable onPress={onPress} delay={200} enableAnimation={true}>
      <Box w={40} h={40} br={20} bg={Colours.neutral.white} alignItems="center" justifyContent="center">
        <TournamentInfoIcon width={22} height={22} />
      </Box>
    </Pressable>
  </Box>
);

export default memo(TournamentHowToPlayButton);
