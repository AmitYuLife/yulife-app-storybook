// tslint:disable:max-line-length
import { Style } from "@styles/index";
import * as React from "react";
import { Platform, Text, View } from "react-native";
import { t } from "@locale";
import { NAV_BAR } from "@ids";
import Svg, { G, Path } from "react-native-svg";
import { getIconColour, IIconProps } from "../nav-bar.helpers";
import styles from "./assets.styles";

export default function Girrafe({ isActive, onPressIn, onPressOut, isHighlighted }: IIconProps) {
  const fill = getIconColour(isActive || isHighlighted);
  const size = Style.adjust(54);

  return (
    <View>
      <Svg
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        viewBox="0 0 54 54"
        width={size}
        height={size}
        testID={NAV_BAR("yucoin")}
      >
        <G>
          {Platform.OS === "ios" ? <Path fill="#fff" d="M0 0h54v54H0z" /> : null}
          <Path
            d="M37.55 18.25A10.55 10.55 0 1127 7.75h0a10.58 10.58 0 0110.6 10.5z"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M28.25 16.25a.45.45 0 00-.5 0l-.3.3c0 .1-.1.1-.2.1l-.1-.1a.78.78 0 01.6-.9.63.63 0 01.78.4.44.44 0 010 .1v.1c0 .1 0 .2-.1.2h-.1c-.08-.1-.08-.1-.08-.2z"
            fill={fill}
          />
          <Path
            d="M27 26.55l1-4.1M26.25 20.15a6.76 6.76 0 003.7.9 3.08 3.08 0 003-2.3c.4-1.5-.6-2.7-2.1-3.5a9.7 9.7 0 00-4.7-1.5 2.74 2.74 0 00-.9.1 1.8 1.8 0 00-.8-.9 2.69 2.69 0 00-1.5-.5h-1.6c.2.7.2 1.4.4 2.1a2.81 2.81 0 001.1 1.5 1.68 1.68 0 001 .3.65.65 0 01.6.6h0a8.65 8.65 0 01-.2 1.6c-.4 1.6-.9 4-1.5 6.5"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeMiterlimit={10}
          />
          <Path
            d="M25.75 10.55c0-.2.1-.3.3-.4l.2-.1a.3.3 0 01.4 0l.3.3v.4l.1.1c.1.1.1.2.2.3l.3.8.6-.6.3-.2h.1a.09.09 0 00.1-.1l.1-.2a.56.56 0 01.7-.2l.1.1.1.1a.76.76 0 01.2.4.52.52 0 01-.2.4l-.4.1a.09.09 0 00-.1.1V12c-.1.1-.1.2-.2.3l-.7.5a1.35 1.35 0 00-.5.9l-.1.4v.4a2.43 2.43 0 00-.6-.1l-.5-.1V14l.1-.4a1.23 1.23 0 00-.2-1l-.3-.8c-.1-.1-.1-.2-.1-.4v-.2l-.2-.2a.24.24 0 01-.2-.29.27.27 0 01.1-.16z"
            fill={fill}
          />
        </G>
      </Svg>
      <Text style={[styles.text, { color: fill }]}>{t("navbar.yucoin.label")}</Text>
    </View>
  );
}
