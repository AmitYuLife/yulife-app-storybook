import gql from "graphql-tag";
import { GetLifeInsuranceTopUps_getLifeInsuranceTopUps } from "@graphql/_core/schema/GetLifeInsuranceTopUps";
import { GQL_FRAGMENT_AVATAR } from "./_fragments.gql";

export interface GetLifeInsuranceTopUpsData {
  getLifeInsuranceTopUps: GetLifeInsuranceTopUps_getLifeInsuranceTopUps;
}

export const GQL_QUERY_GET_LIFE_INSURANCE_TOP_UPS = gql`
  ${GQL_FRAGMENT_AVATAR}
  query GetLifeInsuranceTopUps($input: LifeInsuranceTopUpsInput!) {
    getLifeInsuranceTopUps(input: $input) {
      estimatedCost
      payoutAmount
      earnRate
      avatar {
        ...YuAvatar
      }
    }
  }
`;
