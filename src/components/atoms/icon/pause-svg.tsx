import { Style } from "@styles";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
  color: string;
}

const PauseIcon = ({ color = "#5A5A5C" }: IProps) => {
  return (
    <Svg width={Style.adjust(8)} height={Style.adjust(17)} viewBox="0 0 8 17" fill="none">
      <Path
        d="M0 .386C0 .173.224 0 .5 0s.5.173.5.386v16.228C1 16.827.776 17 .5 17s-.5-.173-.5-.386V.386zM7 .386C7 .173 7.224 0 7.5 0s.5.173.5.386v16.228c0 .213-.224.386-.5.386s-.5-.173-.5-.386V.386z"
        fill={color}
      />
    </Svg>
  );
};

export default memo(PauseIcon);
