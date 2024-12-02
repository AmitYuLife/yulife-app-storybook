import { Box, TextTemplate } from "@atoms";
import { memo } from "react";

type Args = {
  heading: string;
  subheading: string;
  color?: string;
};

export const UserSearchHeading = memo(({ heading, subheading, color }: Args) => (
  <Box alignItems="center">
    <TextTemplate color={color} type="b2b" numberOfLines={1}>
      {heading}
    </TextTemplate>
    <TextTemplate color={color} type="l1" numberOfLines={1}>
      {subheading}
    </TextTemplate>
  </Box>
));
