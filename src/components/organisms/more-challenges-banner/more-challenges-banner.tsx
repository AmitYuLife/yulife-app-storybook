import { Box, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import React, { memo } from "react";
import MoreChallengesImage from "./more-challenges-image";
import { useTranslation } from "@hooks";

const MoreChallengesBanner = () => {
  const t = useTranslation([
    "screens.challenges.history.unlock_banner_title",
    "screens.challenges.history.unlock_banner_description_start",
    "screens.challenges.history.unlock_banner_description_bold",
    "screens.challenges.history.unlock_banner_description_end",
  ]);

  return (
    <Box
      bg={Colours.products.fib.u100S4}
      br={14}
      p={16}
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box right={0} bottom={0} position="absolute">
        <MoreChallengesImage />
      </Box>

      <Box w="60%">
        <Box mb={8}>
          <TextTemplate type="b2b" color={Colours.neutral.n900}>
            {t["screens.challenges.history.unlock_banner_title"]}
          </TextTemplate>
        </Box>
        <TextTemplate type="b2" color={Colours.neutral.n900}>
          {t["screens.challenges.history.unlock_banner_description_start"]}
          <TextTemplate type="b2b" color={Colours.neutral.n900}>
            {t["screens.challenges.history.unlock_banner_description_bold"]}
          </TextTemplate>
          {t["screens.challenges.history.unlock_banner_description_end"]}
        </TextTemplate>
      </Box>
    </Box>
  );
};

export default memo(MoreChallengesBanner);
