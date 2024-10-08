import React, { memo } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { t } from "@locale";
import { getIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import styles, { NAV_BAR_ICON_SIZE } from "./assets.styles";
import { PressableWithDelay } from "@molecules";
import { TextTemplate } from "@atoms";

const Trophy = ({ isActive, hasNotification, onPressIn, isSuspended }: IIconProps) => {
  const fill = getIconColour(isActive, isSuspended);

  return (
    <PressableWithDelay delay={1000} style={styles.wrapper} onPress={onPressIn}>
      <Svg viewBox="0 0 24 24" width={NAV_BAR_ICON_SIZE} height={NAV_BAR_ICON_SIZE} testID={NAV_BAR("leaderboard")}>
        <Path
          fill={fill}
          fillRule="evenodd"
          d="m5.687 13.813-.119-1.035C3.486 12.36 2 10.595 2 8.511v-3.35a.048.048 0 0 1 .016-.01.04.04 0 0 1 .015-.003h2.542v-1H2.031C1.47 4.148 1 4.6 1 5.151v3.36c0 2.688 1.998 4.916 4.687 5.302ZM18.313 13.813C21.002 13.427 23 11.2 23 8.511v-3.36c0-.552-.47-1.003-1.031-1.003h-2.542v1h2.542a.04.04 0 0 1 .015.003c.006.003.011.006.015.01H22v3.35c0 2.083-1.486 3.848-3.568 4.268l-.12 1.034ZM15 15.702a13.497 13.497 0 0 1-2.992.344c-.688 0-1.356-.054-2.008-.154-.337-.051-.67-.115-1-.19V21h6v-5.298Zm-1 1.202a14.239 14.239 0 0 1-4 0V20h4v-3.096Z"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M13.732 15.8h.003C16.822 15.094 19 12.577 19 9.713V2.37c0-.07-.028-.15-.112-.226A.605.605 0 0 0 18.49 2H5.503C5.136 2 5 2.25 5 2.37v7.343c0 .558.09 1.11.254 1.65l.004.011c.166.577.425 1.112.763 1.606l.003.004c.928 1.366 2.436 2.4 4.232 2.816.565.129 1.143.2 1.744.2.593 0 1.18-.072 1.732-.2Zm-3.7.974c-2.027-.469-3.758-1.641-4.835-3.228a6.555 6.555 0 0 1-.9-1.894A6.698 6.698 0 0 1 4 9.712V2.372C4 1.613 4.672 1 5.503 1h12.994c.83.009 1.503.613 1.503 1.37v7.343c0 3.4-2.571 6.268-6.042 7.062A8.717 8.717 0 0 1 12 17a8.805 8.805 0 0 1-1.968-.226Z"
          clipRule="evenodd"
        />
        <Path
          fill={fill}
          d="M16.655 4H7.353C7.163 4 7 3.78 7 3.5c0-.268.155-.5.353-.5h9.293c.19 0 .354.22.354.5.008.28-.155.5-.345.5Z"
        />
        <Path
          fill={fill}
          fillRule="evenodd"
          d="M16.65 3h.005c.186.007.345.224.345.5.008.28-.155.5-.345.5H7.353C7.163 4 7 3.78 7 3.5c0-.268.155-.5.353-.5H16.65ZM16.989 21.447c0-.314-.22-.447-.35-.447H7.35c-.13 0-.35.133-.35.447V22h9.993l-.004-.553Zm1 0c0-.8-.604-1.447-1.35-1.447H7.35C6.604 20 6 20.647 6 21.447V22a1 1 0 0 0 1 1h9.993a1 1 0 0 0 1-1.007l-.004-.546Z"
          clipRule="evenodd"
        />
      </Svg>
      {!hasNotification ? null : <View style={styles.notification} />}
      <View style={styles.text}>
        <TextTemplate type="l3b" color={fill} numberOfLines={1}>
          {t("navbar.leaderboard.label")}
        </TextTemplate>
      </View>
    </PressableWithDelay>
  );
};

export default memo(Trophy);
