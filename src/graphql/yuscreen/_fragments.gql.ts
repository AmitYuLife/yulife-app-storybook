import {
  GQL_FRAGMENT_REMOTE_IMAGE,
  GQL_FRAGMENT_SDUI_ACTION,
  GQL_FRAGMENT_SDUI_STYLE,
  GQL_FRAGMENT_PRODUCT_ACTION,
  GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE,
} from "@graphql/_fragments/shared.gql";
import { gql } from "@apollo/client";

export const GQL_FRAGMENT_YU_SCREEN_POPOVER = gql`
  fragment YuScreenPopover on YuScreenPopover {
    id
    message
  }
`;

export const GQL_YU_SCREEN_PRODUCT_SLOT_ITEM = gql`
  ${GQL_FRAGMENT_YU_SCREEN_POPOVER}
  fragment YuScreenProductSlotItem on YuScreenProductSlotItem {
    itemUrl
    status
    earnRate
    productId
    coverType
    icon {
      name
      backgroundUrl
      colour
    }
    badge {
      badgeUrl
      text {
        value
        colour
      }
    }
    popover {
      ...YuScreenPopover
    }
  }
`;

export const GQL_YU_SCREEN_PRODUCT_SLOT = gql`
  ${GQL_YU_SCREEN_PRODUCT_SLOT_ITEM}
  fragment YuScreenProductSlot on YuScreenProductSlot {
    slot1 {
      ...YuScreenProductSlotItem
    }
    slot2 {
      ...YuScreenProductSlotItem
    }
    slot3 {
      ...YuScreenProductSlotItem
    }
    slot4 {
      ...YuScreenProductSlotItem
    }
  }
`;

export const GQL_FRAGMENT_AVATAR_PART = gql`
  fragment YuAvatarPart on AvatarPart {
    partId
    elements {
      name
      attributes {
        name
        value
      }
    }
  }
`;

export const GQL_FRAGMENT_AVATAR_COLOR = gql`
  fragment YuAvatarColor on AvatarColor {
    colorSchemeId
    colorScheme {
      main
      shadow
      light
      base
      eyebrows
      leftEar
      rightEar
      lips
      tongue
      nose
    }
  }
`;

export const GQL_FRAGMENT_AVATAR = gql`
  ${GQL_FRAGMENT_AVATAR_PART}
  ${GQL_FRAGMENT_AVATAR_COLOR}

  fragment YuAvatar on UserAvatar {
    id
    hair {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    facialHair {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    head {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    eyes {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    body {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    pants {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    chest {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    gloves {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    boots {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    headwear {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
    glasses {
      part {
        ...YuAvatarPart
      }
      color {
        ...YuAvatarColor
      }
    }
  }
`;

export const GQL_QUERY_PRODUCT_PAYMENT_HISTORY_INFO_PANEL_BUTTON = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}
  fragment ProductPaymentHistoryInfoPanelButton on ProductPaymentHistoryInfoPanelButton {
    label
    onPress {
      ...SduiAction
    }
    event {
      ...SduiAction
    }
  }
`;

export const GQL_QUERY_PRODUCT_PAYMENT_HISTORY_INFO_PANEL_CONTAINER_ACTIONS = gql`
  ${GQL_FRAGMENT_SDUI_ACTION}
  fragment ProductPaymentHistoryInfoPanelContainerActions on ProductPaymentHistoryInfoPanelContainerActions {
    onPress {
      ...SduiAction
    }
    event {
      ...SduiAction
    }
  }
`;

export const GQL_QUERY_PRODUCT_PAYMENT_HISTORY_INFO_PANEL = gql`
  ${GQL_FRAGMENT_REMOTE_IMAGE}
  ${GQL_QUERY_PRODUCT_PAYMENT_HISTORY_INFO_PANEL_BUTTON}
  ${GQL_QUERY_PRODUCT_PAYMENT_HISTORY_INFO_PANEL_CONTAINER_ACTIONS}
  fragment YuScreenProductPaymentHistoryInfoPanel on YuScreenProductPaymentHistoryInfoPanel {
    markdown
    remoteImage {
      ...RemoteImage
    }
    type
    titleMarkdown
    showCloseIcon
    button {
      ...ProductPaymentHistoryInfoPanelButton
    }
    containerActions {
      ...ProductPaymentHistoryInfoPanelContainerActions
    }
  }
`;

export const GQL_QUERY_PRODUCT_PAYMENT_HISTORY_ITEM = gql`
  fragment YuScreenProductPaymentHistoryItem on YuScreenProductPaymentHistoryItem {
    id
    amount
    date
    status
  }
`;

export const GQL_FRAGMENT_YU_SCREEN_PRODUCT_BUTTON_ACTION = gql`
  ${GQL_FRAGMENT_PRODUCT_ACTION}
  ${GQL_FRAGMENT_SDUI_ACTION}

  fragment YuScreenProductButtonAction on YuScreenProductButtonAction {
    productAction {
      ...ProductAction
    }
    sduiAction {
      ...SduiAction
    }
  }
`;

export const GQl_FRAGMENT_YU_SCREEN_CAROUSEL_ITEM = gql`
  ${GQL_FRAGMENT_VARIABLE_REMOTE_IMAGE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_YU_SCREEN_PRODUCT_BUTTON_ACTION}
  ${GQL_FRAGMENT_SDUI_STYLE}

  fragment YuScreenCarouselItem on YuScreenCarouselItem {
    backgroundColor
    button {
      label
      onPress {
        ...YuScreenProductButtonAction
      }
      event {
        ...SduiAction
      }
    }
    contentContainerStyles {
      ...SduiStyle
    }
    descriptionMarkdown
    descriptionMarkdownStyles {
      ...SduiStyle
    }
    images {
      ...VariableRemoteImage
    }
    titleMarkdown
    titleMarkdownStyles {
      ...SduiStyle
    }
    variant
  }
`;
