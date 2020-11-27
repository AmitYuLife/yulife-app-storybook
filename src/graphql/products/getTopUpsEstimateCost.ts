import gql from "graphql-tag";

export const GQL_QUERY_GET_TOP_UPS_ESTIMATE_COST = gql`
  query GetTopUpsEstimateCost($input: TopUpsEstimateCostInput!, $product: ProductCode!) {
    getTopUpsEstimateCost(input: $input, product: $product) {
      estimatedCost
      sumAssured
      earnRate
      salaryPercentageCovered
      newEarnRate
      descriptionHeading
      term
    }
  }
`;
