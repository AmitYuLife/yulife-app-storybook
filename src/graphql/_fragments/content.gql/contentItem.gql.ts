import { gql } from "@apollo/client";
import { GQL_FRAGMENT_CONTENT_ITEM_BOX } from "./contentItemBox.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_BUTTON } from "./contentItemButton.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_FORM } from "./contentItemForm.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR } from "./contentItemHeaderBar.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_IMAGE } from "./contentItemImage.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_LOTTIE } from "./contentItemLottie.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN } from "./contentItemMarkdown.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_PAD } from "./contentItemPad.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_BAR } from "./contentItemProgressBar.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_RADIO } from "./contentItemRadio.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_TEXT } from "./contentItemText.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT } from "./contentItemTextInput.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_TEXT_GROUP } from "./contentItemTextGroup.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER } from "./contentItemRowIconTextBanner.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_ACCORDION } from "./contentItemAccordion.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_DROPDOWN_INPUT } from "./contentItemDropdownInput";
import { GQL_FRAGMENT_CONTENT_ITEM_MEDIA } from "./contentItemMedia.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_LINEAR_GRADIENT } from "./contentItemLinearGradient.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_WRAPPER } from "./contentItemWrapper.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD } from "./contentItemInfoCard.gql";
import { GQL_FRAGMENT_CONTENT_ITEM_BOX_OPTION_CARD } from "./contentItemBoxOptionCard.gql";

export const GQL_FRAGMENT_CONTENT_ITEM = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_MARKDOWN}
  ${GQL_FRAGMENT_CONTENT_ITEM_BOX}
  ${GQL_FRAGMENT_CONTENT_ITEM_BUTTON}
  ${GQL_FRAGMENT_CONTENT_ITEM_IMAGE}
  ${GQL_FRAGMENT_CONTENT_ITEM_FORM}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT_INPUT}
  ${GQL_FRAGMENT_CONTENT_ITEM_ROW_ICON_TEXT_BANNER}
  ${GQL_FRAGMENT_CONTENT_ITEM_LOTTIE}
  ${GQL_FRAGMENT_CONTENT_ITEM_PAD}
  ${GQL_FRAGMENT_CONTENT_ITEM_RADIO}
  ${GQL_FRAGMENT_CONTENT_ITEM_HEADER_BAR}
  ${GQL_FRAGMENT_CONTENT_ITEM_PROGRESS_BAR}
  ${GQL_FRAGMENT_CONTENT_ITEM_TEXT_GROUP}
  ${GQL_FRAGMENT_CONTENT_ITEM_ACCORDION}
  ${GQL_FRAGMENT_CONTENT_ITEM_DROPDOWN_INPUT}
  ${GQL_FRAGMENT_CONTENT_ITEM_MEDIA}
  ${GQL_FRAGMENT_CONTENT_ITEM_LINEAR_GRADIENT}
  ${GQL_FRAGMENT_CONTENT_ITEM_WRAPPER}
  ${GQL_FRAGMENT_CONTENT_ITEM_INFO_CARD}
  ${GQL_FRAGMENT_CONTENT_ITEM_BOX_OPTION_CARD}

  fragment ContentItem on ContentItem {
    __typename
    ... on ContentItemMarkdown {
      ...ContentItemMarkdown
    }
    ... on ContentItemBox {
      ...ContentItemBox
    }
    ... on ContentItemButton {
      ...ContentItemButton
    }
    ... on ContentItemImage {
      ...ContentItemImage
    }
    ... on ContentItemForm {
      ...ContentItemForm
    }
    ... on ContentItemText {
      ...ContentItemText
    }
    ... on ContentItemTextInput {
      ...ContentItemTextInput
    }
    ... on ContentItemDropdownInput {
      ...ContentItemDropdownInput
    }
    ... on ContentItemRowIconTextBanner {
      ...ContentItemRowIconTextBanner
    }
    ... on ContentItemLottie {
      ...ContentItemLottie
    }
    ... on ContentItemPad {
      ...ContentItemPad
    }
    ... on ContentItemRadio {
      ...ContentItemRadio
    }
    ... on ContentItemHeaderBar {
      ...ContentItemHeaderBar
    }
    ... on ContentItemProgressBar {
      ...ContentItemProgressBar
    }
    ... on ContentItemTextGroup {
      ...ContentItemTextGroup
    }
    ... on ContentItemAccordion {
      ...ContentItemAccordion
    }
    ... on ContentItemMedia {
      ...ContentItemMedia
    }
    ... on ContentItemLinearGradient {
      ...ContentItemLinearGradient
    }
    ... on ContentItemWrapper {
      ...ContentItemWrapper
    }
    ... on ContentItemInfoCard {
      ...ContentItemInfoCard
    }
    ... on ContentItemBoxOptionCard {
      ...ContentItemBoxOptionCard
    }
  }
`;
