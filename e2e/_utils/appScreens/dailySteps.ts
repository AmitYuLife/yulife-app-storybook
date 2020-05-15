import { expectIsVisibleViaID, expectIsVisibleViaText } from "@navigation";
import { DAILY_STEPS_SCREEN, TODAYS_YUCOIN } from "@ids"


export const onDailySteps = (steps = 0, yucoins = 0) => async () => {
    await expectIsVisibleViaID(DAILY_STEPS_SCREEN);
    // await expectIsVisibleViaText(`${steps} steps`, 5000)
    // await expectIsVisibleViaText(`${yucoins} yucoin today`)
    // await expectIsVisibleViaText("earn more")
}

// note need to add IDs to yucoins as if they are the same, detox cannot match
export const onTodaysYucoin = (steps = 0, coreYucoins = 0, questsYucoints = 0) => async () => {
    await expectIsVisibleViaID(TODAYS_YUCOIN)
    await expectIsVisibleViaText(`${steps} steps`)
    // await expectIsVisibleViaText(coreYucoins.toString())
    // await expectIsVisibleViaText(questsYucoints.toString())
    await expectIsVisibleViaText("quests / you haven’t done any today")
    await expectIsVisibleViaText("take a challenge")
}