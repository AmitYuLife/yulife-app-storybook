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
  RNViewPointerEvents,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYuScreenProductDetails
// ====================================================

export interface GetYuScreenProductDetails_getYuScreenProductDetails_containerStyles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad {
  __typename: "ContentItemPad" | "ContentItemCollapsingGenericHeader" | "ContentItemPerks";
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

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_rightIcon {
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
  rightIcon: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton_rightIcon | null;
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

export interface GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_image | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_styles[] | null;
  wrapperStyles: GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage_wrapperStyles[] | null;
}

export type GetYuScreenProductDetails_getYuScreenProductDetails_body =
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemPad
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemText
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemButton
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemKeyValueBox
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemBeneficiariesSection
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemRowIconTextBanner
  | GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemImage;

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemProductDetailsHeader {
  __typename:
    | "ContentItemProductDetailsHeader"
    | "ContentItemText"
    | "ContentItemButton"
    | "ContentItemBeneficiariesSection"
    | "ContentItemRowIconTextBanner"
    | "ContentItemKeyValueBox"
    | "ContentItemImage"
    | "ContentItemPerks";
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
  pointerEvents: RNViewPointerEvents | null;
  styles: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemPad_styles[] | null;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_styles {
  property: string;
  value: string;
}

export interface GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_rightIcon {
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
  rightIcon: GetYuScreenProductDetails_getYuScreenProductDetails_absolute_item_ContentItemCollapsingGenericHeader_rightIcon | null;
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
   * Content displayed inside the scrollview area
   */
  body: GetYuScreenProductDetails_getYuScreenProductDetails_body[] | null;
  absolute: GetYuScreenProductDetails_getYuScreenProductDetails_absolute[] | null;
}

export interface GetYuScreenProductDetails {
  getYuScreenProductDetails: GetYuScreenProductDetails_getYuScreenProductDetails;
}

export interface GetYuScreenProductDetailsVariables {
  customerProductId: string;
}
