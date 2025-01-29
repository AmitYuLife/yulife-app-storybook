import { Box } from "@atoms";
import { Colours, Style } from "@styles";
import { memo } from "react";
import Svg, { Polygon } from "react-native-svg";

const SvgBackground = () => {
  return (
    <Box width={Style.DEVICE_WIDTH} disableAutoAdjust={true} height={Style.DEVICE_HEIGHT}>
      <Box mt={-TRIANGLE_HEIGHT}>
        <Svg width={Style.DEVICE_WIDTH} height={Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT * 2}>
          <Polygon
            points={`
                            0,${TRIANGLE_HEIGHT}
                            ${Style.DEVICE_WIDTH},0
                            ${Style.DEVICE_WIDTH},${Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT * 2}
                            0,${Style.DEVICE_HEIGHT + TRIANGLE_HEIGHT}
                        `}
            fill={Colours.neutral.white}
          />
        </Svg>
      </Box>
    </Box>
  );
};

export const TRIANGLE_HEIGHT = Style.adjust(100);

export default memo(SvgBackground);
