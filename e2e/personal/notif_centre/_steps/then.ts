import { navigation } from "@navigation";
import * as ids from "@ids";

export const {
  idVisible,
  textVisible,
  idNotVisible,
  idExist,
  wait,
  completedTodayStreakCopyVisible,
} = navigation.common;

export const amOnNotificationModal = async () => {
  await textVisible("Notifications")();
};

export const notifCentreEmptyStateVisible = async () => {
  await textVisible(
    "Wow, it's quiet in here! Keep checking back and you'll see some exciting updates soon."
  )();
};

export const rewardAccessWarningVisible = (date: string) => async () => {
  const warning = `We’re sorry to see you go, but you still have ${date} days to redeem your hard-earned YuCoin!`;

  await idVisible(ids.WARNING_BANNER(warning), 2000)();
};
