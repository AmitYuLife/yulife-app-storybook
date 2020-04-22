import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "../../../../atoms";
import styles from "./leaderboard-tabs.styles";

export interface IProps {
  sortBy: string;
  onHandleTabPress: (type: string) => () => void;
  isMindfulAvailable?: boolean;
}

const LeaderboardTabs: React.SFC<IProps> = ({ sortBy, onHandleTabPress, isMindfulAvailable = false }) => {
  return (
    <View style={styles.tabsWrapper}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={StyleSheet.flatten([styles.tabButton, sortBy === "steps" ? styles.activeTab : null])}
          onPress={onHandleTabPress("steps")}
        >
          <View style={isMindfulAvailable ? null : styles.rightTabBorderWrapper}>
            <Text style={StyleSheet.flatten([styles.text, sortBy === "steps" ? styles.activeTabText : null])}>
              steps
            </Text>
          </View>
        </TouchableOpacity>
        {!isMindfulAvailable ? null : (
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.tabButton,
              styles.middleTabButton,
              sortBy === "mindful" ? styles.activeTab : null,
            ])}
            onPress={onHandleTabPress("mindful")}
          >
            <View style={styles.tabBorder}>
              <Text style={StyleSheet.flatten([styles.text, sortBy === "mindful" ? styles.activeTabText : null])}>
                mindful mins
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={StyleSheet.flatten([styles.tabButton, sortBy === "coins" ? styles.activeTab : null])}
          onPress={onHandleTabPress("coins")}
        >
          <Text style={StyleSheet.flatten([styles.text, sortBy === "coins" ? styles.activeTabText : null])}>
            yucoin
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LeaderboardTabs;
