import {
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  idVisible,
  textVisible,
  textVisibleAtIndex,
} from "@navigation";
import { DAILY_STEPS_SCREEN, TODAYS_YUCOIN, TODAYS_EARNINGS } from "@ids";
import { getLocalisedString as t } from "@i18n";

import { scrollUntilTextVisible, swipeFromText } from "_utils/navigation/scrolling";

export const onDailySteps =
  (steps = 0, yucoins = 0) =>
  async () => {
    await expectIsVisibleViaID(DAILY_STEPS_SCREEN);
    await expectIsVisibleViaText(`${steps} steps`, 5000);
    await expectIsVisibleViaText(`${yucoins} YuCoin today`);
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
