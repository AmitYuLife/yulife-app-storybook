import { Box, TextTemplate } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { StarIcon } from "@atoms/icon/star-icon";
import { t } from "@locale";
import colours from "@styles/colours";
import { memo } from "react";

interface IWrappedChallengeStarsCardProps extends IBoxProps {
  stars: number;
  amount: number;
}

const WrappedChallengeStarsCard = ({ amount, stars, ...props }: IWrappedChallengeStarsCardProps) => {
  return (
    <Box flexDirection="row" {...props}>
      <Box pb={3} bg={colours.neutral.n250} br={8}>
        <Box p={5} br={8} px={15} py={10} gap={15} bg="white" flexDirection="row" alignItems="center">
          <Box flexDirection="row">
            {Array.from(Array(stars)).map((_, starIndex) => (
              <StarIcon size={24} key={starIndex} />
            ))}
          </Box>
          <Box mt={2} mb={-2}>
            <TextTemplate type="b2b">{t("screens.wrapped.stage_1.challenge_count", { amount })}</TextTemplate>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(WrappedChallengeStarsCard);
