import {
  GQL_FRAGMENT_REMOTE_IMAGE,
  GQL_FRAGMENT_SDUI_ACTION,
  GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE,
} from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";
import client from "@graphql/_core/client";
import { GetYuScreen } from "@graphql/_core/schema";
import { GQl_FRAGMENT_YU_SCREEN_CAROUSEL_ITEM, GQL_FRAGMENT_YU_SCREEN_PRODUCT_BUTTON_ACTION } from "./_fragments.gql";

const GQL_FRAGMENT_YU_SCREEN_ONBOARDING = gql`
  fragment YuScreenOnboarding on YuScreenOnboarding {
    id
    heading
    text
    button {
      event {
        ...SduiAction
      }
      label
    }
    placeholder {
      ...YuScreenProduct
    }
    dismissByPlaceholder
  }
`;

const GQL_FRAGMENT_YU_SCREEN_PRODUCT_SLOT_ITEM = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_YU_SCREEN_PRODUCT_BUTTON_ACTION}

  fragment YuScreenProduct on YuScreenProduct {
    id
    leftText
    leftTextColour
    status
    title
    titleColour
    text
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
      ...YuScreenProductButtonAction
    }
    event {
      ...SduiAction
    }
    showOnOnboarding
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

const GQL_FRAGMENT_YU_SCREEN_SURVEY_FOOTER = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  fragment YuScreenSurveyFooter on YuScreenSurveyFooter {
    markdown
    backgroundColour
    button {
      label
      onPress {
        ...SduiAction
      }
      event {
        ...SduiAction
      }
    }
    image {
      ...RemoteImage
    }
  }
`;

const GQL_FRAGMENT_YU_SCREEN_YUMOJI_PROMPT = gql`
  fragment YuScreenYumojiPrompt on YuScreenYumojiPrompt {
    buttonText
    heading
    text
  }
`;

export const GQL_QUERY_GET_YU_SCREEN = gql`
  ${GQL_FRAGMENT_YU_SCREEN_ONBOARDING}
  ${GQL_FRAGMENT_YU_SCREEN_PRODUCT_SLOT_ITEM}
  ${GQL_FRAGMENT_YU_SCREEN_CAROUSEL}
  ${GQL_FRAGMENT_YU_SCREEN_SURVEY_FOOTER}
  ${GQL_FRAGMENT_YU_SCREEN_YUMOJI_PROMPT}
  ${GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE}

  query GetYuScreen {
    getYuScreen {
      onboarding {
        ...YuScreenOnboarding
      }
      productSlots {
        ...YuScreenProduct
      }
      productCarousel {
        ...YuScreenCarousel
      }
      surveyFooter {
        ...YuScreenSurveyFooter
      }
      yumojiPrompt {
        ...YuScreenYumojiPrompt
      }
      carrierLogo {
        ...VariableRemoteImage
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
