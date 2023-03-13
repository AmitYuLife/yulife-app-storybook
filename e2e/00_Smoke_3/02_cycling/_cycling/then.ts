import { CYCLING_COUNT, navigation, textVisibleAtIndex, EVENT_PROGRESS_BAR, NEW_EVENT_ICON, CLAIM_BUTTON, NUM_OF_STARS, ANIMATED_CIRCLE, RADIO_ICON_COLOUR} from "@utils"
import { screens } from "@appScreens"
import { GOALS_3 } from "@data"
import { buttonVisible } from "_utils/appScreens/challenges"
import { addCommasToNumber } from "_utils/appScreens/rewards"
import { swipeToText } from "_utils/navigation/scrolling"


export const {
    textVisible,
    idVisible,
    multipleIDVisible,
    multipleTextVisible,
    textNotVisible,
    idNotVisible,
    expectIsVisibleViaText,
    idVisibleAtIndex
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
    await textVisible("- withings / 1.0 km cycled", 3000)()
    await textVisible("- fitbit / 4.0 km cycled", 3000)()
    await textVisible("- strava / 5.0 km cycled", 3000)()
    await textVisible("- withings / 5.0 km cycled", 3000)()
}

export const cyclingEventToBeCompletedVisible = (numberOfRides: number, progressWidth: number) => async () => {
    const description = `${numberOfRides} / 10,000 rides`
    const eventTimeframe = GOALS_3.data.title

    await textVisible(description)()
    await idVisible(EVENT_PROGRESS_BAR(progressWidth))()
    await textVisible(eventTimeframe)()
    await idVisible(NEW_EVENT_ICON)()
}

export const onCyclingEventDetailsScreen = async () => {
    const eventTitle = GOALS_3.data.title
    const eventDescriptionTitle = GOALS_3.data.descriptionTitle
    const eventDescription = GOALS_3.data.description

    await textVisible(eventTitle)()
    await textVisible(eventDescriptionTitle)()
    await swipeFromText(eventDescriptionTitle, "up", "fast", 0.2)()
    await textVisible(eventDescription)()

    await swipeFromText(eventDescription, "up", "fast")()

    for (const info of GOALS_3.data.info) {
        await textVisible(info.title)();
        await textVisible(info.description)();
    }
}

export const eventCompletedVisible = (numberOfKm: number, progressWidth: number) => async () => {
    const description = `${addCommasToNumber(numberOfKm)} / 10,000 rides`
    const eventTimeframe = GOALS_3.data.title

    await textVisible(eventTimeframe)()
    await textVisible(description)()
    await idVisible(EVENT_PROGRESS_BAR(progressWidth))()
}

export const claimVisible = (numOfStars: number) => async () => {
    await textVisible("Claim")()
    await idVisible(CLAIM_BUTTON)()
    await idVisible(ANIMATED_CIRCLE("#F43E8E"))()
    await idVisible(NUM_OF_STARS(numOfStars))()
}

export const onCompletedEventMilestonePage = (yuCoin: string, numOfStars: number, challengeType: string) => async () => {
    const eventTitle = `${GOALS_3.data.title} event`

    await textVisible(eventTitle)()
    await textVisible("Great job!")()
    await textVisible("You have reached the event milestone!\nCongratulations. Claim your rewards")()
    await textVisible(`${yuCoin} YuCoin`)() 
    await idVisible(ANIMATED_CIRCLE("#F43E8E"))()
    await idVisible(NUM_OF_STARS(numOfStars))()
    await textVisible(challengeType)()
    await buttonVisible("Claim")()
}

export const milestoneComplete = (index: number) => async () => {
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), index)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), index)()
}

export const yuCoinPageEventDataCorrect = (numberOfKm: number, progressWidth: number) => async () => {
    const description = `${addCommasToNumber(numberOfKm)} / 10,000 rides`
    await textVisible(description)();
    await idVisible(EVENT_PROGRESS_BAR(progressWidth))()
}

export const yuCoinEarnedFromEvent = (yuCoinStartValue: number, yuCoinPower: number, rewardValue: number) => async () => {
    const yuCoinTotal = (yuCoinStartValue + yuCoinPower * rewardValue).toLocaleString("en-US")
    await textVisible(`${yuCoinTotal} YuCoin today`)()
}

export const allChallengesCompleteVisible = async () => {
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 0)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 0)()
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 1)() 
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 1)()
    await swipeFromText("5km cycled", "left", "fast")()
    await idVisibleAtIndex(ANIMATED_CIRCLE("#40C057"), 2)()
    await idVisibleAtIndex(RADIO_ICON_COLOUR("#40C057"), 2)() 
}
