import { dataManager } from "@yu-life/yulife-bdd-framework";

export {
  addStepsHistoricalData,
  addCyclingHistoricalData,
  addMindfulnessHistoricalData,
  addSteps3DaysHistoricalData,
} from "@socket";
export { loginAsUser, loginOnly, logInAndGoToTab } from "../../_common/given";

export const triggerBirthdayNotifications = async () => {
  await dataManager.triggerWorkerTask("SEND_BIRTHDAY_NOTIFICATIONS", {});
};
