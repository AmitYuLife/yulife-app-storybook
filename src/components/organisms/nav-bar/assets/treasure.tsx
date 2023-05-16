// tslint:disable:max-line-length
import { Style } from "@styles/index";
import { t } from "@locale";
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { getIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import { Platform, View, Text } from "react-native";
import styles from "./assets.styles";

export default function Treasure({ isActive, onPressIn, onPressOut, isHighlighted }: IIconProps) {
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
        testID={NAV_BAR("rewards")}
      >
        <G data-name="rewards" id="rewards">
          {Platform.OS === "ios" ? <Path d="M0 0H54V54H0z" fill="#fff" /> : null}
          <Path
            d="M35.85 10.15h-9.6a3.81 3.81 0 00-1.5.5l-2 1.4a1.07 1.07 0 00-.3 1.3l2.7 4.9"
            fill="none"
            stroke={fill}
            strokeMiterlimit={10}
          />
          <Path
            d="M30.25 28.25h-10.1a.94.94 0 01-1-.88v-8.12a.94.94 0 01.88-1h10.12"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M24.75 21.25a1.58 1.58 0 01-1.5-1.65v-1.35h3v1.3a1.58 1.58 0 01-1.45 1.7z"
            fill="none"
            stroke={fill}
            strokeMiterlimit={10}
          />
          <Path
            d="M35.25 18.25h-5v10h4a.94.94 0 001-.88v-9.12z"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M35.25 18.25l-3-5.5 2-2c1.4-1 2.8-.4 3.6 1.4a4.15 4.15 0 01-1.1 5z"
            fill="none"
            stroke={fill}
            strokeMiterlimit={10}
          />
          <Path d="M22.75 12.65h9.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
          <Path
            d="M20 8a.56.56 0 00-.7-.2c-.3.1-.3.4-.2.7z m-.1 1.9a.51.51 0 00.9-.5z m-2.4.9a.51.51 0 00-.61.36.52.52 0 00.21.54z m.9 1.5a.5.5 0 00.6-.8.09.09 0 01-.1-.1h-.2z m-2.1 2a.5.5 0 000 1z m1.5 1a.47.47 0 00.5-.44v-.06a.47.47 0 00-.44-.5h-.06z m1.4-6.8l.8 1.4.9-.5-.85-1.4z m-2.1 3.3l1.3.6.4-.9-1.3-.6z m-.8 3.5h1.5v-1h-1.5z"
            fill={fill}
          />
        </G>
      </Svg>
      <Text style={[styles.text, { color: fill }]}>{t("navbar.rewards.label")}</Text>
    </View>
  );
}
