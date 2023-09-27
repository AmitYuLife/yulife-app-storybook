/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import {
  CoverType,
  ContentItemButtonType,
  SduiActionType,
  ContentItemButtonSize,
  ContentItemRowIconTextBannerType,
  ContentItemImageSize,
  RNViewPointerEvents,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYuScreenProductDetails
// ====================================================

export interface GetYuScreenProductDetails_getYuScreenProductDetails_containerStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footerStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemCollapsingGenericHeader {
  __typename:
    | "ContentItemCollapsingGenericHeader"
    | "ContentItemPerks"
    | "ContentItemSelectedPackageCard"
    | "ContentItemAppDownloadPrompt"
    | "ContentItemFade"
    | "ContentItemHeaderBar"
    | "ContentItemRewardsBanner";
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_providerLogo_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_providerLogo {
  image: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_providerLogo_image;
  width: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_itemSlot {
  iconUrl: string;
  backgroundUrl: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_productIdentifier {
  label: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_benefit {
  title: string | null;
  markdown: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_funding_theme {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_funding {
  text: string;
  theme: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_funding_theme | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader {
  __typename: "ContentItemProductDetailsHeader";
  id: string;
  coverType: CoverType;
  productName: string;
  productDetailsHeaderYuCoinPower: number;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_styles[] | null;
  providerLogo: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_providerLogo | null;
  itemSlot: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_itemSlot;
  productIdentifier: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_productIdentifier | null;
  benefit: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_benefit | null;
  funding: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_funding | null;
  showSlotLabel: boolean;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_linearGradient_start {
  x: number;
  y: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_linearGradient_end {
  x: number;
  y: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_linearGradient {
  colors: string[];
  start: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_linearGradient_start | null;
  end: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_linearGradient_end | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_timer {
  secondsUntilTarget: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader {
  __typename: "ContentItemProductDetailsHoldingHeader";
  id: string;
  linearGradient: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_linearGradient | null;
  image: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_image | null;
  title: string | null;
  description: string | null;
  timer: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader_timer | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemText_styles[] | null;
  /**
   * Supported RN Version 3.100.0
   */
  dynamicStyleKey: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton {
  __typename: "ContentItemButton";
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_onPress | null;
  event: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_event | null;
  icon: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_containerStyles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox_wrapperStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox {
  __typename: "ContentItemKeyValueBox";
  id: string;
  boxKey: string;
  boxValue: string;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox_styles[] | null;
  wrapperStyles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox_wrapperStyles[] | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemBeneficiariesSection_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemBeneficiariesSection {
  __typename: "ContentItemBeneficiariesSection";
  id: string;
  productId: string;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemBeneficiariesSection_styles[] | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_icon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_containerStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton {
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_onPress | null;
  event: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_event | null;
  icon: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_icon | null;
  contentItemButtonRightIcon: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_contentItemButtonRightIcon | null;
  styles:
    | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_styles[]
    | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton_containerStyles[]
    | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_containerActions_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_containerActions_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_containerActions {
  id: string;
  event: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_containerActions_event | null;
  onPress: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_containerActions_onPress;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner {
  __typename: "ContentItemRowIconTextBanner";
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerIcon;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_styles[] | null;
  /**
   * RN client version >= 3.45.0
   */
  titleMarkdown: string | null;
  /**
   * RN client version >= 3.45.0
   */
  showCloseIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   */
  bannerButton: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_bannerButton | null;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon: boolean | null;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner_containerActions | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_image | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_styles[] | null;
  wrapperStyles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_wrapperStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  onPress: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_onPress | null;
  /**
   * Supported RN version 3.48.0
   */
  contentItemImageSize: ContentItemImageSize | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemInfoCard_image {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemInfoCard_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemInfoCard_hyperlink {
  title: string;
  url: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemInfoCard {
  __typename: "ContentItemInfoCard";
  id: string;
  image: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemInfoCard_image | null;
  markdown: string;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemInfoCard_styles[] | null;
  hyperlink: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemInfoCard_hyperlink | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad_styles[] | null;
  dynamicStyles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad_dynamicStyles[] | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  markdownStyles: string | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemYuCoinPower_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemYuCoinPower_containerStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemYuCoinPower {
  __typename: "ContentItemYuCoinPower";
  id: string;
  yuCoinPower: number;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemYuCoinPower_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemYuCoinPower_containerStyles[]
    | null;
  /**
   * A separate definition to define width with respect to the device's horizontal edges
   * A marginHorizontal at the styles level doesn't work because a hardcoded width should
   * be defined at the Svg parent
   */
  marginHorizontal: number | null;
  /**
   * RN client version >=3.47.0
   */
  interactive: boolean | null;
  inactive: boolean | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemLinearGradient {
  __typename: "ContentItemLinearGradient";
  id: string;
  colors: string[];
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemLinearGradient_styles[] | null;
  start: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemLinearGradient_start | null;
  end: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemLinearGradient_end | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProcessingTimer_onClose {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProcessingTimer {
  __typename: "ContentItemProcessingTimer";
  id: string;
  secondsUntilTarget: number;
  backgroundUrl: string | null;
  contentItemProcessingTimerHeading: string | null;
  onClose: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProcessingTimer_onClose | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper_localDispatchActions {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper_localDispatchActionsOnMount {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper {
  __typename: "ContentItemWrapper";
  id: string;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper_styles[] | null;
  children: string;
  pointerEvents: RNViewPointerEvents | null;
  /**
   * Supported RN version 3.85.0
   */
  absolute: string | null;
  /**
   * Supported RN version 3.87.0
   */
  onPress: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper_onPress | null;
  /**
   * Supported RN version 3.87.0
   */
  scrollViewProps: string | null;
  /**
   * Supported RN Version 3.100.0
   */
  dynamicStyleKey: string | null;
  /**
   * Supported RN Version 3.100.0
   */
  localDispatchActions:
    | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper_localDispatchActions[]
    | null;
  /**
   * Supported RN Version 3.100.0
   */
  localDispatchActionsOnMount:
    | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper_localDispatchActionsOnMount[]
    | null;
}

export type GetYuScreenProductDetails_getYuScreenProductDetails_body =
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemCollapsingGenericHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHoldingHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemText
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemBeneficiariesSection
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemInfoCard
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemMarkdown
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemYuCoinPower
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemLinearGradient
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProcessingTimer
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemWrapper;

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemProductDetailsHeader {
  __typename:
    | "ContentItemProductDetailsHeader"
    | "ContentItemProductDetailsHoldingHeader"
    | "ContentItemCollapsingGenericHeader"
    | "ContentItemText"
    | "ContentItemBeneficiariesSection"
    | "ContentItemRowIconTextBanner"
    | "ContentItemKeyValueBox"
    | "ContentItemImage"
    | "ContentItemPerks"
    | "ContentItemLinearGradient"
    | "ContentItemProcessingTimer"
    | "ContentItemSelectedPackageCard"
    | "ContentItemAppDownloadPrompt"
    | "ContentItemHeaderBar"
    | "ContentItemInfoCard"
    | "ContentItemMarkdown"
    | "ContentItemYuCoinPower"
    | "ContentItemWrapper"
    | "ContentItemRewardsBanner";
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton {
  __typename: "ContentItemButton";
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_onPress | null;
  event: GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_event | null;
  icon: GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton_containerStyles[]
    | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemFade {
  __typename: "ContentItemFade";
  id: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemPad_styles[] | null;
  dynamicStyles: GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemPad_dynamicStyles[] | null;
}

export type GetYuScreenProductDetails_getYuScreenProductDetails_footer =
  | GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemProductDetailsHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemButton
  | GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemFade
  | GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemPad;

export interface GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemProductDetailsHeader {
  __typename:
    | "ContentItemProductDetailsHeader"
    | "ContentItemProductDetailsHoldingHeader"
    | "ContentItemPad"
    | "ContentItemCollapsingGenericHeader"
    | "ContentItemText"
    | "ContentItemButton"
    | "ContentItemBeneficiariesSection"
    | "ContentItemRowIconTextBanner"
    | "ContentItemKeyValueBox"
    | "ContentItemImage"
    | "ContentItemPerks"
    | "ContentItemProcessingTimer"
    | "ContentItemSelectedPackageCard"
    | "ContentItemAppDownloadPrompt"
    | "ContentItemFade"
    | "ContentItemInfoCard"
    | "ContentItemMarkdown"
    | "ContentItemYuCoinPower"
    | "ContentItemWrapper"
    | "ContentItemRewardsBanner";
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemHeaderBar_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemHeaderBar_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemHeaderBar {
  __typename: "ContentItemHeaderBar";
  id: string;
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemHeaderBar_onRightIconPress | null;
  publishKeyHeight: string | null;
  /**
   * Supported RN version 3.63.0
   */
  color: string | null;
  /**
   * Supported RN version 3.70.0
   */
  backgroundColor: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemLinearGradient {
  __typename: "ContentItemLinearGradient";
  id: string;
  colors: string[];
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemLinearGradient_styles[] | null;
  start: GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemLinearGradient_start | null;
  end: GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemLinearGradient_end | null;
}

export type GetYuScreenProductDetails_getYuScreenProductDetails_header =
  | GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemProductDetailsHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemHeaderBar
  | GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemLinearGradient;

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemProductDetailsHeader {
  __typename:
    | "ContentItemProductDetailsHeader"
    | "ContentItemProductDetailsHoldingHeader"
    | "ContentItemText"
    | "ContentItemBeneficiariesSection"
    | "ContentItemRowIconTextBanner"
    | "ContentItemKeyValueBox"
    | "ContentItemImage"
    | "ContentItemPerks"
    | "ContentItemProcessingTimer"
    | "ContentItemSelectedPackageCard"
    | "ContentItemAppDownloadPrompt"
    | "ContentItemFade"
    | "ContentItemHeaderBar"
    | "ContentItemInfoCard"
    | "ContentItemMarkdown"
    | "ContentItemYuCoinPower"
    | "ContentItemWrapper"
    | "ContentItemRewardsBanner";
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad_dynamicStyles {
  property: string;
  value: string;
  defaultValue: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad_styles[] | null;
  dynamicStyles:
    | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad_dynamicStyles[]
    | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_contentItemCollapsingGenericHeaderRightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_collapsedRightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_onPressRightIcon {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader {
  __typename: "ContentItemCollapsingGenericHeader";
  id: string;
  title: string | null;
  styles:
    | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_styles[]
    | null;
  contentItemCollapsingGenericHeaderRightIcon: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_contentItemCollapsingGenericHeaderRightIcon | null;
  collapsedRightIcon: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_collapsedRightIcon | null;
  onPressRightIcon: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_onPressRightIcon | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemLinearGradient_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemLinearGradient_start {
  x: number;
  y: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemLinearGradient_end {
  x: number;
  y: number;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemLinearGradient {
  __typename: "ContentItemLinearGradient";
  id: string;
  colors: string[];
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemLinearGradient_styles[] | null;
  start: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemLinearGradient_start | null;
  end: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemLinearGradient_end | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_contentItemButtonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_containerStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton {
  __typename: "ContentItemButton";
  id: string;
  contentItemButtonUri: string | null;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  borderColor: string | null;
  backgroundColor: string | null;
  textColor: string | null;
  onPress: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_onPress | null;
  event: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_event | null;
  icon: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_icon | null;
  contentItemButtonRightIcon: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_contentItemButtonRightIcon | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_styles[] | null;
  /**
   * Supported RN version 3.70.0
   */
  containerStyles:
    | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton_containerStyles[]
    | null;
  buttonSize: ContentItemButtonSize | null;
}

export type GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item =
  | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemProductDetailsHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad
  | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemLinearGradient
  | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemButton;

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute {
  id: string;
  isBackground: boolean | null;
  shouldAccountForHeader: boolean | null;
  item: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails {
  /**
   * Container styles go here
   */
  containerStyles: GetYuScreenProductDetails_getYuScreenProductDetails_containerStyles[] | null;
  /**
   * Supported RN version 3.48.0
   */
  footerStyles: GetYuScreenProductDetails_getYuScreenProductDetails_footerStyles[] | null;
  /**
   * Content displayed inside the scrollview area
   */
  body: GetYuScreenProductDetails_getYuScreenProductDetails_body[] | null;
  /**
   * Supported RN version 3.48.0
   */
  footer: GetYuScreenProductDetails_getYuScreenProductDetails_footer[] | null;
  /**
   * Supported RN version 3.48.0
   */
  header: GetYuScreenProductDetails_getYuScreenProductDetails_header[] | null;
  absolute: GetYuScreenProductDetails_getYuScreenProductDetails_absolute[] | null;
}

export interface GetYuScreenProductDetails {
  getYuScreenProductDetails: GetYuScreenProductDetails_getYuScreenProductDetails;
}

export interface GetYuScreenProductDetailsVariables {
  customerProductId: string;
}
