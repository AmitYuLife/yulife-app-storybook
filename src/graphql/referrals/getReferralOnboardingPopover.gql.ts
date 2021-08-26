import gql from "graphql-tag";

export const GQL_QUERY_GET_REFERRAL_ONBOARDING_POPOVER = gql`
  query GetReferralOnboardingPopover {
    getReferralOnboardingPopover {
      id
      showPopover
      onboardingMessage
      image {
        id
        uri
      }
    }
  }
`;
