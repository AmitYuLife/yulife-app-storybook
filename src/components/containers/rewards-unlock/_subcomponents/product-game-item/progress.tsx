import { Box, TextTemplate } from "@atoms";
import { ProgressEnd } from "@atoms/icon/progress-end";
import { Colours } from "@styles";
import { memo } from "react";

type Props = {
  current: number;
  max: number;
  title?: string;
  info?: string;
};

export const ProductGameItemProgress = memo(({ current, max, title, info }: Props) =>
  !max ? null : (
    <Box mt={16}>
      <Box pr={16} pl={16} flexDirection="row">
        {!title ? null : (
          <TextTemplate type="l2" color={Colours.neutral.n900}>
            {title}
          </TextTemplate>
        )}
        {!info ? null : (
          <Box ml="auto">
            <TextTemplate type="l2b" color={Colours.neutral.n900}>
              {info}
            </TextTemplate>
          </Box>
        )}
      </Box>
      <Box mt={4} h={16} pr={16} pl={16}>
        <Box
          borderColor={Colours.neutral.n150}
          borderWidth={1}
          bg="white"
          position="absolute"
          left={16}
          top={4}
          right={0}
          bottom={0}
          w="98%"
          br={8}
          h={8}
        ></Box>
        <Box
          bg={Colours.primary.p400}
          borderWidth={1}
          borderColor={Colours.primary.p400}
          position="absolute"
          left={16}
          top={4}
          right={16}
          bottom={0}
          h={8}
          br={8}
          w={`${Math.min(current / max, 0.95) * 100}%`}
        ></Box>
        <Box position="absolute" right={16} top={0}>
          <ProgressEnd />
        </Box>
      </Box>
    </Box>
  )
);
