import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import { Style } from "@styles";
import { memo } from "react";

const SudokuStarSvg = () => (
  <Svg width={Style.adjust(16)} height={Style.adjust(16)} fill="none" viewBox="0 0 16 16">
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 .333c.146 0 .275.096.318.236l1.65 5.378 5.365-.012a.333.333 0 0 1 .202.599L11.174 9.85l1.677 5.384a.333.333 0 0 1-.521.364L8 12.274l-4.33 3.324a.333.333 0 0 1-.52-.364L4.825 9.85.465 6.534a.333.333 0 0 1 .202-.599l5.365.012L7.68.569A.333.333 0 0 1 8 .333Zm0 1.47L6.596 6.38a.333.333 0 0 1-.32.235l-4.618-.01L5.416 9.46c.111.085.158.23.116.364L4.098 14.43l3.698-2.84a.333.333 0 0 1 .406 0l3.7 2.84-1.434-4.604a.333.333 0 0 1 .117-.364l3.756-2.857-4.619.01a.333.333 0 0 1-.319-.235L8 1.804Z"
        fill="#5C5757"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default memo(SudokuStarSvg);
