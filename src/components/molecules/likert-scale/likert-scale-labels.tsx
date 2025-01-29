import { Box, TextTemplate } from "@atoms";
import { memo } from "react";

type Props = {
  min?: string;
  minColor?: string;
  max?: string;
  maxColor?: string;
};
const LikertScaleLabels = ({ min, minColor, max, maxColor }: Props) => (
  <Box pointerEvents="none" flexDirection="row" justifyContent="space-between" mt={24}>
    <Box w={96}>
      {min ? (
        <TextTemplate color={minColor} type="b2b">
          {min}
        </TextTemplate>
      ) : null}
    </Box>
    <Box w={96}>
      {max ? (
        <TextTemplate color={maxColor} textAlign="right" type="b2b">
          {max}
        </TextTemplate>
      ) : null}
    </Box>
  </Box>
);

export default memo(LikertScaleLabels);
