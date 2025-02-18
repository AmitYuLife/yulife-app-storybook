import { navigation } from "@navigation"
import { dataManager } from "@yu-life/yulife-bdd-framework"

export const {
    logInAndGoToTab,
    loginAsUser,
    loginOnly,
    loginAndCollectSignupBonus,
    loginToYuScreen,
    loginAsPLIUser,
} = navigation.login

export const {
    navigateViaID,
    navigateViaText,
} = navigation.common

export const giveEngagementSurveyAccess = (tags: string[]) => async () => {
    await dataManager.triggerWorkerTask("GIVE_ENGAGEMENT_SURVEY_ACCESS", {
        tags,
    });
};