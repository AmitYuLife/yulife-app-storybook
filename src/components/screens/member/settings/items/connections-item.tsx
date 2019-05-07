import { Text } from "@atoms/index";
import { Colours } from "@styles/index";
import * as React from "react";
import { SFC } from "react";
import { ActivityIndicator, Switch, View } from "react-native";
import { IConnectionsSectionItem } from "../settings.screen";
import styles, { thumbColor, trackColor } from "./connections-item.styles";

const NotificationsItem: SFC<IConnectionsSectionItem> = ({ name, isConnected, isLoading, onPress }) => (
    <View style={styles.wrapper}>
        <View style={styles.nameWrapper}>
            <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.switchWrapper}>
            {isLoading ? (
                <ActivityIndicator color={Colours.darkHotPink} />
            ) : (
                <Switch trackColor={trackColor} thumbColor={thumbColor} onValueChange={onPress} value={isConnected} />
            )}
        </View>
    </View>
);

export default NotificationsItem;
