import gql from "graphql-tag";

export const GQL_QUERY_GET_CHECKOUT_DETAILS = gql`
  query GetCheckoutDetails($input: GetTopUpsQuoteInput!, $product: ProductCode!) {
    paymentDetails: getPaymentDetails {
      expMonth
      expYear
      last4
      name
      brand
    }
    quote: getTopUpsQuote(input: $input, product: $product) {
      actualCost
      coverType
    }
    personal: getPersonalProducts {
      chest {
        productId
        name
        options {
          type
          styles {
            world
            name
            icon
            background
            armor
          }
        }
      }
    }
    gpDetails: getGpDetails {
      gpAddress
      gpName
      gpPostcode
      gpPractice
      gpTown
    }
    contactDetails: getContactDetails(contactDetailType: personal) {
      addressFirstLine
      addressSecondLine
      addressCity
      addressPostCode
      email
      phone
      firstName
      lastName
    }
  }
`;
