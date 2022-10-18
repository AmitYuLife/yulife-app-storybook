import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_BENEFICIARIES_SECTION = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemBeneficiariesSection on ContentItemBeneficiariesSection {
    id
    productId
    styles {
      ...SduiStyle
    }
  }
`;
