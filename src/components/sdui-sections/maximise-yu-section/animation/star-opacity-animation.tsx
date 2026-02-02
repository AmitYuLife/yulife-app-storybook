import { memo } from "react";
import { StarAnimation } from "./star-animation";
import { Box } from "@atoms";

export const StarOpacityAnimation = memo(() => (
  <Box pointerEvents="none" position="absolute" top={-4} left={-4} right={-4} bottom={-4}>
    <Box position="absolute" bottom={16} left={0}>
      <StarAnimation iterations={2} />
    </Box>
    <Box position="absolute" bottom={4} right={12}>
      <StarAnimation iterations={1} />
    </Box>
    <Box position="absolute" top={0} left={16}>
      <StarAnimation iterations={1} />
    </Box>
    <Box position="absolute" top={4} right={4}>
      <StarAnimation iterations={2} />
    </Box>
  </Box>
));
