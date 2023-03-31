import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";
import { memo } from "react";

const SudokuCalendarIcon = () => (
  <Svg width={Style.adjust(16)} height={Style.adjust(16)} fill="none" viewBox="0 0 16 16">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.333 3.342c0-.92.747-1.667 1.667-1.667h12c.92 0 1.667.746 1.667 1.667V14c0 .92-.746 1.667-1.667 1.667H2C1.08 15.667.333 14.92.333 14V3.342Zm1.667-1a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3.342a1 1 0 0 0-1-1H2Z"
      fill="#5C5757"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.333 5.843c0-.184.15-.333.334-.333h14.666a.333.333 0 1 1 0 .666H.667a.333.333 0 0 1-.334-.333ZM3.48.333c.185 0 .334.15.334.334v2.636a.333.333 0 1 1-.667 0V.667c0-.184.15-.334.334-.334ZM12.477.333c.184 0 .333.15.333.334v2.636a.333.333 0 1 1-.667 0V.667c0-.184.15-.334.334-.334Z"
      fill="#5C5757"
    />
  </Svg>
);

export default memo(SudokuCalendarIcon);
