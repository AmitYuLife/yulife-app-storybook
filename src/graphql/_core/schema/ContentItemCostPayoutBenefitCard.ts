/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL fragment: ContentItemCostPayoutBenefitCard
// ====================================================

export interface ContentItemCostPayoutBenefitCard_styles {
  property: string;
  value: string;
}

export interface ContentItemCostPayoutBenefitCard {
  id: string;
  costValue: string;
  costDescription: string;
  coverType: CoverType;
  benefitDescription: string;
  benefitValue: string;
  benefitIntervalMarkdown: string;
  styles: ContentItemCostPayoutBenefitCard_styles[] | null;
}
