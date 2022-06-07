
export const permissionSettings = {
    ios: {
        motionAndFitness: {
            title: "Motion & Fitness",
            requirement: "Required for: Steps",
            description: "Needed by the yulife app to get activity data from your phone.",
        },
        stepsRead: {
            title: "Steps tracking",
            description: "Needed by the yulife app to read steps data tracked in your Apple Health account.",
        },
        mindfulnessRead: {
            title: "Mindfulness tracking (Read)",
            description: "Needed by the yulife app to read mindful minutes data tracked in your Apple Health account.",
        },
        cyclingRead: {
            title: "Cycling Distance",
            description: "Needed by the yulife app to get cycling/biking data tracked in your Apple Health account.",
        },
        workoutsRead: {
            title: "Workouts",
            description: "Needed by the Yulife app to get workout (e.g. Fiit) data tracked in your Apple Health account.",
        },
        statusUnknown: {
            unknownStatusText: "Status: Unknown\nWe can not determine the status of the permission. Probably all is in working order."
        }
    },
}