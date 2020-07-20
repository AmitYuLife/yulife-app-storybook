import gql from "graphql-tag";
import { GetLifeInsuranceTopUps_getLifeInsuranceTopUps } from "@graphql/_core/schema";
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
      avatarRemoteFile
      salaryPercentageCovered
      newEarnRate
      descriptionHeading
    }
  }
`;
