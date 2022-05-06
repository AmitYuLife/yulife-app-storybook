import React from "react";
import { connect } from "react-redux";
import { StyleSheet, ViewStyle } from "react-native";
import { usePressedInWithDelay } from "@services/hooks/usePressedInWithDelay";
import { IReduxState } from "@redux/_core/reducers";
import { getStreaks } from "@redux/streaks/streaks.selectors";
import { Navigation } from "react-native-navigation";
import { labels, showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import { getUserFeatures } from "@redux/user/user.selectors";
import { Style } from "@styles";
import { StreakIcon } from "@atoms/icon/streak-icon";
import { TouchableOpacityWithDelay } from "@components/molecules";

export type StreakTypes = "forest" | "ocean" | "desert" | "mountain" | "yuniversal_1";

type ConnectedProps = ReturnType<typeof mapStateToProps>;

interface OwnProps {
  isDim?: boolean;
}

export type Props = ConnectedProps & OwnProps;

function _Streak(props: Props) {
  const { streak, hasStreakFeature, isDim } = props;
  const { currentStreak, isDoneToday, maxStreak, isAvailable } = streak;
  const show = hasStreakFeature && isAvailable;

  const defaultHandlePress = createHandlePress(streak);
  const { handlePress, handlePressIn, handlePressOut } = usePressedInWithDelay({
    onPress: defaultHandlePress,
  });

  if (!show) {
    return null;
  }

  return (
    <TouchableOpacityWithDelay
      style={styles.wrapper}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
    >
      <StreakIcon isDoneToday={isDim || isDoneToday} streaks={`${currentStreak || 0}/${maxStreak || 1}`} />
    </TouchableOpacityWithDelay>
  );
}

const mapStateToProps = (state: IReduxState) => ({
  streak: getStreaks(state),
  hasStreakFeature: getUserFeatures(state).showStreaks,
});

const styles = StyleSheet.create({
  wrapper: { marginBottom: Style.adjust(20) } as ViewStyle,
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
