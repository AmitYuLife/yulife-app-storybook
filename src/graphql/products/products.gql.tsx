import gql from "graphql-tag";
import { GetLifeInsuranceTopUps_getLifeInsuranceTopUps } from "@graphql/_core/schema";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";
import { PackageId } from "@components/screens/products/fib/fib.helper";

export interface GetLifeInsuranceToUpsData {
  getLifeInsuranceTopUps: GetLifeInsuranceTopUps_getLifeInsuranceTopUps;
}

export interface GetLifeInsuranceTopUpsVars {
  grossSalary: number;
  deceaseAgeYear: number;
  deceaseAgeMonth: number;
  coverType: PackageId;
  customCoverPercentage: number;
}

export const GQL_GET_LIFE_INSURANCE_TOP_UPS = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}

  query GetLifeInsuranceTopUps(
    $grossSalary: Int
    $deceaseAgeYear: Int
    $deceaseAgeMonth: Int
    $coverType: CoverType
    $customCoverPercentage: Int
  ) {
    getLifeInsuranceTopUps(
      input: {
        grossSalary: $grossSalary
        deceaseAgeYear: $deceaseAgeYear
        deceaseAgeMonth: $deceaseAgeMonth
        coverType: $coverType
        customCoverPercentage: $customCoverPercentage
      }
    ) {
      estimatedCost
      payoutAmount
      earnRate
      salaryPercentageCovered
      newEarnRate
      descriptionHeading
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
  }
`;
