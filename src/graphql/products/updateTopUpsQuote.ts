import gql from "graphql-tag";

export const GQL_MUTATION_UPDATE_TOP_UPS_QUOTE = gql`
  mutation UpdateTopUpsQuote($fibQuote: FibQuote, $quoteId: String!, $archiveQuote: Boolean) {
    updateFibQuote(fibQuote: $fibQuote, quoteId: $quoteId, archiveQuote: $archiveQuote) {
      updated
    }
  }
`;
