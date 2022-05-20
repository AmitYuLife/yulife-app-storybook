import { getQueryStringObject } from "@utils";
import { labels, setDuelsScreen, setScreen, setUnauthenticatedRoot } from "./root";
import { ROUTES } from "@navigation/constants";
import region from "@services/region";

export default async function handleDeepLink(fullUrl: string, hasToken: boolean, currentRoute?: string) {
  const membersUrl = region.getConfig("urls").members;
  const url = fullUrl.replace("yulifeapp://yulife/", "").replace(membersUrl + membersUrl.endsWith("/") ? "" : "/", "");

  switch (true) {
    case url.startsWith(labels[0].name):
      if (hasToken) {
        labels[0].onPress();
      }

      return;
    case url.startsWith(labels[1].name):
      if (hasToken) {
        labels[1].onPress();
      }

      return;
    case url.startsWith(labels[2].name):
      if (hasToken) {
        labels[2].onPress();
      }

      return;
    case url.startsWith(labels[3].name):
      if (hasToken) {
        labels[3].onPress();
      }

      return;
    case url.startsWith(labels[4].name):
      if (hasToken) {
        labels[4].onPress();
      }

      return;

    case url.startsWith("referral-information"):
      if (hasToken) {
        await setScreen(currentRoute, ROUTES.referralInformation);
      }

      return;
    case url.startsWith("signup/confirm"): // OTP
      if (!hasToken) {
        const props = getQueryStringObject(url);
        if (props.redirectUrl === "/member") {
          await setUnauthenticatedRoot(props);
        }
      }

      return;
    case url.startsWith("duels-hub"):
      if (hasToken) {
        await setDuelsScreen(currentRoute);
      }

      return;

    case url.startsWith("perk-provision"): {
      const perkId = url.split("/")[1];

      if (hasToken && perkId) {
        await setScreen(currentRoute, ROUTES.perkSubscriptionInfo, { perkId });
      }

      return;
    }

    default:
      return;
  }
}
