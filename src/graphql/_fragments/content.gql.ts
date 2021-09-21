import gql from "graphql-tag";

export const GQL_FRAGMENT_CONTENT_ITEM_STYLE = gql`
  fragment ContentItemStyle on ContentItemStyle {
    property
    value
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_CONFIRM = gql`
  fragment ContentItemConfirm on ContentItemConfirm {
    id
    confirmLabel: text
    answerKey
    styles {
      ...ContentItemStyle
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_TEXT = gql`
  fragment ContentItemText on ContentItemText {
    id
    textType: type
    text
    colour
    textAlign
    underline
    numberOfLines
    styles {
      ...ContentItemStyle
    }
  }
`;

export const GQL_FRAGMENT_COVER_LIST_ITEM = gql`
  fragment ContentItemCoverListItem on ContentItemCoverListItem {
    percentCovered
    monthlyCost
    monthlyCostSuffix
    monthlyPayout
    productPreviewMarkdown
    collapsingHeaderProductInfoHeading
    coverType
    slotBackgroundUrl {
      ...RemoteImage
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_COLLAPSING_HEADER_PRODUCT_INFO = gql`
  fragment ContentItemCollapsingHeaderProductInfo on ContentItemCollapsingHeaderProductInfo {
    id
    answerKey
    coverList {
      ...ContentItemCoverListItem
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER = gql`
  fragment ContentItemRowIconTextBanner on ContentItemRowIconTextBanner {
    id
    bannerType: type
    markdown
    bannerIcon: icon {
      ...RemoteImage
    }
    styles {
      ...ContentItemStyle
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT = gql`
  fragment ContentItemTextInput on ContentItemTextInput {
    id
    heading
    answerKey
    type
    prefixValue
    validation {
      validationName
      validationValue
    }
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
    markdownContainerStyle {
      ...ContentItemStyle
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_LOTTIE = gql`
  fragment ContentItemLottie on ContentItemLottie {
    id
    uri
    autoPlay
    loop
    styles {
      property
      value
    }
    onAnimationEnd {
      type
      payload
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_RADIO_ICON = gql`
  fragment ContentItemRadioIcon on ContentItemRadioIcon {
    icon {
      id
      uri(options: { width: 64, height: 64 })
    }
    textColor
    selectedStyles {
      property
      value
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_RADIO = gql`
  fragment ContentItemRadio on ContentItemRadio {
    id
    iconOptions
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

export const GQL_FRAGMENT_CONTENT_ITEM_LIST = gql`
  fragment ContentItemList on ContentItemList {
    id
    wrapperStyles {
      ...ContentItemStyle
    }
    items {
      id
      text {
        value
        colour
      }
      circle {
        colour
        backgroundColour
      }
      styles {
        ...ContentItemStyle
      }
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_PERSONAL_PRODUCT_REVIEW_ITEM = gql`
  fragment ContentItemPersonalProductReviewItem on ContentItemPersonalProductReviewItem {
    id
    text: heading
    subheading
    stepKey
    leftIcon {
      id
      uri(options: { width: 64, height: 64 })
    }
    rightIcon {
      id
      uri(options: { width: 64, height: 64 })
    }
    onPress {
      type
      payload
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
    wrapperStyles {
      ...ContentItemStyle
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_MULTI_SELECT = gql`
  fragment ContentItemMultiSelect on ContentItemMultiSelect {
    id
    answerKey
    choices {
      id
      label
      icon {
        id
        uri(options: { width: 128, height: 128 })
      }
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARD_SLOT_INFO = gql`
  fragment ContentItemPackageCardSlotInfo on ContentItemPackageCardSlotInfo {
    name
    status
    backgroundUrl {
      ...RemoteImage
    }
    logoUrl {
      id
      uri(options: { width: 64, height: 64 })
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_PRODUCT_PREVIEW = gql`
  fragment ContentItemPersonalProductPreview on ContentItemPersonalProductPreview {
    id
    answerKey
    answerKeyDefaultValue
    documentHyperlink: hyperlink {
      title
      url
      leftIcon {
        ...RemoteImage
      }
    }
    styles {
      ...ContentItemStyle
    }
    coverList {
      ...ContentItemCoverListItem
    }
    coverExpirationDate
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_COVER_PICKER = gql`
  fragment ContentItemCoverPicker on ContentItemCoverPicker {
    id
    answerKey
    answerKeyDefaultValue
    hasSelectedCustomCover
    styles {
      ...ContentItemStyle
    }
    options {
      value
      coverType
      subheading
      heading
    }
    coverPickerTitle: title {
      ...ContentItemText
    }
    customCover {
      title
      button {
        ...ContentItemButton
      }
      itemsPicker {
        ...ContentItemScrollableItemsPicker
      }
    }
  }
`;
export const GQL_FRAGMENT_CONTENT_ITEM_SCROLLABLE_ITEMS_PICKER = gql`
  fragment ContentItemScrollableItemsPicker on ContentItemScrollableItemsPicker {
    id
    answerKey
    styles {
      ...ContentItemStyle
    }
    range {
      min
      max
      step
    }
    styleVariants {
      id
      minVisibleIndex
      maxVisibleIndex
      item {
        color
      }
      overlay {
        backdropStyles {
          ...ContentItemStyle
        }
        highlightLabel
        highlightLabelColor
        overlayTitle
        overlayTitleWrapperStyles {
          ...ContentItemStyle
        }
      }
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_PACKAGE_CARDS = gql`
  fragment ContentItemPackageCards on ContentItemPackageCards {
    id
    answerKey
    answerKeyDefaultValue
    packageCards {
      id
      value
      packageMaxValue
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

export const GQL_FRAGMENT_CONTENT_ITEM_SELECTED_PACKAGE_CARD = gql`
  fragment ContentItemSelectedPackageCard on ContentItemSelectedPackageCard {
    id
    previousPrice
    price
    priceDescription
    coverType
    backgroundUrl {
      id
      uri
    }
    slotInfo {
      ...ContentItemPackageCardSlotInfo
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
    value
    disabledState
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
    styles {
      ...ContentItemStyle
    }
  }
`;

export const GQL_FRAGMENT_CONTENT_ITEM_SCROLL_PICKER = gql`
  fragment ContentItemScrollPicker on ContentItemScrollPicker {
    id
    pickerConfirmButtonLabel
    pickerCancelButtonLabel
    button {
      ...ContentItemButton
    }
    answerKey
    displayFormat {
      answerKey
      plural
      singular
      singularValue
      isDynamic
    }
    variants {
      id
      answerKey
      toggleLabel
      toggleIndex
      wheels {
        answerKey
        min
        max
        step
        suffixPlural
        suffixSingular
        suffixSingularValue
      }
    }
  }
`;
