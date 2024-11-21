import { Box, TextTemplate } from "@atoms";
import { memo } from "react";

type Args = {
  heading: string;
  subheading: string;
};

export const Heading = memo(({ heading, subheading }: Args) => (
  <Box alignItems="center">
    <TextTemplate type="l1" numberOfLines={1}>
      {heading}
    </TextTemplate>
    <TextTemplate type="b2b">{subheading}</TextTemplate>
  </Box>
));
