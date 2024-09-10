import { LoginUserMutation } from "@graphql/__generated";
import { t } from "@locale";
import { toChallengeSourceType } from "@redux/user/sagas/getAllUserData.helper";
import { ILoginUserPayload } from "@redux/user/user.types";
import { toYuHealthReduxType, VoidFunction } from "@utils";
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
  passiveMeditation: {
    exchangeRate: {
      yucoin: data?.loginUser?.user?.passiveMeditation?.exchange?.yucoin,
      steps: data?.loginUser?.user?.passiveMeditation?.exchange?.steps,
      meditation: data?.loginUser?.user?.passiveMeditation?.exchange?.meditation,
      surge: data?.loginUser?.user?.passiveMeditation?.exchange?.surge,
    },
  },
  user: {
    id: data?.loginUser?.user?.id,
    firstName: data?.loginUser?.user?.firstName,
    lastName: data?.loginUser?.user?.lastName,
    fullName: data?.loginUser?.user?.fullName,
    connections: data?.loginUser?.user?.connections,
    userFeatures: data?.loginUser?.user?.userFeatures?.map((feature) => ({
      name: feature.name,
      value: feature.value,
    })),
    supportConfig: {
      supportLevel: data?.loginUser?.user?.supportConfig?.supportLevel,
    },
  },
  levels: {
    activeChallenge: {
      id: data?.loginUser?.user?.activeChallenge?.challenge?.id,
      shouldEndOnLastGoalAchieved: data?.loginUser?.user?.activeChallenge?.levelSlot?.shouldEndOnLastGoalAchieved,
      fitKitTypes: data?.loginUser?.user?.activeChallenge?.levelSlot?.fitKitTypes,
      endDateTime: data?.loginUser?.user?.activeChallenge?.challenge?.endDateTime,
      levelSlotId: data?.loginUser?.user?.activeChallenge?.challenge?.levelSlotId,
      level: data?.loginUser?.user?.activeChallenge?.challenge?.level,
      levelSlotTemplateId: data?.loginUser?.user?.activeChallenge?.challenge?.levelSlotTemplateId,
      milestones: data?.loginUser?.user?.activeChallenge?.levelSlot?.milestones,
      rating: data?.loginUser?.user?.activeChallenge?.challenge?.rating,
      startDateTime: data?.loginUser?.user?.activeChallenge?.challenge?.startDateTime,
      subtype: data?.loginUser?.user?.activeChallenge?.levelSlot?.subtype,
      unit: data?.loginUser?.user?.activeChallenge?.levelSlot?.unit,
      challengeIsActive: !!data?.loginUser?.user?.activeChallenge?.challenge?.id,
      yuHealth: toYuHealthReduxType(data.loginUser?.user?.activeChallenge?.levelSlot?.yuHealth),
      createdBySource: toChallengeSourceType(data?.loginUser?.user?.activeChallenge?.challenge?.createdBySource),
    },
    challengesDoneToday: data?.loginUser?.user?.challengesDoneToday,
    dailyChallengeAmountAvailable: data?.loginUser?.user?.dailyChallengeAmountAvailable,
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
