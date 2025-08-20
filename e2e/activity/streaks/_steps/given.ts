import * as ids from "@ids";
import { authoriseFitkit } from "@socket";
import { AUTH_1, CUSTOMER_1 } from "../../_data";
import { skipHealthConnection } from "_utils/navigation/login";
import { navigateViaID, navigateViaText } from "../../_common/given";
import { tapText } from "./when";

export { loginAsUser, logInAndGoToTab } from "../../_common/given";

export const continueLoginAfterStreak = async () => {
  await navigateViaText("let’s begin");
};
