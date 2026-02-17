import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { LOGIN_HERO_LOGIN_BUTTON } from "@ids";
import { loginWithCredentials, authoriseFitkit } from "@socket";
import { wait } from "@navigation";

// feedback form modal appears immediately after login
export const loginForFeedbackForm =
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
