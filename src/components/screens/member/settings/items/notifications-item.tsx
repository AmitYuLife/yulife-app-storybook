import { Text } from "@atoms/index";
import * as React from "react";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Switch, TouchableOpacityWithDelay } from "@molecules";
import { INotificationsSectionItem } from "../settings.screen";
import styles from "./item.styles";

const NotificationsItem: FC<INotificationsSectionItem> = ({ isActive, name, onSwitchPress, onTimePress, time }) => (
  <View style={styles.wrapper}>
    <View style={styles.nameWrapper}>
      <Text style={styles.text}>{name}</Text>
      {time ? null : (
        <Text style={StyleSheet.flatten([styles.textSmall, isActive ? styles.active : null])}>
          {isActive ? "On" : "Off"}
        </Text>
      )}
      {!time ? null : (
        <TouchableOpacityWithDelay onPress={onTimePress}>
          <Text style={StyleSheet.flatten([styles.textSmall, isActive ? styles.active : null])}>{time || ""}</Text>
        </TouchableOpacityWithDelay>
      )}
    </View>
    <Switch onPress={onSwitchPress} value={isActive} />
  </View>
);

export default NotificationsItem;
