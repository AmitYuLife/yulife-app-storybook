import { Leaderboard } from "@redux/user/user.selectors";
import * as React from "react";
import { Animated, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Style } from "../../../../../styles";
import { Text } from "../../../../atoms";
import styles from "./leaderboard-dropdown.styles";

interface IProps {
  activePage: number;
  initialScrollIndex: number;
  leaderboards: Leaderboard[];
  isShowingDropdown: boolean;
  onChangeActiveLeaderboard: (index: number) => void;
  onToggleDropdown: () => void;
}

export default class LeaderboardDropdown extends React.PureComponent<IProps> {
  public state = {
    translateY: new Animated.Value(-Style.DEVICE_HEIGHT),
  };

  public componentDidUpdate(prevProps: IProps) {
    if (prevProps.isShowingDropdown && !this.props.isShowingDropdown) {
      Animated.timing(this.state.translateY, {
        duration: 300,
        toValue: -Style.DEVICE_HEIGHT,
        useNativeDriver: true,
      }).start();
    }

    if (!prevProps.isShowingDropdown && this.props.isShowingDropdown) {
      Animated.timing(this.state.translateY, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }

  public render() {
    const { translateY } = this.state;
    const { activePage, leaderboards } = this.props;
    return (
      <Animated.View style={[styles.leaderboardList, { transform: [{ translateY }] }]}>
        <ScrollView showsVerticalScrollIndicator={false} style={StyleSheet.absoluteFill}>
          {leaderboards.map((leaderboard, index) => (
            <TouchableOpacity
              onPress={this.handleLeaderboardPress(index)}
              style={styles.button}
              key={leaderboard.leaderboardId}
            >
              <Text style={StyleSheet.flatten([styles.text, activePage === index ? styles.activeText : null])}>
                {leaderboard.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
    );
  }

  public handleLeaderboardPress = (index: number) => {
    return () => {
      this.props.onChangeActiveLeaderboard(index);
      this.props.onToggleDropdown();
      Animated.timing(this.state.translateY, {
        delay: 400,
        duration: 300,
        toValue: -Style.DEVICE_HEIGHT,
        useNativeDriver: true,
      }).start();
    };
  };
}
