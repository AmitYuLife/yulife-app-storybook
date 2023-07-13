import { expectIsVisibleViaID, expectIsVisibleViaText, textVisibleAtIndex } from "@navigation";
import { DAILY_STEPS_SCREEN, TODAYS_YUCOIN, TODAYS_EARNINGS } from "@ids"
import { getLocalisedString as t } from "@i18n";

import { scrollUntilTextVisible } from "_utils/navigation/scrolling"

export const onDailySteps = (steps = 0, yucoins = 0) => async () => {
    await expectIsVisibleViaID(DAILY_STEPS_SCREEN);
    // await expectIsVisibleViaText(`${steps} steps`, 5000)
    // await expectIsVisibleViaText(`${yucoins} yucoin today`)
    // await expectIsVisibleViaText("Earn more")
}

export const onDailyCycling = (cycling: string, yucoins = 0) => async () => {
    await expectIsVisibleViaID(DAILY_STEPS_SCREEN);
    await expectIsVisibleViaText(`${cycling}`, 5000)
    await expectIsVisibleViaText(`${yucoins} ${t("YuCoin")} ${t("today")}`)
}

// note need to add IDs to yucoins as if they are the same, detox cannot match
export const onTodaysYucoin = (steps = 0, cycling: string, mindfulness = 0) => async () => {
    await expectIsVisibleViaID(TODAYS_EARNINGS)
    await expectIsVisibleViaText(t("%{currentValue} / %{maxValue} steps", { currentValue: steps, maxValue: 12000 }))
    await expectIsVisibleViaText(`${cycling}`)
    await expectIsVisibleViaText(t("%{currentValue} / %{maxValue} mindful mins", { currentValue: mindfulness, maxValue: 30 }))
    await textVisibleAtIndex(`0/120`, 0)
    await textVisibleAtIndex(`120/120`, 1)
    await textVisibleAtIndex(`40/120`, 2)
    await expectIsVisibleViaText(t("Today's challenges (%{doneToday}/%{totalAvailable})", { doneToday: 0, totalAvailable: 1 }))
    await scrollUntilTextVisible(TODAYS_EARNINGS, t("No challenge done"), "down")
    await scrollUntilTextVisible(TODAYS_EARNINGS, t("Take a challenge (%{challengesLeft} left today)", { challengesLeft: 1 }), "down")
}