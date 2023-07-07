import { gql } from "@apollo/client";
import client from "../_core/client";
import { GetDailyPensionContribution } from "../_core/schema";

const GQL_QUERY_GET_DAILY_PENSION_CONTRIBUTION = gql`
  query GetDailyPensionContribution {
    getDailyPensionContribution {
      id
      active
      yuCoinAwarded
      contribution
    }
  }
`;

export default function getDailyPensionContribution() {
  return client().query<GetDailyPensionContribution>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_DAILY_PENSION_CONTRIBUTION,
  });
}
