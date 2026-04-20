import React, { memo } from "react";
import { Colours, Style } from "@styles";
import { PADDING_TOP } from "@styles/top-bar.styles";
import { Box, Image, TextTemplate } from "@atoms";
import { Pressable } from "@molecules";
import { t } from "@locale";
import { TournamentInfoIcon } from "../tournament-info-icon/tournament-info-icon";

const headerIllustration = require("../../assets/header-illustration.webp");

interface ITournamentHeaderProps {
  title: string;
  labels?: string[];
  daysLeft?: number;
  bgColor: string;
  onHowToPlay?: () => void;
}

const BULLET_CHARACTER = "\u2022";
const TournamentHeader = ({ title, labels, daysLeft, bgColor, onHowToPlay }: ITournamentHeaderProps) => (
  <Box minHeight={230} pt={PADDING_TOP + 50} bg={bgColor} justifyContent="flex-end">
    {onHowToPlay ? (
      <Box position="absolute" top={PADDING_TOP + 8} right={16} zIndex={10}>
        <Pressable onPress={onHowToPlay} delay={200} enableAnimation={true}>
          <Box w={40} h={40} br={20} bg={Colours.neutral.white} alignItems="center" justifyContent="center">
            <TournamentInfoIcon width={22} height={22} />
          </Box>
        </Pressable>
      </Box>
    ) : null}
    <Box position="absolute" right={0} top={0} bottom={0} opacity={0.8} alignItems="flex-end">
      <Box justifyContent="flex-end">
        <Image
          source={headerIllustration}
          width={Style.adjust(280)}
          contentFit="contain"
          top={100}
          contentPosition={{ right: "0" }}
          height={Style.adjust(280)}
          suppressLoadingUi={true}
        />
      </Box>
    </Box>
    <Box px={24} pb={24} justifyContent="flex-end">
      <TextTemplate type="b1b" color={Colours.neutral.white}>
        {title}
      </TextTemplate>
      {labels ? (
        <Box mt={4}>
          <TextTemplate type="b2" color={Colours.neutral.white}>
            {labels.join(` ${BULLET_CHARACTER} `)}
          </TextTemplate>
        </Box>
      ) : null}
      <Box mt={12}>
        <Box bg={Colours.neutral.white} br={4} pv={4} ph={8} alignSelf="flex-start">
          <TextTemplate type="l2" color={Colours.neutral.n900}>
            {t("screens.tournaments.days_left", { smart_count: daysLeft })}
          </TextTemplate>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default memo(TournamentHeader);
