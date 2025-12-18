import React, { memo, useMemo } from "react";
import { RollingTextItem } from "@molecules";
import { Box } from "@atoms";

interface IRollingTextSpinProps {
  previousValue: string | number;
  newValue: string | number;
}

const RollingTextSpin = ({ previousValue, newValue }: IRollingTextSpinProps) => {
  const elements = useMemo(() => {
    const nodes = `${newValue}`.split("");
    const previousNodes = `${previousValue}`.split("");

    return nodes.map((node, index) => {
      return <RollingTextItem index={index} oldValue={previousNodes[index]} value={node} key={index} />;
    });
  }, [previousValue, newValue]);

  return (
    <Box gap={0} flexDirection="row" justifyContent={"center"} overflow="hidden" h={62}>
      {elements}
    </Box>
  );
};

export default memo(RollingTextSpin);
