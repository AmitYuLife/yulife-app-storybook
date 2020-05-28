import { Text } from "@atoms/index";
import { Colours } from "@styles/index";
import moment from "moment";
import * as React from "react";
import { SFC } from "react";
import { ActivityIndicator, Image, StyleSheet, Switch, TextStyle, TouchableOpacity, View } from "react-native";
import { IConnectionsSectionItem } from "../settings.screen";
import assets from "./assets";
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

const ConnectionsItem: SFC<IConnectionsSectionItem> = ({
  name,
  isConnected,
  lastUpdated,
  isLoading,
  onPress,
  onPressInfo,
}) => (
  <View style={styles.wrapper}>
    <View style={styles.nameWrapper}>
      <View style={styles.nameInfoWrapper}>
        <TouchableOpacity style={styles.infoButton} onPress={onPressInfo}>
          <Text style={getStyle(isConnected, styles.text)}>{name}</Text>
          <Image style={styles.info} source={assets.infoIcon} />
        </TouchableOpacity>
      </View>
      {isConnected && lastUpdated && <Text style={styles.textSmall}>last synced at {formatDate(lastUpdated)}</Text>}
      {!isConnected && <Text style={getStyle(isConnected, styles.textSmall)}>not connected</Text>}
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

function getStyle(isConnected: boolean, style: TextStyle) {
  if (isConnected) {
    return style;
  }

  return StyleSheet.flatten([style, styles.textDisabled]);
}

export default ConnectionsItem;
