import gql from "graphql-tag";

export const GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP = gql`
  mutation PerformMobileOnboardingStep($step: MobileOnboardingStepPerformed) {
    performMobileOnboardingStep(step: $step)
  }
`;
