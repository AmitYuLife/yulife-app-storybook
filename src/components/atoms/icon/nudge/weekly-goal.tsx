import { Style } from "@styles";
import { memo } from "react";
import Svg, { G, Rect, Circle, Path, Defs, ClipPath } from "react-native-svg";

type Props = {
  size?: number;
};

export const WeeklyGoalNudgeIcon = memo(({ size = Style.adjust(66) }: Props) => (
  <Svg width={size} height={size} viewBox="0 0 66 66">
    <G clipPath="url(#a)">
      <Rect width={66} height={66} fill="#E3F7FC" rx={6} />
      <Circle cx={30} cy={82} r={53} fill="#CAEFF9" />
      <Path
        fill="#D9EAFF"
        d="M18 23.833h33.333v20.834a6.667 6.667 0 0 1-6.666 6.666h-20A6.667 6.667 0 0 1 18 44.667V23.833Z"
      />
      <Path fill="#569DE9" d="M18 27.5h33.333v-4.167a5 5 0 0 0-5-5H23a5 5 0 0 0-5 5V27.5Z" />
      <Path
        fill="#F1F7FF"
        d="M14.671 23.833h33.334v20.834a6.667 6.667 0 0 1-6.667 6.666h-20a6.667 6.667 0 0 1-6.667-6.666V23.833Z"
      />
      <Path fill="#94DDF1" d="M14.666 27.5H48v-4.167a5 5 0 0 0-5-5H19.666a5 5 0 0 0-5 5V27.5Z" />
      <Path
        fill="#569DE9"
        d="M23 16.333a1.667 1.667 0 0 1 3.333 0v5.834a1.667 1.667 0 0 1-3.333 0v-5.834ZM38 16.333a1.667 1.667 0 0 1 3.334 0v5.834a1.667 1.667 0 0 1-3.334 0v-5.834Z"
      />
      <Path
        fill="#569DE9"
        fillRule="evenodd"
        d="M28.339 43.794c0 .77.624 1.325 1.36 1.325.738 0 1.362-.556 1.362-1.325 0-2.416 1.187-4.02 2.439-5.542l.277-.335c1.148-1.382 2.313-2.786 2.313-4.695 0-.698-.57-1.27-1.269-1.27h-6.718c-.698 0-1.27.572-1.27 1.27 0 .698.572 1.27 1.27 1.27h5.16a2.019 2.019 0 0 1-.108.242 5.403 5.403 0 0 1-.533.789 29.15 29.15 0 0 1-.79.95l-.01.012c-.29.338-.602.702-.914 1.092-1.261 1.574-2.57 3.605-2.57 6.218Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Rect width={66} height={66} fill="#fff" rx={6} />
      </ClipPath>
    </Defs>
  </Svg>
));
