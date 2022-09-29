import { gql } from "@apollo/client";

export const GQL_QUERY_GET_YU_SCREEN_PRODUCT_SURVEY = gql`
  query GetYuScreenProductSurvey {
    getYuScreenProductSurvey {
      id
      title
      description
      postSubmissionMessage
      options {
        id
        label
      }
    }
  }
`;
