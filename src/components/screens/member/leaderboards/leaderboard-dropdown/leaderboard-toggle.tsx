import { Leaderboard } from "@app/redux/user/user.selectors";
import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../../../atoms";
import assets from "../assets";
import styles from "./leaderboard-toggle.styles";

export interface IProps {
  onToggleDropdown: () => void;
  leaderboards: Leaderboard[];
  activePage: number;
  isShowingDropdown: boolean;
}

const LeaderboardToggle: React.SFC<IProps> = ({ leaderboards, onToggleDropdown, isShowingDropdown, activePage }) => {
  return (
    <View style={styles.leaderboardButtonWrapper}>
      <TouchableOpacity style={styles.leaderboardButton} onPress={onToggleDropdown}>
        <Text style={StyleSheet.flatten([styles.text, styles.leaderboardButtonText])}>
          {leaderboards.length ? leaderboards[activePage].name : ""}
        </Text>
        <Image source={isShowingDropdown ? assets.arrowUp : assets.arrowDown} />
      </TouchableOpacity>
    </View>
  );
};

export default LeaderboardToggle;
