import gql from "graphql-tag";
import { GQL_FRAGMENT_PRODUCT, GQL_FRAGMENT_AVATAR } from "./_fragments.gql";
import { GetYuliferWithAvatar_getYulifer } from "@graphql/_core/schema";

export interface GetYuliferWithAvatarData {
  getYulifer: GetYuliferWithAvatar_getYulifer;
}

export const GQL_QUERY_GET_YULIFER_WITH_AVATAR = gql`
  ${GQL_FRAGMENT_PRODUCT}
  ${GQL_FRAGMENT_AVATAR}

  query GetYuliferWithAvatar {
    getYulifer {
      userId
      earnRate
      isAvatarCreated
      avatarRemoteFile
      avatar {
        ...YuAvatar
      }
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
