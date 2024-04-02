import { navigation } from "@navigation";

export const {
  idVisible,
  textVisible,
  idExist,
  wait,
  completedTodayStreakCopyVisible
} = navigation.common;

export const amOnNotificationModal = async () => {
  await textVisible("Notifications")()
}

export const notifCentreEmptyStateVisible = async () => {
  await textVisible("Wow, it's quiet in here! Keep checking back and you'll see some exciting updates soon.")()
}