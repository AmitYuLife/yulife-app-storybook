import gql from "graphql-tag";

export const GQL_QUERY_GET_TOP_UPS_QUOTE = gql`
  query GetTopUpsQuote($input: GetTopUpsQuoteInput!, $product: ProductCode!) {
    getTopUpsQuote(input: $input, product: $product) {
      quoteId
      productEntityId
      actualCost
      sumAssured
      earnRate
      salaryPercentageCovered
      newEarnRate
      descriptionHeading
      term
      rejected
      status
      medicalInvestigationRequired
      createdAt
      coverType
      salary
      userAnswers {
        questionId
        value
      }
    }
  }
`;
