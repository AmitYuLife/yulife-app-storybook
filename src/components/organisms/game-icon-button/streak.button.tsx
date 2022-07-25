import React, { memo } from "react";
import { useSelector } from "react-redux";
import { getStreaks } from "@redux/streaks/streaks.selectors";
import { Navigation } from "react-native-navigation";
import { labels, showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import { getUserFeatures } from "@redux/user/user.selectors";
import { StreakIcon } from "@atoms/icon/streak-icon";
import { GameButton } from "./_base.button";

export type StreakTypes = "forest" | "ocean" | "desert" | "mountain" | "yuniversal_1";

const _Streak = () => {
  const streak = useSelector(getStreaks);
  const hasStreakFeature = useSelector(getUserFeatures).showStreaks;

  const { currentStreak, isDoneToday, maxStreak, isAvailable } = streak;
  const show = hasStreakFeature && isAvailable;

  if (!show) {
    return null;
  }

  return (
    <GameButton
      onPress={createHandlePress(streak)}
      label={`${currentStreak || 0}/${maxStreak || 1}`}
      Icon={<StreakIcon isDoneToday={isDoneToday} />}
    />
  );
};

export const Streak = memo(_Streak);

const createHandlePress = (streak: ReturnType<typeof getStreaks>) => {
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
};
