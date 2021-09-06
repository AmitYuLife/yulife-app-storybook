import gql from "graphql-tag";

export const GQL_FRAGMENT_CONTENT_ITEM_STYLE = gql`
  fragment ContentItemStyle on ContentItemStyle {
    property
    value
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT = gql`
  fragment ContentItemTextInput on ContentItemTextInput {
    id
    heading
    value
    answerKey
    validation {
      validationName
      validationValue
    }
    prefixValue
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN = gql`
  fragment ContentItemMarkdown on ContentItemMarkdown {
    id
    title
    markdown
    perkId
    parsedMarkdown
    styles {
      ...ContentItemStyle
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON = gql`
  fragment ContentItemRadioIcon on ContentItemRadioIcon {
    icon {
      ...RemoteImage
    }
    textColor
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_RADIO = gql`
  fragment ContentItemRadio on ContentItemRadio {
    id
    iconOptions
    value
    answerKey
    choices {
      label
      value
      renderAsIcon {
        ...ContentItemRadioIcon
      }
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD = gql`
  fragment ContentItemInfoCard on ContentItemInfoCard {
    id
    image {
      id
      uri
    }
    markdown
    styles {
      ...ContentItemStyle
    }
    hyperlink {
      title
      url
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR = gql`
  fragment ContentItemHeaderBar on ContentItemHeaderBar {
    logo
    leftIcon
    rightIcon
    onLeftIconPress {
      type
      payload
    }
    onRightIconPress {
      type
      payload
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_BAR = gql`
  fragment ContentItemProgressBar on ContentItemProgressBar {
    id
    maxLength
    currentPosition
    progressType: type
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_PAD = gql`
  fragment ContentItemPad on ContentItemPad {
    id
    amount
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_OVERLAY = gql`
  fragment ContentItemOverlay on ContentItemOverlay {
    id
    markdown
    buttons {
      ...ContentItemButton
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_IMAGE = gql`
  fragment ContentItemImage on ContentItemImage {
    id
    image {
      id
      uri
    }
    styles {
      ...ContentItemStyle
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO_ITEM_URL = gql`
  fragment ContentItemPackageCardSlotInfoItemUrl on ContentItemPackageCardSlotInfoItemUrl {
    url {
      ...RemoteImage
    }
    world
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO = gql`
  fragment ContentItemPackageCardSlotInfo on ContentItemPackageCardSlotInfo {
    status
    itemUrl {
      ...ContentItemPackageCardSlotInfoItemUrl
    }
    backgroundUrl {
      ...RemoteImage
    }
    name
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARDS = gql`
  fragment ContentItemPackageCards on ContentItemPackageCards {
    id
    packageCards {
      id
      coverType
      bonusEarnRate
      header {
        backgroundUrl {
          ...RemoteImage
        }
        slotInfo {
          ...ContentItemPackageCardSlotInfo
        }
      }
      powers {
        leftIcon {
          ...RemoteImage
        }
        rightIcon {
          ...RemoteImage
        }
        title
        description
        isLocked
      }
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_DATE_PICKER = gql`
  fragment ContentItemDatePicker on ContentItemDatePicker {
    id
    initialDate
    maxDate
    minDate
    dateFormat
    label
    subLabel
    pickerStyles {
      ...ContentItemStyle
    }
    buttonStyles {
      ...ContentItemStyle
    }
    buttonLeftIcon {
      ...RemoteImage
    }
    buttonRightIcon {
      ...RemoteImage
    }
    size: buttonSize
    answerKey
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_BUTTON = gql`
  fragment ContentItemButton on ContentItemButton {
    id
    label
    buttonType: type
    onPress {
      type
      payload
    }
    icon {
      id
      uri
    }
    rightIcon {
      id
      uri
    }
    styles {
      ...ContentItemStyle
    }
    buttonSize
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_MULTI_BUTTON = gql`
  fragment ContentItemMultiButton on ContentItemMultiButton {
    id
    buttons {
      ...ContentItemButton
    }
    value
    answerKey
  }
`;
