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
  const size = String(Style.SCALE_UP_AND_DOWN(54));

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
        </G>
      </Svg>
      <Text style={[styles.text, { color: fill }]}>{t("navbar.rewards.label")}</Text>
    </View>
  );
}
