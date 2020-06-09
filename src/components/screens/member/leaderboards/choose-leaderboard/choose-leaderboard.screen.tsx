import { GenericHeading, Text } from "@atoms/index";
import * as React from "react";
import { SafeAreaView, TouchableOpacity, StyleSheet, View } from "react-native";
import styles from "./choose-leaderboard.styles";
import { Leaderboard } from "@redux/user/user.selectors";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../../../navigation/constants";

interface IProps {
  componentId: string;
  activePage: number;
  leaderboards: Leaderboard[];
  onLeftIconPress?: () => void;
  onChangeActiveLeaderboard: (index: number) => void;
}

function ChooseLeaderboardScreen({
  onLeftIconPress,
  activePage,
  leaderboards,
  onChangeActiveLeaderboard,
  componentId,
}: IProps) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <GenericHeading
        heading="Leaderboards"
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={() => goToSettings(componentId)}
      />
      <View style={styles.leaderboardsWrapper}>
        {!leaderboards
          ? null
          : leaderboards.map((leaderboard, index) => (
              <TouchableOpacity
                onPress={() => {
                  onChangeActiveLeaderboard(index);
                  Navigation.popToRoot(componentId);
                }}
                key={leaderboard.leaderboardId}
              >
                <Text style={StyleSheet.flatten([styles.text, activePage === index ? styles.activeText : null])}>
                  {leaderboard.name}
                </Text>
              </TouchableOpacity>
            ))}
      </View>
    </SafeAreaView>
  );
}

function goToSettings(componentId: string) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.settings,
      name: ROUTES.settings,
      passProps: {
        componentId,
      },
    },
  });
}

export default ChooseLeaderboardScreen;
