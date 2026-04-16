import React, { memo } from "react";
import { Colours, Style } from "@styles";
import { PADDING_TOP } from "@styles/top-bar.styles";
import { Box, Image, TextTemplate } from "@atoms";
import { t } from "@locale";

const headerIllustration = require("../../assets/header-illustration.webp");

interface ITournamentHeaderProps {
  title: string;
  labels?: string[];
  daysLeft?: number;
  bgColor: string;
}

const BULLET_CHARACTER = "\u2022";
const TournamentHeader = ({ title, labels, daysLeft, bgColor }: ITournamentHeaderProps) => (
  <Box overflow="hidden" minHeight={200} pt={PADDING_TOP + 50} bg={bgColor}>
    <Box position="absolute" right={0} top={0} bottom={0} opacity={0.8} alignItems="flex-end">
      <Image
        source={headerIllustration}
        width={Style.adjust(200)}
        resizeMode="cover"
        height={Style.adjust(200)}
        suppressLoadingUi={true}
      />
    </Box>
    <Box px={24} pb={24} justifyContent="flex-end">
      <TextTemplate type="b1b" color={Colours.neutral.white}>
        {title}
      </TextTemplate>
      {labels ? (
        <Box mt={4}>
          <TextTemplate type="l1" color={Colours.neutral.white}>
            {labels.join(` ${BULLET_CHARACTER} `)}
          </TextTemplate>
        </Box>
      ) : null}
      {daysLeft ? (
        <Box mt={12}>
          <Box bg={Colours.neutral.white} br={4} pv={4} ph={8} alignSelf="flex-start">
            <TextTemplate type="l2" color={Colours.neutral.n900}>
              {t("screens.tournaments.days_left", { smart_count: daysLeft })}
            </TextTemplate>
          </Box>
        </Box>
      ) : null}
    </Box>
  </Box>
);

export default memo(TournamentHeader);
