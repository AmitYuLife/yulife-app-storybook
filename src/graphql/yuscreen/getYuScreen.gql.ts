import { GQL_FRAGMENT_REMOTE_IMAGE, GQL_FRAGMENT_SDUI_ACTION } from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";
import client from "@graphql/_core/client";
import { GetYuScreen } from "@graphql/_core/schema";

const GQL_FRAGMENT_YU_SCREEN_PRODUCT_SLOT_ITEM = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}

  fragment YuScreenProduct on YuScreenProduct {
    id
    leftText
    leftTextColour
    status
    title
    titleColour
    backgroundColour
    topShadowColour
    bottomShadowColour
    leftBackgroundImage {
      ...RemoteImage
    }
    rightIcon {
      ...RemoteImage
    }
    rightStatusIcon {
      ...RemoteImage
    }
    onPress {
      type
      payload
    }
    event {
      type
      payload
    }
  }
`;

const GQl_FRAGMENT_YU_SCREEN_CAROUSEL_ITEM = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment YuScreenCarouselItem on YuScreenCarouselItem {
    image {
      ...RemoteImage
    }
    altText
    button {
      label
      onPress {
        ...SduiAction
      }
      event {
        ...SduiAction
      }
    }
  }
`;

const GQL_FRAGMENT_YU_SCREEN_CAROUSEL = gql`
  ${GQl_FRAGMENT_YU_SCREEN_CAROUSEL_ITEM}
  fragment YuScreenCarousel on YuScreenCarousel {
    heading
    items {
      ...YuScreenCarouselItem
    }
  }
`;

export const GQL_QUERY_GET_YU_SCREEN = gql`
  ${GQL_FRAGMENT_YU_SCREEN_PRODUCT_SLOT_ITEM}
  ${GQL_FRAGMENT_YU_SCREEN_CAROUSEL}

  query GetYuScreen {
    getYuScreen {
      productSlots {
        ...YuScreenProduct
      }
      productCarousel {
        ...YuScreenCarousel
      }
    }
  }
`;

export const getYuScreen = () => {
  return client().query<GetYuScreen>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_YU_SCREEN,
  });
};
