import gql from "graphql-tag";
import { GetLifeInsuranceTopUps_getLifeInsuranceTopUps } from "@graphql/_core/schema";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";
import { PackageId } from "@components/screens/products/fib/fib.helper";

export interface GetLifeInsuranceToUpsData {
  getLifeInsuranceTopUps: GetLifeInsuranceTopUps_getLifeInsuranceTopUps;
}

export type LifeInsuranceUserAnswers = {
  questionId: string;
  value: string;
};
export interface GetLifeInsuranceTopUpsVars {
  grossSalary: number;
  coverType: PackageId;
  customCoverPercentage?: number;
  userAnswers?: LifeInsuranceUserAnswers[];
}

export const GQL_GET_LIFE_INSURANCE_TOP_UPS = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}

  query GetLifeInsuranceTopUps(
    $grossSalary: Int
    $coverType: CoverType
    $customCoverPercentage: Int
    $userAnswers: [LifeInsuranceTopUpsUserAnswers]
  ) {
    getLifeInsuranceTopUps(
      input: {
        grossSalary: $grossSalary
        coverType: $coverType
        customCoverPercentage: $customCoverPercentage
        userAnswers: $userAnswers
      }
    ) {
      estimatedCost
      sumAssured
      earnRate
      salaryPercentageCovered
      newEarnRate
      descriptionHeading
      term
      actualCost
      medicalInvestigationRequired
      rejected
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
  }
`;

export const GQL_GET_MEDICAL_PRACTICES = gql`
  query MedicalPractices($name: String!) {
    getMedicalPractices(nameOrPostcode: $name) {
      organisationCode
      name
      address1
      address2
      address3
      address4
      address5
      postCode
      practicioners {
        organisationCode
        name
        parentOrganisationCode
      }
    }
  }
`;
