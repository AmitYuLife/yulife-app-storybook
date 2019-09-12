import { Text } from "@atoms/index";
import { Colours } from "@styles/index";
import moment from "moment";
import * as React from "react";
import { SFC } from "react";
import { ActivityIndicator, Switch, View } from "react-native";
import { IConnectionsSectionItem } from "../settings.screen";
import styles, { thumbColor, trackColor } from "./connections-item.styles";

const formatDate = (timestamp: number) => {
    const toFormat = moment.unix(timestamp).local();
    const today = moment();
    if (today.isSameOrBefore(toFormat, "days")) {
        return toFormat.format("HH:mm");
    }

    if (today.isSameOrBefore(toFormat, "years")) {
        return toFormat.format("HH:mm Do MMM");
    }

    return toFormat.format("HH:mm Do MMM YYYY");
};

const ConnectionsItem: SFC<IConnectionsSectionItem> = ({ name, isConnected, lastUpdated, isLoading, onPress }) => (
    <View style={styles.wrapper}>
        <View style={styles.nameWrapper}>
            <Text style={styles.text}>{name}</Text>
            {isConnected && lastUpdated &&
                <Text style={styles.textSmall}>last synced at {formatDate(lastUpdated)}</Text>
            }
            {!isConnected &&
                <Text style={styles.textSmall}>not connected</Text>
            }
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

export default ConnectionsItem;
