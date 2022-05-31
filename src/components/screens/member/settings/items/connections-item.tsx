import * as React from "react";
import { TextTemplate } from "@atoms/index";
import { Colours } from "@styles/index";
import moment from "moment";
import { FC } from "react";
import { ActivityIndicator, View } from "react-native";
import { Switch } from "@molecules";
import { IConnectionsSectionItem } from "../settings.screen";
import styles from "./item.styles";
import ItemTitle from "./item-title";
import { toCapitalLetter } from "@utils";

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

const ConnectionsItem: FC<IConnectionsSectionItem> = ({
  name,
  isConnected,
  lastUpdated,
  isLoading,
  onPress,
  onPressInfo,
}) => (
  <View style={[styles.wrapper, { flexDirection: "row" }]}>
    <View style={styles.nameWrapper}>
      <ItemTitle name={toCapitalLetter(name)} onPressInfo={onPressInfo} />
      {isConnected ? (
        !lastUpdated ? null : (
          <TextTemplate type="l2">{`Last synced at ${formatDate(lastUpdated)}`}</TextTemplate>
        )
      ) : (
        <TextTemplate type="l2" color={Colours.neutral.n400}>
          Not connected
        </TextTemplate>
      )}
    </View>
    <View style={styles.switchWrapper}>
      {isLoading ? <ActivityIndicator color={Colours.darkHotPink} /> : <Switch onPress={onPress} value={isConnected} />}
    </View>
  </View>
);

export default ConnectionsItem;
