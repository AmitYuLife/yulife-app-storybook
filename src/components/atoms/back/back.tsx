import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { BACK_BUTTON } from "@ids";
import { Style, Colours } from "@styles";
import { getLocaleDirection } from "@locale";

// TODO: Move to the icons folder

interface Props {
  color?: string;
}

const Back = ({ color }: Props) => {
  const safeColor = color || Colours.neutral.n900;

  const style = React.useMemo(() => {
    const localeDirection = getLocaleDirection();

    if (localeDirection === "rtl") {
      return { transform: [{ rotate: "180deg" }] };
    }

    return {};
  }, []);

  return (
    <Svg
      height={String(Style.adjust(22))}
      width={String(Style.adjust(12))}
      viewBox="0 0 12 22"
      fill="none"
      testID={BACK_BUTTON}
      style={style}
    >
      <Path d="M11.25 0.5L0.75 11L11.25 21.5" stroke={safeColor} strokeMiterlimit="10" strokeLinecap="round" />
    </Svg>
  );
};

export default Back;
