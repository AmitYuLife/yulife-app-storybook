import { TouchableOpacityWithDelay } from "@molecules/index";
import * as React from "react";
import { FC } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
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

const RewardsPurchasedItem: FC<IRewardsPurchasedItemProps> = ({ day, month, reward, cost, status, onPress }) => (
  <TouchableOpacityWithDelay onPress={onPress} style={styles.wrapper}>
    <View style={styles.dateWrapper}>
      <TextTemplate type="b1b">{day}</TextTemplate>
      <TextTemplate type="l1">{month}</TextTemplate>
    </View>
    <View style={styles.contentWrapper}>
      <TextTemplate numberOfLines={1} type="b1b">
        {reward}
      </TextTemplate>
      <TextTemplate type="l1">{cost}</TextTemplate>
    </View>
    <View style={styles.statusWrapper}>
      <TextTemplate type="l1" color={status === RewardStatus.failed ? "rgb(255,102,102)" : "rgb(51,51,51)"}>
        {([RewardStatus.failed, RewardStatus.pending] as string[]).indexOf(status) === -1 ? "" : status}
      </TextTemplate>
    </View>
  </TouchableOpacityWithDelay>
);

export default RewardsPurchasedItem;
