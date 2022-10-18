import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SDUI_STYLE } from "../shared.gql";

export const GQL_FRAGMENT_CONTENT_ITEM_COST_PAYOUT_BENEFIT_CARD = gql`
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment ContentItemCostPayoutBenefitCard on ContentItemCostPayoutBenefitCard {
    id
    costValue
    costDescription
    coverType
    benefitDescription
    benefitValue
    benefitIntervalMarkdown
    styles {
      ...SduiStyle
    }
  }
`;
