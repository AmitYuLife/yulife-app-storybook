import { IDeviceStore } from "../device.reducer";
import { IPushNotification } from "../device.selectors";
export const deviceFixtures: Partial<IPushNotification> = {};
export const partialDeviceStoreFixture: Partial<IDeviceStore> = {};
export const pushNotificationFixture: any = {
    foreground: true,
    userInteraction: true,
    message: "string | object",
    data: {},
    badge: 1,
    alert: {},
    sound: "string",
    finish: () => ({}),
    configure: () => ({}),
    unregister: () => ({}),
    localNotification: () => ({}),
    localNotificationSchedule: () => ({}),
    requestPermissions: () => ({}),
    presentLocalNotification: () => ({}),
    scheduleLocalNotification: () => ({}),
    cancelLocalNotifications: () => ({}),
    cancelAllLocalNotifications: () => ({}),
    setApplicationIconBadgeNumber: () => ({}),
    getApplicationIconBadgeNumber: () => ({}),
    popInitialNotification: () => ({}),
    abandonPermissions: () => ({}),
    checkPermissions: () => ({}),
    registerNotificationActions: () => ({}),
    clearAllNotifications: () => ({})
};
