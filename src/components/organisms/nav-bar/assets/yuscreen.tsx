import React, { memo } from "react";
import { t } from "@locale";
import Svg, { Path } from "react-native-svg";
import { getIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import { View } from "react-native";
import styles, { NAV_BAR_ICON_SIZE } from "./assets.styles";
import { Pressable } from "@molecules";
import { TextTemplate } from "@atoms";

const Yuscreen = ({ isActive, hasNotification, onPressIn, isSuspended }: IIconProps) => {
  const fill = getIconColour(isActive, isSuspended);
  return (
    <Pressable delay={1000} style={styles.wrapper} onPress={onPressIn}>
      <Svg viewBox="0 0 24 24" width={NAV_BAR_ICON_SIZE} height={NAV_BAR_ICON_SIZE} testID={NAV_BAR("yu")}>
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M11.315 4.27a9.512 9.512 0 0 0-.801-.796c-.684-.63-1.493-.998-2.006-1.172-1.06-.358-3.989-.814-6.166 1.976C.177 7.045.85 10.702 2.81 12.884l7.624 8.204.05.05c.37.376.849.862 1.568.862.63 0 1.077-.443 1.455-.818l.095-.094 7.51-8.15c2.759-3.039 2.348-7.326-.284-9.485-3.579-2.93-6.793-.782-8.172.814l-.695.781s-.26-.35-.646-.778Zm-.156 1.374.732.987 1.517-1.705.005-.005c.603-.699 1.588-1.487 2.756-1.79 1.106-.288 2.476-.172 4.024 1.095 2.156 1.768 2.583 5.389.181 8.037l-.002.003-7.488 8.126-.095.094c-.172.17-.293.29-.434.39-.145.103-.234.124-.303.124a.659.659 0 0 1-.385-.139c-.158-.108-.294-.245-.486-.439l-.025-.026-7.608-8.187c-1.702-1.9-2.222-5.01-.418-7.315v-.001C4.932 2.586 7.32 2.956 8.189 3.25m2.97 2.394-.003-.005-.018-.023a11.297 11.297 0 0 0-.364-.448 9.239 9.239 0 0 0-.915-.939l-.011-.01-.01-.009c-.55-.505-1.22-.815-1.65-.96"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M16 4.5a.5.5 0 0 0 .5.5c1.282 0 2.257.742 2.813 1.743.566 1.019.648 2.216.24 3.033a.5.5 0 1 0 .894.448c.592-1.183.424-2.736-.26-3.967C19.493 5.008 18.218 4 16.5 4a.5.5 0 0 0-.5.5Z"
          clipRule="evenodd"
        />
      </Svg>
      {!hasNotification ? null : <View style={styles.notification} />}
      <View style={styles.text}>
        <TextTemplate type="l3b" color={fill} numberOfLines={1}>
          {t("navbar.yu.label")}
        </TextTemplate>
      </View>
    </Pressable>
  );
};

export default memo(Yuscreen);
