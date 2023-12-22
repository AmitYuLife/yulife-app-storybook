import { navigation } from "@navigation";
import { dataManager } from "@yu-life/yulife-bdd-framework";

export const { logInAndGoToTab } = navigation.login;

export const archiveCustomerBusinessProductsByDate = (date: string) => async () => {
    await dataManager.triggerWorkerTask("Business.ArchiveCustomerBusinessProductsByDate", {
		date: date,
    })
}
