import { CYCLING_COUNT, navigation, textVisibleAtIndex } from "@utils"
import { screens } from "@appScreens"

export const {
    textVisible,
    idVisible,
    multipleIDVisible,
    multipleTextVisible,
    textNotVisible,
    idNotVisible,
    expectIsVisibleViaText
} = navigation.common

export const {
    scrollFromID,
    scrollFromText,
    scrollUntilIdVisible,
    swipeFromText
} = navigation.scrolling

export const {
    onDailyCycling,
} = screens.dailySteps


export const canSeeTodaysCycling = () => async () => {
    await textVisible("7.5 km", 3000)()
    await idVisible(CYCLING_COUNT("7.5 km"))()
}

export const {
    menuItemsVisible,
} = screens.menu

export const canSeePreviousDaysCycling = () => async () => {
    await textVisible("3.0 km cycled", 3000)()
    await textVisible("4.0 km cycled", 3000)()
    await textVisible("5.0 km cycled", 3000)()
    await textVisible("- fitbit / 1.0 km cycled", 3000)()
    await textVisible("- garmin / 1.0 km cycled", 3000)()
    await textVisible("- strava / 1.0 km cycled", 3000)()
    await textVisible("- fitbit / 4.0 km cycled", 3000)()
    await textVisible("- strava / 5.0 km cycled", 3000)()
}