import { expectIsVisibleViaID, expectIsVisibleViaText } from "@navigation";
import { DAILY_STEPS_SCREEN, TODAYS_YUCOIN, TODAYS_EARNINGS } from "@ids"


export const onDailySteps = (steps = 0, yucoins = 0) => async () => {
    await expectIsVisibleViaID(DAILY_STEPS_SCREEN);
    // await expectIsVisibleViaText(`${steps} steps`, 5000)
    // await expectIsVisibleViaText(`${yucoins} yucoin today`)
    // await expectIsVisibleViaText("Earn more")
}

// note need to add IDs to yucoins as if they are the same, detox cannot match
export const onTodaysYucoin = (steps = 0, cycling = 0, mindfulness = 0) => async () => {
    await expectIsVisibleViaID(TODAYS_EARNINGS)
    await expectIsVisibleViaText(`${steps} / 12000 steps`)
    await expectIsVisibleViaText(`${cycling} / 9.6 km`)
    await expectIsVisibleViaText(`${mindfulness} / 30 mindful mins`)
    // await expectIsVisibleViaText(coreYucoins.toString())
    // await expectIsVisibleViaText(questsYucoints.toString())
    await expectIsVisibleViaText("Today's challenges (0/1)")
    await expectIsVisibleViaText("No challenge done")
    await expectIsVisibleViaText("Take a challenge (1 left)")
}