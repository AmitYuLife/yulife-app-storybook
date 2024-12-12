import { Box, Image, TextTemplate } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { Colours } from "@styles";
import colours from "@styles/colours";
import { addCommasToNumber } from "@utils";
import { ImageSource } from "expo-image";
import { memo } from "react";

interface IWrappedChallengeCountCardProps extends IBoxProps {
  value: number;
  label: string;
  icon: ImageSource;
}

const WrappedChallengeCountCard = ({ value, icon, label, ...props }: IWrappedChallengeCountCardProps) => {
  return (
    <>
      <Box flex={1} px={4} pb={14} {...props}>
        <Box bg={`${colours.neutral.n250}`} br={14}>
          <Box
            p={6}
            br={8}
            pl={15}
            pr={10}
            py={8}
            px={20}
            pb={10}
            flex={1}
            gap={14}
            bg="white"
            flexDirection="row"
            alignItems="center"
          >
            <Image suppressLoadingUi={true} width={20} height={20} source={icon} />
            <Box gap={5} flexDirection="row" alignItems="center">
              <TextTemplate type="b2b" color={Colours.primary.p400} numberOfLines={1}>
                {addCommasToNumber(value)}
              </TextTemplate>
              <TextTemplate type="b2b" color="#4C5757">
                {label}
              </TextTemplate>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default memo(WrappedChallengeCountCard);
