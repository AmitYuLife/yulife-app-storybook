import Svg, { G, Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  scale?: number;
  colour?: string;
  half?: "left" | "right";
}

const LevelLine = ({ scale = 1, colour, half }: IProps) => {
  if (half) {
    return (
      <Svg width={Style.adjust(36) * scale} height={Style.adjust(7) * scale} viewBox="0 0 72 6.7926">
        <Path
          stroke={colour || "rgb(226, 226, 226)"}
          fill="none"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="miter"
          d={
            half === "left"
              ? "M 0 -0.00026875 C 20.179688 1.238012 43.328125 2.195044 68.5 2.7927 "
              : "M 0 -0.00026875 C -20.179688 1.238012 -43.328125 2.195044 -68.5 2.7927 "
          }
          transform={half === "left" ? "matrix(1,0,0,-1,2,4.7927)" : "matrix(1,0,0,-1,70,4.7927)"}
        />
      </Svg>
    );
  }

  return (
    <Svg width={Style.adjust(137) * scale} height={Style.adjust(7) * scale} viewBox="0 0 272 6.7926">
      <G id="surface1">
        <G clipPath="url(#clip1)" clipRule="nonzero">
          <Path
            stroke={colour || "rgb(226, 226, 226)"}
            fill="none"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="miter"
            d="M 0 -0.00026875 C -20.179688 1.238012 -43.328125 2.195044 -68.5 2.7927 "
            transform="matrix(1,0,0,-1,270,4.7927)"
          />
        </G>
        <G clipPath="url(#clip2)" clipRule="nonzero">
          <Path
            stroke={colour || "rgb(226, 226, 226)"}
            fill="none"
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="miter"
            d="M 0 -0.00026875 C 20.179688 1.238012 43.328125 2.195044 68.5 2.7927 "
            transform="matrix(1,0,0,-1,2,4.7927)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default LevelLine;
