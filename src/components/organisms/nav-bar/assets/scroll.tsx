// tslint:disable:max-line-length
import { Style } from "@styles/index";
import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { Platform, View, Text } from "react-native";
import { t } from "@locale";
import { getIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import styles from "./assets.styles";

export default function Scroll({ isActive, onPressIn, hasNotification, isHighlighted }: IIconProps) {
  const fill = getIconColour(isActive || isHighlighted);
  const size = String(Style.SCALE_UP_AND_DOWN(54));

  return (
    <View>
      <Svg
        onPressIn={onPressIn}
        onPressOut={onPressIn}
        viewBox="0 0 54 54"
        width={size}
        height={size}
        testID={NAV_BAR("quests")}
      >
        <G>
          {Platform.OS === "ios" ? <Path d="M0 0H54V54H0z" fill="#fff" /> : null}
          <Path d="M36.35 7.25h-15.8A1.66 1.66 0 0019 9v16.8" fill="none" stroke={fill} strokeMiterlimit={10} />
          <Path
            d="M34.75 10.75h1.6a1.76 1.76 0 00.3-3.5 1.7 1.7 0 00-1.89 1.51.28.28 0 000 .09v18.7M34.75 25.75h-17.4a1.71 1.71 0 00-1.61 1.81v.09a1.65 1.65 0 001.6 1.6h15.8a1.67 1.67 0 001.6-1.7"
            fill="none"
            stroke={fill}
            strokeMiterlimit={10}
          />
          <Path
            d="M34.75 27.45a1.56 1.56 0 01-3.12-.12 1.1 1.1 0 010-.18 1.62 1.62 0 011.6-1.4h1.6"
            fill="none"
            stroke={fill}
            strokeMiterlimit={10}
          />
          <Path
            d="M30.85 12.35L28.45 10M28.35 12.35l2.5-2.4"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeMiterlimit={10}
          />
          <Path
            d="M27.15 13.65c-1.3 1.5.5 3.9-1.4 6.2"
            fill="none"
            stroke={fill}
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeDasharray="4,4,4,4"
          />
          <Path
            d="M23.85 23.35a1.2 1.2 0 10-1.2-1.2 1.16 1.16 0 001.12 1.2z"
            fill="none"
            stroke={fill}
            strokeMiterlimit={10}
          />
          {!hasNotification ? null : <Circle cx="35.6" cy="10.25" r="4.5" fill="#ec6f65" stroke="#fff" />}
        </G>
      </Svg>
      <Text style={[styles.text, { color: fill }]}>{t("navbar.quest.label")}</Text>
    </View>
  );
}
