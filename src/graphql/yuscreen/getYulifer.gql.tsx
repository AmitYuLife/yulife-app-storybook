import gql from "graphql-tag";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";
import { GQL_FRAGMENT_YU_PRODUCT } from "../_fragments/yuProduct.gql";

export const GQL_QUERY_GET_YULIFER = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}
  ${GQL_FRAGMENT_YU_PRODUCT}

  query GetYulifer {
    getYulifer {
      userId
      earnRate
      isAvatarCreated
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
    personal: getPersonalProducts {
      pants {
        ...PersonalProduct
      }
      chest {
        ...PersonalProduct
      }
      gloves {
        ...PersonalProduct
      }
      boots {
        ...PersonalProduct
      }
    }
    additional: getAdditionalProducts {
      productId
      productType
      status
      name
      code
      itemSlot
      earnRate
      description
    }
  }
`;
