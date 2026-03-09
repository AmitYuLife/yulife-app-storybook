import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { Box, TextTemplate } from "@atoms";
import { ProgressEnd } from "@atoms/icon/progress-end";
import { ContentItemWrapper } from "@components/sdui";
import { Colours } from "@styles";
import { ComponentProps, memo } from "react";

type Props = {
  progress: {
    current: number;
    max: number;
    title?: string;
    info?: string;
  };
  info?: ComponentProps<typeof ContentItemWrapper>;
};

const ProductGameItemProgress = ({ progress, info }: Props) => {
  const { theme } = useTheme();

  return !progress.max ? null : (
    <Box mt={16}>
      <Box pr={16} pl={16} flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box flexDirection="row" alignItems="center">
          {!progress.title ? null : (
            <TextTemplate type="l1" color={Colours.neutral.n900}>
              {progress.title}
            </TextTemplate>
          )}
          {!progress.info ? null : (
            <TextTemplate type="l1b" color={Colours.neutral.n900}>
              {" "}
              {progress.info}
            </TextTemplate>
          )}
        </Box>
        {!info ? null : (
          <Box>
            <ContentItemWrapper {...info} />
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
        />
        <Box
          bg={theme.colors.primary.p400}
          position="absolute"
          left={16}
          top={4}
          right={16}
          bottom={0}
          h={8}
          br={8}
          w={`${Math.min(progress.current / progress.max, 0.95) * 100}%`}
        />
        <Box position="absolute" right={16} top={0}>
          <ProgressEnd />
        </Box>
      </Box>
    </Box>
  );
};

export default memo(ProductGameItemProgress);
