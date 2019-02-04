export const numericId = (id: string) => id.replace(/\D/g, "").substring(0, 9);

export const defaultNotificationSettings = {
    autoCancel: true, // (optional) default: true
    largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
    ongoing: false, // (optional) set whether this is an "ongoing" notification
    playSound: false, // (optional) default: true
    smallIcon: "ic_notification", // (optional) default: "ic_notification"
    soundName: "default", // (optional) Sound to play when the notification is shown
    vibrate: true, // (optional) default: true
    vibration: 300 // vibration length in milliseconds, ignored if vibrate=false, default: 1000
};

export const getNotificationTitleAndMessage = (id: string) => {
    switch (id) {
        case "99999901":
            return { title: "Challenge Completed", message: "Time's up! Check how you did on your latest challenge." };
        case "99999904":
            return { title: "Streak Saver!", message: "Keep your streak going and take a challenge now!" };
        case "99999902":
        default:
            return { title: "Challenge reminder", message: "Start your walk or meditation challenge now!" };
    }
};
