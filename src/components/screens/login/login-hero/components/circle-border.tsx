import { Fragment, memo } from "react";
import { Box } from "@atoms";
import { Colours } from "@styles";

type CircleBorderProps = {
  size: number;
  border: number;
  opacity?: number;
};

export const CircleBorder = ({ size, border, opacity = 0.3 }: CircleBorderProps) => {
  return (
    <Fragment>
      <Box
        position="absolute"
        top={-border / 2}
        w={size + border}
        h={size + border}
        bg={Colours.neutral.white}
        opacity={opacity}
        borderTopRadius={100}
        borderBottomRadius={100}
      />
      <Box
        position="absolute"
        top={-border}
        w={size + border * 2}
        h={size + border * 2}
        bg={Colours.neutral.white}
        opacity={opacity}
        borderTopRadius={100}
        borderBottomRadius={100}
      />
    </Fragment>
  );
};

export default memo(CircleBorder);
