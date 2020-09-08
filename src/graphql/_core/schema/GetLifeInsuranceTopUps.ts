/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoverType, LifeInsuranceTopUpsUserAnswers } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetLifeInsuranceTopUps
// ====================================================

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatarRemoteFiles {
  __typename: "AvatarRemoteFiles";
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface GetLifeInsuranceTopUps_getLifeInsuranceTopUps {
  estimatedCost: number | null;
  sumAssured: number | null;
  earnRate: number | null;
  salaryPercentageCovered: number | null;
  newEarnRate: number | null;
  descriptionHeading: string | null;
  term: number | null;
  actualCost: number | null;
  avatarRemoteFiles: GetLifeInsuranceTopUps_getLifeInsuranceTopUps_avatarRemoteFiles | null;
}

export interface GetLifeInsuranceTopUps {
  getLifeInsuranceTopUps: GetLifeInsuranceTopUps_getLifeInsuranceTopUps | null;
}

export interface GetLifeInsuranceTopUpsVariables {
  grossSalary?: number | null;
  coverType?: CoverType | null;
  customCoverPercentage?: number | null;
  userAnswers?: (LifeInsuranceTopUpsUserAnswers | null)[] | null;
}
