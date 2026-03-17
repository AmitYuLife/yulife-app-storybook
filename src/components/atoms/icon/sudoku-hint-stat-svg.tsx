import { Style } from "@styles";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

const SudokuHintStatIcon = () => {
  return (
    <Svg width={Style.adjust(24)} height={Style.adjust(24)} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.166 18.562H9.833C5.505 18.562 2 15.061 2 10.738v-.914C2 5.501 5.505 2 9.833 2h6.333C20.495 2 24 5.501 24 9.824v.914a7.812 7.812 0 01-6.675 7.733l-1.159.091z"
        fill="#CFBCFF"
      />
      <Path
        d="M14.715 22.185L9.96 18.562H7.833C3.505 18.562 0 15.061 0 10.738v-.914C0 5.501 3.505 2 7.833 2h6.333C18.495 2 22 5.501 22 9.824v.914a7.812 7.812 0 01-6.675 7.733l-.61 3.714z"
        fill="#A380FF"
      />
      <Path
        d="M11.83 8.792a.847.847 0 00-.838-.864.847.847 0 00-.837.864v5.792c0 .48.372.864.837.864a.847.847 0 00.837-.864V8.792zm-.838-1.728c.651 0 1.008-.384 1.008-1.008C12 5.32 11.643 5 10.992 5 10.357 5 10 5.32 10 6.056c0 .624.357 1.008.992 1.008z"
        fill="#fff"
      />
    </Svg>
  );
};

export default memo(SudokuHintStatIcon);
