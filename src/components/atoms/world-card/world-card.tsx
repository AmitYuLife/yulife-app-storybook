import { Style } from "@styles";
import { Path, Svg } from "react-native-svg";

type WorldCardProps = {
  mainColor?: string;
  shadowColor?: string;
};

export const WorldCard = ({ mainColor = "#A12D3C", shadowColor = "#802430" }: WorldCardProps) => {
  return (
    <Svg width={Style.adjust(80)} height={Style.adjust(103)} viewBox="0 0 80 103" fill="none">
      <Path
        fill={shadowColor}
        d="M8 4a8 8 0 0 0-8 8v74a8 8 0 0 0 8 8h23l7.727 7.727a1.8 1.8 0 0 0 2.546 0L49 94h23a8 8 0 0 0 8-8V12a8 8 0 0 0-8-8H8Z"
      />
      <Path
        fill={mainColor}
        d="M8 0a8 8 0 0 0-8 8v74a8 8 0 0 0 8 8h23l7.727 7.727a1.8 1.8 0 0 0 2.546 0L49 90h23a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8Z"
      />
    </Svg>
  );
};
