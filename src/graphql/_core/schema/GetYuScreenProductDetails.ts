/* tslint:disable */
/* eslint-disable */
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
    | "ContentItemHeaderBar";
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
  buttonSize: ContentItemButtonSize | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox {
  __typename: "ContentItemKeyValueBox";
  id: string;
  boxKey: string;
  boxValue: string;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox_styles[] | null;
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
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export type GetYuScreenProductDetails_getYuScreenProductDetails_body =
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemCollapsingGenericHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemText
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemBeneficiariesSection
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemInfoCard
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemMarkdown;

export interface GetYuScreenProductDetails_getYuScreenProductDetails_footer_ContentItemProductDetailsHeader {
  __typename:
    | "ContentItemProductDetailsHeader"
    | "ContentItemCollapsingGenericHeader"
    | "ContentItemText"
    | "ContentItemBeneficiariesSection"
    | "ContentItemRowIconTextBanner"
    | "ContentItemKeyValueBox"
    | "ContentItemImage"
    | "ContentItemPerks"
    | "ContentItemSelectedPackageCard"
    | "ContentItemAppDownloadPrompt"
    | "ContentItemHeaderBar"
    | "ContentItemInfoCard"
    | "ContentItemMarkdown";
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
    | "ContentItemPad"
    | "ContentItemCollapsingGenericHeader"
    | "ContentItemText"
    | "ContentItemButton"
    | "ContentItemBeneficiariesSection"
    | "ContentItemRowIconTextBanner"
    | "ContentItemKeyValueBox"
    | "ContentItemImage"
    | "ContentItemPerks"
    | "ContentItemSelectedPackageCard"
    | "ContentItemAppDownloadPrompt"
    | "ContentItemFade"
    | "ContentItemInfoCard"
    | "ContentItemMarkdown";
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
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  contentItemHeaderBarRightIcon: string | null;
  onLeftIconPress: GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemHeaderBar_onRightIconPress | null;
  publishKeyHeight: string | null;
}

export type GetYuScreenProductDetails_getYuScreenProductDetails_header =
  | GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemProductDetailsHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_header_ContentItemHeaderBar;

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemProductDetailsHeader {
  __typename:
    | "ContentItemProductDetailsHeader"
    | "ContentItemText"
    | "ContentItemButton"
    | "ContentItemBeneficiariesSection"
    | "ContentItemRowIconTextBanner"
    | "ContentItemKeyValueBox"
    | "ContentItemImage"
    | "ContentItemPerks"
    | "ContentItemSelectedPackageCard"
    | "ContentItemAppDownloadPrompt"
    | "ContentItemFade"
    | "ContentItemHeaderBar"
    | "ContentItemInfoCard"
    | "ContentItemMarkdown";
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

export type GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item =
  | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemProductDetailsHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad
  | GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader;

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
