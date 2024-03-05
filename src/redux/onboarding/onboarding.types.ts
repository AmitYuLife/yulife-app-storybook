import { IOnboardingStore } from "./onboarding.reducer";

export type IOnboardingGetUserSuccessPayload = {
  onboarding: Pick<IOnboardingStore, "redeemedOnboarding">;
};
