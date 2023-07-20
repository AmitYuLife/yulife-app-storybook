import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetDailyPensionContribution } from "../_core/schema";
import { GQL_FRAGMENT_DAILY_PENSION_CONTRIBUTION } from "@graphql/_fragments/dailyPensionContribution.gql";

const GQL_QUERY_GET_DAILY_PENSION_CONTRIBUTION = gql`
  ${GQL_FRAGMENT_DAILY_PENSION_CONTRIBUTION}

  query GetDailyPensionContribution {
    getDailyPensionContribution {
      ...DailyPensionContribution
    }
  }
`;

export default function getDailyPensionContribution() {
  return client().query<GetDailyPensionContribution>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_DAILY_PENSION_CONTRIBUTION,
  });
}
