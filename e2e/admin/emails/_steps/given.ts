import { completeOnboardingIntro, navigateViaID } from "@navigation";
import { CUSTOMER_7, AUTH_7 } from "../../_data";
import { loginAsUser } from "../../_common/given";
import { NAV_BAR } from "@ids";

export { loginAsUser } from "../../_common/given";

export const loginToYuScreen = (skipIntro = true, customer = CUSTOMER_7, auth = AUTH_7) => async () => {
    await loginAsUser(customer, auth, true)();
    await navigateViaID(NAV_BAR("yu"), 10_000)();
    if (skipIntro === true) {
        await completeOnboardingIntro();
    }
};
