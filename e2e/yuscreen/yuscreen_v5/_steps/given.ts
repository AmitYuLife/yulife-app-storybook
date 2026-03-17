import { completeOnboardingIntro, tapText, navigateViaID } from "@navigation";
import { CUSTOMER_1, AUTH_1 } from "../../_data";
import { loginAsUser } from "../../_common/given";
import { NAV_BAR } from "@ids";

export { loginAsUser } from "../../_common/given";

export { triggerGiveMissingYumojiItems } from "worlds_progression/_common/given";

export const loginToYuScreen =
  (skipIntro = true, customer = CUSTOMER_1, auth = AUTH_1) =>
  async () => {
    await loginAsUser(customer, auth, true)();
    await navigateViaID(NAV_BAR("yu"), 10_000)();
    if (skipIntro === true) {
      await completeOnboardingIntro();
    }
  };
