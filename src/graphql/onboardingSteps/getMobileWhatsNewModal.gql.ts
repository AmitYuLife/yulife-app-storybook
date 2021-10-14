import gql from "graphql-tag";
import client from "../_core/client";
import { GetMobileWhatsNewModal } from "@graphql/_core/schema";

export const GQL_QUERY_GET_MOBILE_WHATS_NEW_MODAL = gql`
  query GetMobileWhatsNewModal {
    getMobileWhatsNewModal {
      id
      title
      autoPlaySpeedMs
      dismissMinVisibleIndex
      ctaMinVisibleIndex
      theme {
        primaryColor
      }
      button {
        label
        onPress {
          type
          payload
        }
      }
      close {
        icon {
          id
          uri
        }
        onPress {
          type
          payload
        }
      }
      items {
        heading
        paragraph
        styles {
          property
          value
        }
        backgroundImage {
          id
          uri
        }
      }
    }
  }
`;

export const getMobileWhatsNewModalClient = () => {
  return client().query<GetMobileWhatsNewModal>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_MOBILE_WHATS_NEW_MODAL,
  });
};
