import { Box } from "@atoms";
import { LockBicolor } from "@atoms/icon/lock-bicolor";
import { Style } from "@styles";
import { ComponentProps, memo } from "react";

type Props = {
  backgroundColor: string;
};

const absolute = {
  br: Style.adjust(58),
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
} as ComponentProps<typeof Box>;

export const ImageOverlay = memo(({ backgroundColor }: Props) => (
  <Box {...absolute}>
    <Box {...absolute} opacity={0.5} bg={backgroundColor} />
    <Box {...absolute} justifyContent="center" alignItems="center">
      <LockBicolor />
    </Box>
  </Box>
));
