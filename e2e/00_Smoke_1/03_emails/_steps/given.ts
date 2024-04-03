import { completeOnboardingIntro } from "@navigation";
import { CUSTOMER_7, AUTH_7 } from "../../_data";
import { logInAndGoToTab } from "../../_common/given";

export { logInAndGoToTab } from "../../_common/given";

export const loginToYuScreen = (skipIntro = true, customer = CUSTOMER_7, auth = AUTH_7) => async () => {
    await logInAndGoToTab("yu", customer, auth, true)();
    if (skipIntro === true) {
        await completeOnboardingIntro();
    }
};
