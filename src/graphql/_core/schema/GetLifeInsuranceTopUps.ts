/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetLifeInsuranceTopUps
// ====================================================

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps {
  estimatedCost: number | null;
  payoutAmount: number | null;
  earnRate: number | null;
  avatarRemoteFile: string | null;
  salaryPercentageCovered: number | null;
  newEarnRate: number | null;
  descriptionHeading: string | null;
}

export interface GetLifeInsuranceTopUps {
  getLifeInsuranceTopUps: GetLifeInsuranceTopUps_getLifeInsuranceTopUps | null;
}

export interface GetLifeInsuranceTopUpsVariables {
  grossSalary?: number | null;
  deceaseAgeYear?: number | null;
  deceaseAgeMonth?: number | null;
  coverType?: CoverType | null;
  customCoverPercentage?: number | null;
}
