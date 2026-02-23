import { t } from "@locale";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import { View } from "react-native";
import styles, { NAV_BAR_ICON_SIZE } from "./assets.styles";
import { Pressable } from "@molecules";
import { TextTemplate } from "@atoms";

export default function Treasure({ isActive, hasNotification, onPressIn, isSuspended }: IIconProps) {
  const fill = useIconColour(isActive, isSuspended);

  return (
    <Pressable delay={1000} style={styles.wrapper} onPress={onPressIn}>
      <Svg viewBox="0 0 24 24" width={NAV_BAR_ICON_SIZE} height={NAV_BAR_ICON_SIZE} testID={NAV_BAR("rewards")}>
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M10.987 3.434H20.5v1h-9.486c-.39.024-.83.173-1.24.421L7.75 6.275a.5.5 0 0 0-.15.65l2.684 4.91-.877.48-2.685-4.91a1.5 1.5 0 0 1 .453-1.947l2.05-1.44.014-.009c.527-.321 1.135-.542 1.734-.574h.013Z"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M5 12.464a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5h10a.5.5 0 0 1 0 1H5A1.5 1.5 0 0 1 3.5 21v-8.036a1.5 1.5 0 0 1 1.5-1.5h10a.5.5 0 0 1 0 1H5Z"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M7.5 11.464h4v1.817c0 .465-.157.995-.475 1.42-.328.436-.842.774-1.525.774-.683 0-1.197-.338-1.525-.775a2.425 2.425 0 0 1-.475-1.419v-1.817Zm1 1v.817c0 .26.093.577.275.818a.873.873 0 0 0 .725.376.873.873 0 0 0 .725-.376c.182-.24.275-.558.275-.818v-.817h-2ZM14.5 11.964a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V21a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1-.5-.5V11.964Zm1 .5V21.5H19a.5.5 0 0 0 .5-.5v-8.536h-4ZM7 6.443a.5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1H7.5a.5.5 0 0 1-.5-.5Z"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M19.76 4.646c-.36.179-.65.436-.798.604l-.009.011-1.285 1.314 2.48 4.597.042-.026c.337-.213.696-.438 1.067-.751.535-.45.991-1.007 1.182-1.76.231-.913.09-1.9-.263-2.7-.363-.824-.892-1.33-1.326-1.45-.356-.096-.733-.018-1.09.16Zm-.45-.887c.491-.245 1.13-.414 1.805-.23.856.233 1.56 1.064 1.977 2.008.427.968.61 2.18.317 3.34-.259 1.022-.875 1.745-1.505 2.275-.42.354-.901.659-1.265.89-.154.096-.286.18-.385.25l-.462.322-3.001-5.562a1 1 0 0 1 .165-1.174l1.26-1.289c.224-.253.612-.59 1.094-.83ZM4.08 1.56a.5.5 0 0 1 .678.201l.763 1.402a.5.5 0 1 1-.879.478L3.88 2.24a.5.5 0 0 1 .2-.678ZM1.545 4.795a.5.5 0 0 1 .661-.25l1.279.58a.5.5 0 0 1-.413.91l-1.278-.579a.5.5 0 0 1-.25-.661ZM.5 8.5A.5.5 0 0 1 1 8h1.503a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5Z"
          clipRule="evenodd"
        />
      </Svg>
      {!hasNotification ? null : <View style={styles.notification} />}
      <View style={styles.text}>
        <TextTemplate type="l3b" color={fill} numberOfLines={1}>
          {t("navbar.rewards.label")}
        </TextTemplate>
      </View>
    </Pressable>
  );
}
