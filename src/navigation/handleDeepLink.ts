import { store } from "@redux/_core/store";
import { GET_HISTORICAL_DATA } from "@redux/onboarding/onboarding.actions";
import { getQueryStringObject } from "@services/utils";
import Config from "react-native-config";
import { labels, setDuelsScreen, setScreen, setUnauthenticatedRoot } from "./root";
import { ROUTES } from "@navigation/constants";

export default async function handleDeepLink(fullUrl: string, hasToken: boolean, currentRoute?: string) {
  const url = fullUrl.replace("yulifeapp://yulife/", "").replace(Config.JOIN_URL, "");

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
    case url.startsWith("historical-data"):
      if (hasToken) {
        store.dispatch({ type: GET_HISTORICAL_DATA });
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

    default:
      return;
  }
}
