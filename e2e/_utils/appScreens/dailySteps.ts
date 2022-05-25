import { expectIsVisibleViaID, expectIsVisibleViaText, textVisibleAtIndex } from "@navigation";
import { DAILY_STEPS_SCREEN, TODAYS_YUCOIN, TODAYS_EARNINGS } from "@ids"

import { scrollUntilTextVisible } from "_utils/navigation/scrolling"

export const onDailySteps = (steps = 0, yucoins = 0) => async () => {
    await expectIsVisibleViaID(DAILY_STEPS_SCREEN);
    // await expectIsVisibleViaText(`${steps} steps`, 5000)
    // await expectIsVisibleViaText(`${yucoins} yucoin today`)
    // await expectIsVisibleViaText("Earn more")
}

// note need to add IDs to yucoins as if they are the same, detox cannot match
export const onTodaysYucoin = (steps = 0, cycling: string, mindfulness = 0) => async () => {
    await expectIsVisibleViaID(TODAYS_EARNINGS)
    await expectIsVisibleViaText(`${steps} / 12000 steps`)
    await expectIsVisibleViaText(`${cycling}`)
    await expectIsVisibleViaText(`${mindfulness} / 30 mindful mins`)
    await textVisibleAtIndex(`0/120`,0)
    await textVisibleAtIndex(`120/120`,1)
    await textVisibleAtIndex(`40/120`,2)
    await expectIsVisibleViaText("Today's challenges (0/1)")
    await scrollUntilTextVisible(TODAYS_EARNINGS,"No challenge done","down")
    await scrollUntilTextVisible(TODAYS_EARNINGS,"Take a challenge (1 left)","down")
}