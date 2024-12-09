import { Box, TextTemplate } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import colours from "@styles/colours";
import { addCommasToNumber } from "@utils";
import { memo } from "react";

interface IWrappedChallengeCountCardProps extends IBoxProps {
  value: number;
  label: string;
}

const WrappedChallengeCountCard = ({ value, label, ...props }: IWrappedChallengeCountCardProps) => {
  return (
    <>
      <Box w="50%" px={5} pb={5 * 2} {...props}>
        <Box pb={4} pr={0} bg={`${colours.neutral.n250}`} br={14}>
          <Box p={6} br={14} gap={3} bg="white" px={15} py={15} pb={10} flex={1}>
            <TextTemplate type="h2" numberOfLines={1}>
              {addCommasToNumber(value)}
            </TextTemplate>
            <TextTemplate type="b2b" color="#4C5757" numberOfLines={1}>
              {label}
            </TextTemplate>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default memo(WrappedChallengeCountCard);
