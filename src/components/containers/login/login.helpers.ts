import { LoginUserMutation } from "@graphql/__generated";
import { t } from "@locale";
import { ILoginUserPayload } from "@redux/user/user.types";
import { VoidFunction } from "@utils";
import { bottomTabs, ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";

export const validatePassword = (password: string): string => {
  if (!password) {
    return t("validator.password");
  }

  // if (password.length < 6) {
  //     return "Please enter a password";
  // }

  return "";
};

export const toLoginUserSuccessPayload = (data: LoginUserMutation): ILoginUserPayload => ({
  intercomHash: data?.loginUser?.intercomHash,
  onboarding: { redeemedOnboarding: data?.loginUser?.user?.redeemedOnboarding },
  passiveSteps: {
    exchangeRate: {
      yucoin: data?.loginUser?.user?.passiveSteps?.exchange?.yucoin,
      steps: data?.loginUser?.user?.passiveSteps?.exchange?.steps,
      meditation: data?.loginUser?.user?.passiveSteps?.exchange?.meditation,
      surge: data?.loginUser?.user?.passiveSteps?.exchange?.surge,
    },
  },
  user: {
    id: data?.loginUser?.user?.id,
    firstName: data?.loginUser?.user?.firstName,
    lastName: data?.loginUser?.user?.lastName,
    fullName: data?.loginUser?.user?.fullName,
    userFeatures: data?.loginUser?.user?.userFeatures?.map((feature) => ({
      name: feature.name,
      value: feature.value,
    })),
    supportConfig: {
      supportLevel: data?.loginUser?.user?.supportConfig?.supportLevel,
    },
  },
});

type LoginNavigatableRoutes =
  | typeof ROUTES.onboardingSignUpReward
  | typeof ROUTES.yuHealthConnect
  | typeof ROUTES.onboardingFitKitConnect;

export const navigateToRoute = (componentId: string, route: LoginNavigatableRoutes, navigateToNext?: VoidFunction) => {
  const componentExtraOptions = navigateToNext ? { passProps: { navigateToNext } } : {};

  return Navigation.push(componentId, {
    component: {
      id: route,
      name: route,
      options: { bottomTabs },
      ...componentExtraOptions,
    },
  });
};
