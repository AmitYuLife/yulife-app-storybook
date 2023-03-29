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
  await textVisible("You don't have any notifications")()
}