import gql from "graphql-tag";

export const GQL_MUTATION_CREATE_TOP_UPS_QUOTE = gql`
  mutation CreateTopUpsQuote($input: CreateTopUpsQuoteInput!, $product: ProductCode!) {
    createTopUpsQuote(input: $input, product: $product) {
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
      medicalInvestigationRequired
      salary
      rejected
      coverTypesInfo {
        common {
          actualCost
          sumAssured
          salaryPercentageCovered
          earnRate
        }
        rare {
          actualCost
          sumAssured
          salaryPercentageCovered
          earnRate
        }
        epic {
          actualCost
          sumAssured
          salaryPercentageCovered
          earnRate
        }
        custom {
          actualCost
          sumAssured
          salaryPercentageCovered
          earnRate
        }
      }
    }
  }
`;
