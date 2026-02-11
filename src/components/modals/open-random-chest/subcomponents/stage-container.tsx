import { memo, ReactNode } from "react";

import { Box } from "@atoms";
interface IStageContainerProps {
  children: ReactNode;
  pt?: number;
}

const StageContainer = ({ children, pt }: IStageContainerProps) => {
  return (
    <Box pt={pt} w="100%" h="100%" justifyContent="space-between" alignItems="center">
      {children}
    </Box>
  );
};

export default memo(StageContainer);
