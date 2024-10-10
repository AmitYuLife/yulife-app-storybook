import { Style } from "@styles";
import { memo } from "react";
import Svg, { Rect, Path } from "react-native-svg";

export const CalendarBicolorIcon = memo(() => (
  <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none">
    <Rect width={18} height={17} x={3} y={4} fill="#B9A2FF" rx={2} />
    <Path fill="#7B46FE" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3H3V6Z" />
    <Rect width={16} height={17} x={3} y={4} fill="#ECE4FF" rx={2} />
    <Path
      fill="#A682FF"
      d="M3 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3H3V6ZM8.69 12.06H6.68c-.28 0-.51-.23-.51-.51s.23-.51.51-.51h3.2a.512.512 0 0 1 .38.85L8.8 13.54c1.41.16 1.84 1.14 1.84 2.2 0 1.37-.83 2.16-2.46 2.16-1.04 0-1.86-.5-2.29-1.11a.534.534 0 0 1 .44-.83c.18 0 .31.07.48.26.34.39.72.68 1.37.68.9 0 1.32-.45 1.32-1.16 0-.7-.29-1.2-1.19-1.2h-.62c-.31 0-.54-.23-.54-.52 0-.16.05-.25.13-.35l1.41-1.61ZM13.975 16.9c1.03 0 1.47-.74 1.47-2.5 0-1.74-.44-2.5-1.47-2.5s-1.48.76-1.48 2.5c0 1.76.45 2.5 1.48 2.5Zm0-6c1.78 0 2.61 1.11 2.61 3.5 0 2.4-.83 3.51-2.61 3.51-1.8 0-2.62-1.11-2.62-3.51 0-2.39.82-3.5 2.62-3.5Z"
    />
    <Rect width={2} height={5} x={7} y={2} fill="#7B46FE" rx={1} />
    <Rect width={2} height={5} x={14} y={2} fill="#7B46FE" rx={1} />
  </Svg>
));
