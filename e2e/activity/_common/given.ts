import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";

export { skipHealthConnection } from "_utils/navigation/login";

export const { loginAsUser, loginToYuScreen } = navigation.login;

export const { navigateViaID, navigateViaText } = navigation.common;

export { authoriseFitkit, sendSteps } from "@socket";
