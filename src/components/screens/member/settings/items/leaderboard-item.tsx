import * as React from "react";
import { SFC } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../../atoms";
import { ILeaderboardSectionItem } from "../settings.screen";
import LeaderboardCircle from "./leaderboard-item.circle";
import styles from "./leaderboard-item.styles";

const LeaderboardItem: SFC<ILeaderboardSectionItem> = ({ name, onPress, status, isLoading }) => (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Text numberOfLines={1} bold={false} style={styles.name}>
            {name.length > 11 ? `${name.slice(0, 8)}...` : name}
        </Text>
        <LeaderboardCircle status={status} isLoading={isLoading} />
    </TouchableOpacity>
);

export default LeaderboardItem;
