import { Box, TextTemplate } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { StarIcon } from "@atoms/icon/star-icon";
import colours from "@styles/colours";
import { addCommasToNumber } from "@utils";
import { memo } from "react";

interface IWrappedChallengeStarsCardProps extends IBoxProps {
  stars: number;
  amount: number;
}

const WrappedChallengeStarsCard = ({ amount, stars, ...props }: IWrappedChallengeStarsCardProps) => {
  return (
    <Box {...props} flex={1 / 3}>
      <Box left={4} top={4} opacity={0.5} w="100%" h="100%" bg={colours.neutral.n250} br={8} position="absolute" />

      <Box bg={colours.neutral.n250} br={8}>
        <Box p={5} br={8} px={15} py={10} gap={8} bg="white" alignItems="center">
          <Box flexDirection="row" pt={5}>
            {Array.from(Array(stars)).map((_, starIndex) => (
              <StarIcon size={21} key={starIndex} />
            ))}
          </Box>
          <Box mt={2} mb={-2}>
            <TextTemplate type="b2b">{addCommasToNumber(amount)}</TextTemplate>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(WrappedChallengeStarsCard);
