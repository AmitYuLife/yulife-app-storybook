import React, { memo } from "react";
import { Colours, Style } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { Pressable } from "@molecules";
import { ArrowIcon } from "@atoms/icon/arrow";

interface ITournamentSectionHeaderProps {
  title: string;
  onPress?: () => void;
}

const TournamentSectionHeader = ({ title, onPress }: ITournamentSectionHeaderProps) => (
  <Box px={24} pt={24} bg={Colours.neutral.n50}>
    <Pressable onPress={onPress} disabled={!onPress} enableAnimation={true} pressedTranslation={0} pressedScale={0.98}>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between">
        <TextTemplate type="b1b">{title}</TextTemplate>
        {onPress ? <ArrowIcon direction="right" size={Style.adjust(20)} /> : null}
      </Box>
    </Pressable>
  </Box>
);

export default memo(TournamentSectionHeader);
