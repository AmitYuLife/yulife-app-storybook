import { Text } from "@atoms/index";
import { Colours } from "@styles/index";
import * as React from "react";
import { SFC } from "react";
import { Platform, StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import { INotificationsSectionItem } from "../settings.screen";
import styles from "./notifications-item.styles";

const swithPropsIOS = { onTintColor: Colours.darkHotPink };
// const swithPropsAndroidON = { thumbTintColor: Colours.darkHotPink, onTintColor: "#F9B5D9" };

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
        <Switch
            onValueChange={onSwitchPress}
            value={active}
            {...Platform.select({
                android: {},
                ios: swithPropsIOS
            })}
        />
    </View>
);

export default NotificationsItem;
