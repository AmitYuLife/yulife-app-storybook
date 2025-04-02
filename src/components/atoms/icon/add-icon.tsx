import { Colours, Style } from "@styles";
import { memo } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  color?: string;
  width?: number;
  height?: number;
  showBorder?: boolean;
};

export const AddIcon = memo(
  ({
    color = Colours.neutral.white,
    width = Style.adjust(68),
    height = Style.adjust(68),
    showBorder = true,
  }: Props) => (
    <Svg width={width} height={height} viewBox="0 0 68 68">
      {!showBorder ? null : (
        <>
          <Path
            d="M66 34C66 51.6731 51.6731 66 34 66C16.3269 66 2 51.6731 2 34C2 16.3269 16.3269 2 34 2C51.6731 2 66 16.3269 66 34Z"
            fill="none"
            stroke="none"
            strokeOpacity="0.12"
            strokeWidth="4"
          />
          <Path
            d="M66 34C66 51.6731 51.6731 66 34 66C16.3269 66 2 51.6731 2 34C2 16.3269 16.3269 2 34 2C51.6731 2 66 16.3269 66 34Z"
            fill="none"
          />
          <Path
            d="M66 34C66 51.6731 51.6731 66 34 66C16.3269 66 2 51.6731 2 34C2 16.3269 16.3269 2 34 2C51.6731 2 66 16.3269 66 34Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 4"
          />
        </>
      )}
      <Path
        d="M34.667 25.3334C34.667 24.9652 34.3685 24.6667 34.0003 24.6667C33.6321 24.6667 33.3337 24.9652 33.3337 25.3334V33.3334H25.3337C24.9655 33.3334 24.667 33.6318 24.667 34C24.667 34.3682 24.9655 34.6667 25.3337 34.6667H33.3337V42.6667C33.3337 43.0349 33.6321 43.3334 34.0003 43.3334C34.3685 43.3334 34.667 43.0349 34.667 42.6667V34.6667H42.667C43.0352 34.6667 43.3337 34.3682 43.3337 34C43.3337 33.6318 43.0352 33.3334 42.667 33.3334H34.667V25.3334Z"
        fill={color}
      />
    </Svg>
  )
);
