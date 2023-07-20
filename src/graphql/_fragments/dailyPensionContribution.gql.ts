import { gql } from "@apollo/client";

export const GQL_FRAGMENT_DAILY_PENSION_CONTRIBUTION = gql`
  fragment DailyPensionContribution on DailyPensionContribution {
    id
    active
    yuCoinAwarded
    contribution
  }
`;
