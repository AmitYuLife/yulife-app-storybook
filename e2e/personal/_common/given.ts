import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";

export const { loginAsUser } = navigation.login;

export const deactivatePendingLeaversByDate =
  (businessAccountId: string, source: string) => async () => {
    await dataManager.triggerWorkerTask("DEACTIVATE_PENDING_LEAVERS_BY_DATE", {
      businessAccountId,
      source,
    });
  };
