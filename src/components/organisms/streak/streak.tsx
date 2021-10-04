import React from "react";
import { connect } from "react-redux";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { Pad, Text } from "@atoms";
import { Calendar } from "./assets";
import styles, { getColour } from "./streak.styles";
import { IReduxState } from "@redux/_core/reducers";
import { getStreaks } from "@redux/streaks/streaks.selectors";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";
import { Navigation } from "react-native-navigation";
import { labels, showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import { getUserFeatures } from "@redux/user/user.selectors";

export type StreakTypes = "forest" | "ocean" | "desert" | "mountain";

type ConnectedProps = ReturnType<typeof mapStateToProps>;

interface OwnProps {
  isDim?: boolean;
}

export type Props = ConnectedProps & OwnProps;

function _Streak(props: Props) {
  const { streak, hasStreakFeature, streakType, isDim } = props;
  const { currentStreak, isDoneToday, maxStreak, isAvailable } = streak;
  const show = hasStreakFeature && isAvailable;

  const defaultHandlePress = createHandlePress(streak);
  const { isPressedIn, handlePress, handlePressIn, handlePressOut } = usePressedInWithDelay({
    onPress: defaultHandlePress,
  });

  if (!show) {
    return null;
  }

  const backgroundColor = getColour(streakType, isDoneToday, isPressedIn);

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={handlePress}>
      <View style={StyleSheet.flatten([styles.wrapper, { backgroundColor }])}>
        <Pad width={20} />
        <Text style={styles.text}>{`${currentStreak || 0}/${maxStreak || 1}`}</Text>
        <Calendar backgroundColor={backgroundColor} progress={(currentStreak / maxStreak) * 100} scale={0.5} />
        <Pad width={isIphoneX() ? 30 : 15} />
        {isDim ? <View style={styles.dim} /> : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

const mapStateToProps = (state: IReduxState) => ({
  streak: getStreaks(state),
  streakType: getDailyStepsTheme(state).streakType,
  hasStreakFeature: getUserFeatures(state).showStreaks,
});

const redux = connect(mapStateToProps);

export const Streak = redux(_Streak);

function createHandlePress(streak: ConnectedProps["streak"]) {
  const { currentStreak, isDoneToday, maxStreak, reward, nextStreakAvailableAt, type } = streak;
  const modalName = MODALS.streaks;

  return () => {
    showYuModal({
      component: {
        id: modalName,
        name: modalName,
        passProps: {
          isDoneToday,
          onPressCtaPrimary: () => {
            if (!isDoneToday) {
              labels[1].onPress();
            }

            Navigation.dismissModal(modalName);
          },
          onPressCtaSecondary: isDoneToday
            ? null
            : () => {
                Navigation.dismissModal(modalName);
              },
          reward,
          type,
          streakCompleted: currentStreak,
          streakMax: maxStreak,
          nextStreakAvailableAt,
        },
      },
    });
  };
}
