import gql from "graphql-tag";
import client from "../_core/client";
import { PerformMobileOnboardingStep, PerformMobileOnboardingStepVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP = gql`
  mutation PerformMobileOnboardingStep($step: MobileOnboardingStepPerformed) {
    performMobileOnboardingStep(step: $step)
  }
`;

export const performMobileOnboardingStep = (
  variables: PerformMobileOnboardingStepVariables,
  refetchQueries: string[]
) =>
  client().mutate<PerformMobileOnboardingStep>({
    mutation: GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP,
    variables,
    refetchQueries,
  });
