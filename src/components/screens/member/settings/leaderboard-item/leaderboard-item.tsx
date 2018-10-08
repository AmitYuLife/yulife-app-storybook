import * as React from "react";
import { SFC } from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../../atoms";
import LeaderboardCircle from "./leaderboard-item.circle";
import styles from "./leaderboard-item.styles";

interface IProps {
    name: string;
    status: "active" | "inactive" | "create";
    onPress: () => void;
}

const LeaderboardItem: SFC<IProps> = ({ name, onPress, status }) => (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Text bold={false} style={styles.name}>
            {name.length > 11 ? `${name.slice(0, 8)}...` : name}
        </Text>
        <LeaderboardCircle status={status} />
    </TouchableOpacity>
);

export default LeaderboardItem;
