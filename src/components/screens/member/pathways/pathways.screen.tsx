import React, { memo } from "react";
import { Box } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";

interface Props {
  onClose: () => void;
}

const PathwaysScreen = ({ onClose }: Props) => {
  return (
    <Box flex={1}>
      <GenericHeadingAbsolute onRightIconPress={onClose} />
    </Box>
  );
};

export default memo(PathwaysScreen);
