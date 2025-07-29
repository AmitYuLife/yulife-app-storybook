import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";

export { skipHealthConnection } from "_utils/navigation/login";

export const { logInAndGoToTab, loginAsUser, loginToYuScreen } = navigation.login;

export const { navigateViaID, navigateViaText } = navigation.common;

export { authoriseFitkit, sendSteps } from "@socket";

export const giveEngagementSurveyAccess =
  (tags: string[], userIdsToInvalidate: string[] = []) =>
  async () => {
    await dataManager.triggerWorkerTask("GIVE_ACCESS_TO_CORE_JOURNEY", {
      journeyId: "engagement_survey_deep_dive",
      tags,
      userIdsToInvalidate,
    });
  };
