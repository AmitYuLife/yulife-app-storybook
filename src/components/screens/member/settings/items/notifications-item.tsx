import { TextTemplate } from "@atoms/index";
import React, { FC } from "react";
import { View } from "react-native";
import moment from "moment";
import { Switch, TouchableOpacityWithDelay } from "@molecules";
import { INotificationsSectionItem } from "../settings.screen";
import styles from "./item.styles";
import { Colours } from "@styles";
import { SETTINGS_NAME, SETTINGS_DESC, SETTINGS_SWITCH } from "@ids";
import { t } from "@locale";
import { noop } from "@utils";

const NotificationsItem: FC<INotificationsSectionItem> = ({
  isActive,
  name,
  description,
  onSwitchPress,
  onTimePress,
  alertTimestamp,
}) => (
  <View style={styles.wrapper}>
    {alertTimestamp && <View style={styles.seperator} />}
    <View style={styles.container}>
      <View style={styles.nameWrapper}>
        <TextTemplate type="b2b" testID={SETTINGS_NAME(name)}>
          {name}
        </TextTemplate>
        <TextTemplate type="l2" testID={SETTINGS_DESC(description)}>
          {description}
        </TextTemplate>
      </View>
      <Switch onPress={onSwitchPress} value={isActive} testID={SETTINGS_SWITCH(name, isActive)} />
    </View>
    {!alertTimestamp ? null : (
      <>
        <View style={styles.reminderTime}>
          <TextTemplate type="b2b">{t("screens.settings.push_notifications.reminder_time")}</TextTemplate>
        </View>
        <TouchableOpacityWithDelay onPress={onTimePress ?? noop} style={styles.timer} disabled={!isActive}>
          <TextTemplate type="b2" color={isActive ? Colours.primary.p600 : Colours.neutral.n800}>
            {moment(alertTimestamp).format(t("format.time_short")) || ""}
          </TextTemplate>
        </TouchableOpacityWithDelay>
      </>
    )}
  </View>
);

export default NotificationsItem;
