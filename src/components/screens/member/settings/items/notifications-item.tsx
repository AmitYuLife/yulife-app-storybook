import { TextTemplate } from "@atoms/index";
import React, { FC } from "react";
import { View } from "react-native";
import moment from "moment";
import { Switch, TouchableOpacityWithDelay } from "@molecules";
import { INotificationsSectionItem } from "../settings.screen";
import styles from "./item.styles";
import { Colours } from "@styles";

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
        <TextTemplate type="b2b">{name}</TextTemplate>
        <TextTemplate type="l2">{description}</TextTemplate>
      </View>
      <Switch onPress={onSwitchPress} value={isActive} />
    </View>
    {!alertTimestamp ? null : (
      <>
        <View style={styles.reminderTime}>
          <TextTemplate type="b2b">Reminder time</TextTemplate>
        </View>
        <TouchableOpacityWithDelay onPress={onTimePress} style={styles.timer} disabled={!isActive}>
          <TextTemplate type="b2" color={isActive ? Colours.primary.p600 : Colours.neutral.n800}>
            {moment(alertTimestamp).format("hh:mm A") || ""}
          </TextTemplate>
        </TouchableOpacityWithDelay>
      </>
    )}
  </View>
);

export default NotificationsItem;
