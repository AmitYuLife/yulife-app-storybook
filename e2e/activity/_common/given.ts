import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";

export { skipHealthConnection } from "_utils/navigation/login";

export const { logInAndGoToTab, loginAsUser, loginOnly, loginToYuScreen } = navigation.login;

export const { navigateViaID, navigateViaText } = navigation.common;

export const giveEngagementSurveyAccess = (tags: string[]) => async () => {
  await dataManager.triggerWorkerTask("GIVE_ENGAGEMENT_SURVEY_ACCESS", {
    tags,
  });
};
