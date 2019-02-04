import * as React from "react";
import { SFC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../../../atoms";
import { INotificationsSectionItem } from "../settings.screen";
import styles from "./notifications-item.styles";

const NotificationsItem: SFC<INotificationsSectionItem> = ({ active, name, onPress, time }) => (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <View style={styles.nameWrapper}>
            <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.yucoinWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>{time || ""}</Text>
        </View>
        <View style={styles.stepsWrapper}>
            <Text style={StyleSheet.flatten([styles.text, styles.textRight])}>{active ? "ON" : "OFF"}</Text>
        </View>
    </TouchableOpacity>
);

export default NotificationsItem;
