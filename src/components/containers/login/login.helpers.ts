import { LoginUser } from "@graphql/_core/schema";
import { t } from "@locale";
import { toChallengeSourceType } from "@redux/user/sagas/getAllUserData.helper";
import { ILoginUserPayload } from "@redux/user/user.types";
import { toYuHealthReduxType } from "@utils";

export const validatePassword = (password: string): string => {
  if (!password) {
    return t("validator.password");
  }

  // if (password.length < 6) {
  //     return "Please enter a password";
  // }

  return "";
};

export const toLoginUserSuccessPayload = (data: LoginUser): ILoginUserPayload => ({
  intercomHash: data?.loginUser?.intercomHash,
  todayActivity: data?.loginUser?.user?.todayActivity,
  onboarding: { redeemedOnboarding: data?.loginUser?.user?.redeemedOnboarding },
  activeStreak: data?.loginUser?.user?.activeStreak,
  passiveSteps: {
    exchangeRate: data?.loginUser?.user?.passiveSteps?.exchange,
  },
  passiveMeditation: {
    exchangeRate: data?.loginUser?.user?.passiveMeditation?.exchange,
  },
  user: {
    id: data?.loginUser?.user?.id,
    firstName: data?.loginUser?.user?.firstName,
    lastName: data?.loginUser?.user?.lastName,
    fullName: data?.loginUser?.user?.fullName,
    dateOfBirth: data?.loginUser?.user?.dateOfBirth,
    connections: data?.loginUser?.user?.connections,
    userFeatures: data?.loginUser?.user?.userFeatures,
  },
  levels: {
    activeChallenge: {
      shouldEndOnLastGoalAchieved: data?.loginUser?.user?.activeChallenge?.levelSlot?.shouldEndOnLastGoalAchieved,
      fitKitTypes: data?.loginUser?.user?.activeChallenge?.levelSlot?.fitKitTypes,
      endDateTime: data?.loginUser?.user?.activeChallenge?.challenge?.endDateTime,
      levelSlotId: data?.loginUser?.user?.activeChallenge?.challenge?.levelSlotId,
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
