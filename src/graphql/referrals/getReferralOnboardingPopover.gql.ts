import { gql } from "@apollo/client";

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
