import Box from "@atoms/box/box";
import { memo } from "react";

type Props = {
  children?: React.ReactNode;
};

export const LinkButtonSpacing = memo(({ children }: Props) => (
  <Box ph={22} pb={24} pt={16}>
    {children}
  </Box>
));
