import React, { memo } from "react";
import { useSelector } from "react-redux";
import { getStreaks } from "@redux/streaks/streaks.selectors";
import { Navigation } from "@navigation/main";
import { showYuModal } from "@navigation/root";
import { MODALS } from "@navigation/constants";
import { getUserFeatures } from "@redux/user/user.selectors";
import { StreakIcon } from "@atoms/icon/streak-icon";
import { GameButton } from "./_base.button";
import { t } from "@locale";
import { STREAKS_BUTTON_LABEL } from "@ids";

export type StreakTypes = "forest" | "ocean" | "desert" | "mountain" | "yuniversal_1";

type StreakParams = {
  onPrimaryPress: (isDoneToday: boolean) => Promise<void>;
};

const _Streak = ({ onPrimaryPress }: StreakParams) => {
  const streak = useSelector(getStreaks);
  const hasStreakFeature = useSelector(getUserFeatures).showStreaks;

  const { currentStreak, isDoneToday, maxStreak, isAvailable } = streak;
  const show = hasStreakFeature && isAvailable;

  if (!show) {
    return null;
  }

  const label = `${currentStreak || 0}/${maxStreak || 1}`;

  return (
    <GameButton
      onPress={createHandlePress(streak, onPrimaryPress)}
      label={label}
      labelTestID={STREAKS_BUTTON_LABEL(label)}
      Icon={<StreakIcon isDoneToday={isDoneToday} />}
      accessibilityLabel={t("screens.daily.streak.accessibility_label", {
        currentStreak: currentStreak || 0,
        maxStreak: maxStreak || 1,
      })}
    />
  );
};

export const Streak = memo(_Streak);

export const createHandlePress = (
  streak: ReturnType<typeof getStreaks>,
  onPrimaryPress: (isDoneToday: boolean) => Promise<void>
) => {
  const { currentStreak, isDoneToday, maxStreak, reward, nextStreakAvailableAt, type } = streak;
  const modalName = MODALS.streaks;

  return () => {
    showYuModal({
      component: {
        id: modalName,
        name: modalName,
        passProps: {
          isDoneToday,
          onPressCtaPrimary: async () => {
            await onPrimaryPress(isDoneToday);
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
