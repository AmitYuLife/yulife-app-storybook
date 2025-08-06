export { authoriseFitkit, sendSteps, addCyclingData, sendMindfulnessData } from "@socket";
import { sendReduxEvent } from "@socket";
import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";
export { selectRegionIfVisible } from "_utils/navigation/login";
export { triggerCreateRandomChestPool } from "../../../battle_pass/_common/given";

export const { logInAndGoToTab } = navigation.login;

export const triggerAppUpdateState = async (): Promise<void> => {
  await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } });
};

export const triggerGenerateBattlePassSeason = (businessIds: string[]) => async () => {
  await dataManager.triggerWorkerTask("GENERATE_DONATIONS_BATTLE_PASS_SEASON", {
    entityIds: businessIds,
    seasonNumber: 1,
    execute: 1,
    purgeExisting: false,
    targetMultiplier: 0.5,
    limitMilestones: 3,
    seasonName: "Season of Harmony",
  });
};
