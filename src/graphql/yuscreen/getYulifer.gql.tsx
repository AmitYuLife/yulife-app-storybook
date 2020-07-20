import gql from "graphql-tag";
import { GQL_FRAGMENT_PRODUCT } from "./_fragments.gql";
import { GetYulifer_getYulifer } from "@graphql/_core/schema";

export interface GetYuliferData {
  getYulifer: GetYulifer_getYulifer;
}

export const GQL_QUERY_GET_YULIFER = gql`
  ${GQL_FRAGMENT_PRODUCT}

  query GetYulifer {
    getYulifer {
      userId
      earnRate
      isAvatarCreated
      avatarRemoteFile
      products {
        employer {
          ...YuProduct
        }
        personal {
          ...YuProduct
        }
        charms {
          ...YuProduct
        }
      }
    }
  }
`;
