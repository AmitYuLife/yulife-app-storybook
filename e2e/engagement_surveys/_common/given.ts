import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export { skipHealthConnection } from "_utils/navigation/login";

export const { loginAsUser, loginToYuScreen } = navigation.login;

export const { navigateViaID, navigateViaText } = navigation.common;

export { authoriseFitkit, sendSteps } from "@socket";

export const giveEngagementSurveyAccess =
  (journeyId: string, businessAccountId: string, userIdsToInvalidate: string[] = []) =>
  async () => {
    await dataManager.triggerWorkerTask("GIVE_ACCESS_TO_CORE_JOURNEY", {
      journeyId,
      businessAccountId,
      userIdsToInvalidate,
    });
  };

export const triggerSurveyInvite =
  (businessEmployeeIds: string[], journeyId: string, businessSurveyCampaignId: string, endLocalDate?: string) =>
  async () => {
    await dataManager.triggerEvent("users_invited_to_survey", {
      businessEmployeeIds,
      journeyId,
      endLocalDate: endLocalDate || moment().add(30, "days").format("YYYY-MM-DD"),
      businessSurveyCampaignId,
    });
  };
