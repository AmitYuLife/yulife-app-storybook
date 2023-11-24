// tslint:disable:max-line-length
import { Style } from "@styles/index";
import * as React from "react";
import { Platform, Text, View } from "react-native";
import Svg, { Circle, G, Path } from "react-native-svg";
import { t } from "@locale";
import { getIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import styles from "./assets.styles";

export default function Trophy({ isActive, hasNotification, onPressIn, onPressOut, isSuspended }: IIconProps) {
  const fill = getIconColour(isActive, isSuspended);
  const size = Style.adjust(54);

  return (
    <View>
      <Svg
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        viewBox="0 0 54 54"
        width={size}
        height={size}
        testID={NAV_BAR("leaderboard")}
      >
        <G data-name="leaderboard" id="leaderboard">
          {Platform.OS === "ios" ? <Path d="M0 0H54V54H0z" fill="#fff" /> : null}
          <Path
            d="M27.05 22.55a20.89 20.89 0 002.5-.2v4.2h-5v-4.2a20.89 20.89 0 002.5.2z"
            fill="none"
            stroke={fill}
            strokeMiterlimit={10}
          />
          <Path
            d="M28.85 22.45a7.72 7.72 0 01-3.7 0 8 8 0 01-4.6-3 5 5 0 01-.8-1.8 5.53 5.53 0 01-.3-1.8v-7.4a1 1 0 011-.9h13.1a1.06 1.06 0 011 .9v7.4a7.14 7.14 0 01-5.7 6.6z"
            fill="none"
            stroke={fill}
            strokeMiterlimit={10}
          />
          <Path
            d="M32.55 27.55v.5a.47.47 0 01-.44.5H22.05a.47.47 0 01-.5-.44v-.56a.9.9 0 01.77-1h9.43a1 1 0 01.8 1zM19.45 10.75h-2.9v3.9a4.83 4.83 0 004 4.8M34.65 10.75h2.8v3.9a4.83 4.83 0 01-3.9 4.8"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path d="M22.35 9.75L31.65 9.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
        </G>
        {!hasNotification ? null : <Circle cx="35.6" cy="10.25" r="4.5" fill="#ec6f65" stroke="#fff" />}
      </Svg>
      <Text style={[styles.text, { color: fill }]}>{t("navbar.leaderboard.label")}</Text>
    </View>
  );
}
