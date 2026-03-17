import { navigation } from "@navigation";
import { LOGIN_HERO_LOGIN_BUTTON } from "@ids";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { loginWithCredentials, authoriseFitkit } from "@socket";

export const { loginAsUser, selectRegionIfVisible } = navigation.login;

export const { wait } = navigation.common;

export const triggerawardReferralYucoin = (userId: string) => async () => {
  await dataManager.triggerWorkerTask("AWARD_REFERRAL_YUCOIN", {
    userId,
  });
};

// App review modal appears immediately after login
export const loginForAppReview =
  (
    customer: IDatabaseItem,
    auth: IDatabaseItem,
    fitkitAuth = true,
    region: "UK" | "US" | "SA" | "JP" = "UK"
  ) =>
  async () => {
    const loginButton = element(by.id(LOGIN_HERO_LOGIN_BUTTON));
    await waitFor(loginButton).toExist().withTimeout(25_000);
    await waitFor(loginButton).toBeVisible().withTimeout(25_000);

    await loginWithCredentials(customer.data.email, auth.data.password, region)();

    await wait(5_000)();

    if (fitkitAuth) {
      await authoriseFitkit(fitkitAuth)();
      await wait(5_000)();
    }
    await wait(3_000)();
  };
