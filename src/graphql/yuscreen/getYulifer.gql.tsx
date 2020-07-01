import gql from "graphql-tag";
import { GQL_FRAGMENT_PRODUCT, GQL_FRAGMENT_AVATAR } from "./_fragments.gql";

export const GQL_QUERY_GET_YULIFER = gql`
  ${GQL_FRAGMENT_PRODUCT}
  ${GQL_FRAGMENT_AVATAR}

  query GetYulifer {
    getYulifer {
      userId
      earnRate
      isAvatarCreated
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
      avatar {
        ...YuAvatar
      }
    }
  }
`;
