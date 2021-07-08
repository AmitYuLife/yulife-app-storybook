import gql from "graphql-tag";

export const GQL_QUERY_GET_REWARDS = gql`
  query GetRewards($width: Float, $height: Float) {
    getRewards {
      __typename
      id
      reward_sticker
      loyalty_programme
      rewardProviderId
      availability
      progression_level
      available_denominations {
        __typename
        yuCoin
        value
        stock
      }
      cardImage {
        id
        uri
      }
      code
      currency_code
      denomination_type
      description
      e_code_usage_type
      expiry_date_policy
      link_type
      maximum_value
      minimum_value
      name
      redeem_steps {
        __typename
        id
        info
        steps
      }
      terms_and_conditions_url
      uiSettings {
        __typename
        id
        logoWidth
        logoHeight
        ctaLabel
        alertHeading
        alertSubheading
        alertCancelLabel
        alertOkLabel
        offerHeading
        offerSubheading
      }
      logoImageUri
      background {
        id
        uri(options: { width: $width, height: $height })
      }
    }
  }
`;
