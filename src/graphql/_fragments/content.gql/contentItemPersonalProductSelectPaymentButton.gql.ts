import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_INFO_BUTTON } from "./contentItemInfoButton.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_SELECT_PAYMENT_BUTTON = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_INFO_BUTTON}

  fragment ContentItemPersonalProductSelectPaymentButton on ContentItemPersonalProductSelectPaymentButton {
    id
    companyName
    companyCountryCode
    themeStyle
    applePayEnabled
    googlePayEnabled
    button {
      ...ContentItemInfoButton
    }
  }
`;
