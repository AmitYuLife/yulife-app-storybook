import { call, delay, select, spawn } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { dismissYuScreenOnboarding } from "@redux/user/user.actions";
import { performMobileOnboardingStep } from "@graphql/onboardingSteps/performMobileOnboardingStep.gql";
import { getUserAvatar } from "../user.selectors";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

export default function* dismissYuScreenOnboardingSaga({ payload }: ReturnType<typeof dismissYuScreenOnboarding>) {
  try {
    const avatar: ReturnType<typeof getUserAvatar> = yield select(getUserAvatar);
    const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;
    if (!yumojiRemoteUrl) {
      yield call(() =>
        Navigation.push(ROUTES.yuScreen, {
          component: {
            id: ROUTES.yumojiBuilder,
            name: ROUTES.yumojiBuilder,
          },
        })
      );
      // Ensures navigation animation has fully completed before marking onboarding step as complete.
      yield delay(1000);
    }

    yield call(
      performMobileOnboardingStep,
      {
        step: payload,
      },
      ["GetYuScreen"]
    );
  } catch (e) {
    yield spawn(() => {
      Logger.error(e, { event: "dismissYuScreenOnboarding" });
    });
  }
}
