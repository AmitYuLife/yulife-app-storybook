export { authoriseFitkit, sendSteps, addCyclingData, sendMindfulnessData } from "@socket";
import { sendReduxEvent } from "@socket";
import { navigation } from "@navigation";
export { selectRegionIfVisible } from "_utils/navigation/login";
export {
  triggerGenerateBattlePassSeason,
  triggerCreateRandomChestPool,
} from "../../../battle_pass/_common/given";

export const { logInAndGoToTab } = navigation.login;

export const triggerAppUpdateState = async (): Promise<void> => {
  await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } });
};
