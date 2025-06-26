import { expectIsVisibleViaID, expectIsVisibleViaText, idVisible, textVisible } from "@navigation";
import { DAILY_STEPS_SCREEN, TODAYS_EARNINGS } from "@ids";
import { getLocalisedString as t } from "@i18n";

import { swipeFromText } from "_utils/navigation/scrolling";

export const onDailySteps = (steps?: number, yucoins?: number) => async () => {
  await expectIsVisibleViaID(DAILY_STEPS_SCREEN);
  if (typeof steps === "number") {
    await expectIsVisibleViaText(`${steps} steps`, 5000);
  }
  if (typeof yucoins === "number") {
    await expectIsVisibleViaText(`${yucoins} YuCoin today`);
  }
};

export const onDailyCycling =
  (cycling: string, yucoins = 0) =>
  async () => {
    await expectIsVisibleViaID(DAILY_STEPS_SCREEN);
    await expectIsVisibleViaText(`${cycling}`, 5000);
    await expectIsVisibleViaText(`${yucoins} ${t("YuCoin")} ${t("today")}`);
  };

// note need to add IDs to yucoins as if they are the same, detox cannot match
export const onTodaysYucoin =
  (steps = 0, cycling: string, mindfulness = 0) =>
  async () => {
    await idVisible(TODAYS_EARNINGS)();
    await textVisible(`${steps} / 12000 steps`)();
    await textVisible(cycling)();
    await textVisible(`${mindfulness} / 30 mindful mins`)();
    await swipeFromText(`${mindfulness} / 30 mindful mins`, "up", "fast")();
    await textVisible("Today's challenges (0/1)")();
    await textVisible("No challenge done")();
    await textVisible("Take a challenge (1 left)")();
    await swipeFromText("Today's challenges (0/1)", "down", "fast")();
  };
