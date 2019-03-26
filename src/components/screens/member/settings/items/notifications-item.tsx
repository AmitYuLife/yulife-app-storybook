import { Text } from "@atoms/index";
import * as React from "react";
import { SFC } from "react";
import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import { INotificationsSectionItem } from "../settings.screen";
import styles, { thumbColor, trackColor } from "./notifications-item.styles";

const NotificationsItem: SFC<INotificationsSectionItem> = ({ active, name, onSwitchPress, onTimePress, time }) => (
    <View style={styles.wrapper}>
        <View style={styles.nameWrapper}>
            <Text style={StyleSheet.flatten([styles.text, active ? null : styles.textGrey])}>{name}</Text>
            {!time ? null : (
                <TouchableOpacity onPress={onTimePress}>
                    <Text style={StyleSheet.flatten([styles.textSmall, active ? null : styles.textGrey])}>
                        {time || ""}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
        <Switch trackColor={trackColor} thumbColor={thumbColor} onValueChange={onSwitchPress} value={active} />
    </View>
);

export default NotificationsItem;
