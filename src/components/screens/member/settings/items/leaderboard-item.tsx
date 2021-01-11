import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../../../../atoms";
import { ILeaderboardSectionItem } from "../settings.screen";
import LeaderboardCircle from "./leaderboard-item.circle";
import styles from "./leaderboard-item.styles";
import { LEADERBOARD_STATUS } from "@ids";

const LeaderboardItem = ({ name, onPress, status, isLoading }: ILeaderboardSectionItem) => (
  <View style={styles.wrapper}>
    <TouchableOpacity style={styles.button} onPress={onPress} testID={LEADERBOARD_STATUS(name, status)}>
      <Text numberOfLines={1} bold={false} style={styles.name}>
        {name}
      </Text>
      <LeaderboardCircle status={status} isLoading={isLoading} />
    </TouchableOpacity>
  </View>
);

export default LeaderboardItem;
