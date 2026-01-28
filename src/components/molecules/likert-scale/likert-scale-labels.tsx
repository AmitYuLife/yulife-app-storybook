import { Box, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { memo } from "react";

type Option = { label: string; value: string };

type Props = {
  options: Option[];
  selectedIndex?: number;
  labelColor?: string;
};

const LikertScaleLabels = ({ options, selectedIndex, labelColor = Colours.neutral.n900 }: Props) => {
  const selectedLabel = options[selectedIndex]?.label;

  return (
    <Box pointerEvents="none" alignItems="center" mt={24}>
      {selectedLabel ? (
        <TextTemplate color={labelColor} textAlign="center" type="b2b">
          {selectedLabel}
        </TextTemplate>
      ) : null}
    </Box>
  );
};

export default memo(LikertScaleLabels);
