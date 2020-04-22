import { TouchableOpacityWithState } from "@molecules/index";
import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../../../../../atoms";
import styles from "./purchased-item.styles";

export interface IRewardsPurchasedItemProps {
  day: string;
  month: string;
  reward: string;
  cost: string;
  status: string;
  onPress: () => void;
}

export enum RewardStatus {
  failed = "failed",
  pending = "pending",
  delivered = "delivered",
}

const RewardsPurchasedItem: SFC<IRewardsPurchasedItemProps> = ({ day, month, reward, cost, status, onPress }) => (
  <TouchableOpacityWithState onPress={onPress} style={styles.wrapper}>
    <View style={styles.dateWrapper}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.month}>{month}</Text>
    </View>
    <View style={styles.contentWrapper}>
      <Text numberOfLines={1} ellipsizeMode="tail" bold={true} style={styles.reward}>
        {reward}
      </Text>
      <Text style={styles.cost}>{cost}</Text>
    </View>
    <View style={styles.statusWrapper}>
      <Text
        style={StyleSheet.flatten([
          styles.statusBase,
          status === RewardStatus.failed ? styles.statusDeclined : styles.statusPending,
        ])}
      >
        {([RewardStatus.failed, RewardStatus.pending] as string[]).indexOf(status) === -1 ? "" : status}
      </Text>
    </View>
  </TouchableOpacityWithState>
);

export default RewardsPurchasedItem;
