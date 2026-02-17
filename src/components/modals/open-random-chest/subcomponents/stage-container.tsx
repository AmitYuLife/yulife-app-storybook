import { memo, ReactNode } from "react";

import { Box } from "@atoms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Style } from "@styles";
interface IStageContainerProps {
  children: ReactNode;
  pt?: number;
}

const StageContainer = ({ children, pt }: IStageContainerProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Box
      pt={pt}
      w="100%"
      h="100%"
      justifyContent="space-between"
      alignItems="center"
      pb={bottom + Style.adjust(20)}
      disableAutoAdjust={true}
    >
      {children}
    </Box>
  );
};

export default memo(StageContainer);
