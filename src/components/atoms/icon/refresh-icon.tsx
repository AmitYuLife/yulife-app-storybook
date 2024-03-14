import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
  colour?: string;
}

export const RefreshIcon = memo(({ width = 24, height = 24, colour = "#5C5757" }: IProps) => (
  <Svg width={Style.adjust(width)} height={Style.adjust(height)} fill="none" viewBox="0 0 24 24">
    <Path
      fill={colour}
      d="M12 3.5a8.5 8.5 0 0 0-4.5 15.712V16a.5.5 0 0 1 1 0v4.5h-.716l-.007.012-.024-.012H4a.5.5 0 0 1 0-1h2.168A9.5 9.5 0 0 1 12 2.5a.5.5 0 0 1 0 1ZM16.5 8a.5.5 0 0 1-1 0V3.5h.716l.006-.012.025.012H20a.5.5 0 0 1 0 1h-2.169A9.5 9.5 0 0 1 12 21.5a.5.5 0 0 1 0-1 8.5 8.5 0 0 0 4.5-15.713V8Z"
    />
  </Svg>
));
