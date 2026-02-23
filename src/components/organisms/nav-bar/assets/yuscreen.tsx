import React, { memo } from "react";
import { t } from "@locale";
import { useIconColour, IIconProps } from "../nav-bar.helpers";
import { NAV_BAR } from "@ids";
import { View } from "react-native";
import styles from "./assets.styles";
import { Pressable } from "@molecules";
import { TextTemplate } from "@atoms";
import { YuHeartIcon } from "@atoms/icon/yu-heart-icon";

const Yuscreen = ({ isActive, hasNotification, onPressIn, isSuspended }: IIconProps) => {
  const fill = useIconColour(isActive, isSuspended);
  return (
    <Pressable delay={1000} style={styles.wrapper} onPress={onPressIn}>
      <YuHeartIcon testID={NAV_BAR("yu")} colour={fill} />
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
