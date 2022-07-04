import gql from "graphql-tag";

export const GQL_QUERY_GET_ALL_PURCHASES = gql`
  query GetAllPurchases {
    getAllPurchases {
      __typename
      id
      userId
      rewardProviderId
      amount
      code
      pin
      currency_code
      expiry_date
      name
      updatedAt
      createdAt
      yuCoinsSpent
      delivery_url
      status
      rewardTitle
      metadata {
        __typename
        avios {
          __typename
          firstName
          lastName
          loyaltyProgramme
          accountNumber
        }
      }
      reward {
        __typename
        name
        code
        description
        expiry_date_policy
        cardImage {
          id
          uri
        }
        terms_and_conditions_url
        loyalty_programme
        redeem_steps {
          __typename
          info
          steps
        }
      }
    }
  }
`;
