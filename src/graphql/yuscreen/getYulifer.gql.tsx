import gql from "graphql-tag";
import { GQL_FRAGMENT_AVATAR_REMOTE_FILES } from "../_fragments/avatarRemoteFiles.gql";
import { GetYulifer_getYulifer } from "@graphql/_core/schema";

export interface GetYuliferData {
  getYulifer: GetYulifer_getYulifer;
}

export const GQL_QUERY_GET_YULIFER = gql`
  ${GQL_FRAGMENT_AVATAR_REMOTE_FILES}

  query GetYulifer {
    getYulifer {
      userId
      earnRate
      isAvatarCreated
      avatarRemoteFiles {
        ...YumojiRemoteFiles
      }
    }
    personal: getYuProducts(productType: personal) {
      productId
      productType
      status
      name
      code
      itemSlot
      earnRate
      description
      options {
        type
        earnRate
        heading
        percentageCovered
        styles {
          world
          name
          icon
          background
          armor
        }
      }
    }
    employer: getYuProducts(productType: employer) {
      productId
      productType
      status
      name
      code
      itemSlot
      earnRate
      description
    }
    charms: getYuProducts(productType: alpha) {
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
