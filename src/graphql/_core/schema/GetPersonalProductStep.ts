/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  ContentItemFormTextInputType,
  SduiActionType,
  ContentItemButtonType,
  ContentItemButtonSize,
  CoverType,
  YuProductStatus,
  ContentItemRowIconTextBannerType,
  ContentItemProgressBarType,
} from "./globalTypes";

// ====================================================
// GraphQL query operation: GetPersonalProductStep
// ====================================================

export interface GetPersonalProductStep_getPersonalProductStep_containerStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemProgressBar {
  __typename:
    | "ContentItemProgressBar"
    | "ContentItemHeaderBar"
    | "ContentItemOverlay"
    | "ContentItemPersonalProductConfirm"
    | "ContentItemPersonalProductDocuments"
    | "ContentItemPersonalProductFaqs"
    | "ContentItemCollapsingHeaderProductInfo"
    | "ContentItemFullScreenSwiper"
    | "ContentItemSearchPostcode"
    | "ContentItemForm";
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemTextInput_validation {
  validationName: string;
  validationValue: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemTextInput {
  __typename: "ContentItemTextInput";
  id: string;
  heading: string | null;
  answerKey: string;
  type: ContentItemFormTextInputType | null;
  prefixValue: string | null;
  validation: (GetPersonalProductStep_getPersonalProductStep_body_ContentItemTextInput_validation | null)[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_infoBtnLeftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_infoBtnRightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_active_leftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_active_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_active {
  label: string;
  leftIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_active_leftIcon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_active_rightIcon | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button {
  id: string;
  /**
   * Default passive label(placeholder)
   */
  label: string;
  infoBtnLeftIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_infoBtnLeftIcon | null;
  infoBtnRightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_infoBtnRightIcon | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_onPress | null;
  active: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button_active;
  answerKeys: string[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton {
  __typename: "ContentItemPersonalProductSelectPaymentButton";
  id: string;
  companyName: string;
  companyCountryCode: string;
  themeStyle: string;
  applePayEnabled: boolean;
  googlePayEnabled: boolean;
  button: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton_button;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemConfirm_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemConfirm {
  __typename: "ContentItemConfirm";
  id: string;
  confirmLabel: string;
  answerKey: string;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemConfirm_styles[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPad {
  __typename: "ContentItemPad";
  id: string;
  amount: number;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetPersonalProductStep_getPersonalProductStep_body_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio_choices_renderAsIcon_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio_choices_renderAsIcon_selectedStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio_choices_renderAsIcon {
  icon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio_choices_renderAsIcon_icon | null;
  textColor: string;
  selectedStyles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio_choices_renderAsIcon_selectedStyles[];
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio_choices {
  label: string;
  value: string;
  renderAsIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio_choices_renderAsIcon | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio {
  __typename: "ContentItemRadio";
  id: string;
  iconOptions: boolean;
  answerKey: string;
  choices: GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio_choices[];
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemLottie_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemLottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemLottie {
  __typename: "ContentItemLottie";
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemLottie_styles[] | null;
  onAnimationEnd: GetPersonalProductStep_getPersonalProductStep_body_ContentItemLottie_onAnimationEnd | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemText_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemText {
  __typename: "ContentItemText";
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemText_styles[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton {
  __typename: "ContentItemButton";
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_onPress | null;
  event: GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_event | null;
  icon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_icon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_rightIcon | null;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_wrapperStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_items_text {
  value: string;
  colour: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_items_circle {
  colour: string;
  backgroundColour: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_items_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_items {
  id: string;
  text: GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_items_text;
  circle: GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_items_circle;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_items_styles[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemList {
  __typename: "ContentItemList";
  id: string;
  wrapperStyles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_wrapperStyles[] | null;
  items: GetPersonalProductStep_getPersonalProductStep_body_ContentItemList_items[];
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoCard_image {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoCard_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoCard_hyperlink {
  title: string;
  url: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoCard {
  __typename: "ContentItemInfoCard";
  id: string;
  image: GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoCard_image | null;
  markdown: string;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoCard_styles[] | null;
  hyperlink: GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoCard_hyperlink | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_infoBtnLeftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_infoBtnRightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_active_leftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_active_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_active {
  label: string;
  leftIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_active_leftIcon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_active_rightIcon | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton {
  __typename: "ContentItemInfoButton";
  id: string;
  /**
   * Default passive label(placeholder)
   */
  label: string;
  infoBtnLeftIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_infoBtnLeftIcon | null;
  infoBtnRightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_infoBtnRightIcon | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_onPress | null;
  active: GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton_active;
  answerKeys: string[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard_slotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard_slotInfo_logoUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard_slotInfo {
  name: string;
  status: YuProductStatus;
  backgroundUrl: GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard_slotInfo_backgroundUrl;
  logoUrl: GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard_slotInfo_logoUrl | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard {
  __typename: "ContentItemSelectedPackageCard";
  id: string;
  previousPrice: string | null;
  price: string;
  priceDescription: string;
  coverType: CoverType;
  backgroundUrl: GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard_backgroundUrl;
  slotInfo: GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard_slotInfo;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header_slotInfo_backgroundUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header_slotInfo_logoUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header_slotInfo {
  name: string;
  status: YuProductStatus;
  backgroundUrl: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header_slotInfo_backgroundUrl;
  logoUrl: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header_slotInfo_logoUrl | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header {
  backgroundUrl: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header_backgroundUrl;
  slotInfo: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header_slotInfo;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_powers_leftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_powers_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_powers {
  leftIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_powers_leftIcon;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_powers_rightIcon | null;
  title: string;
  description: string;
  isLocked: boolean | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards {
  id: string;
  value: number;
  packageMaxValue: number;
  coverType: CoverType;
  bonusEarnRate: number;
  header: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_header;
  powers: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards_powers[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards {
  __typename: "ContentItemPackageCards";
  id: string;
  answerKey: string;
  answerKeyDefaultValue: number;
  packageCards: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards_packageCards[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCardPower_leftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCardPower_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCardPower {
  __typename: "ContentItemPackageCardPower";
  id: string;
  leftIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCardPower_leftIcon;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCardPower_rightIcon | null;
  powerTitle: string;
  description: string;
  isLocked: boolean | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_documentHyperlink_leftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_documentHyperlink_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_documentHyperlink {
  title: string;
  leftIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_documentHyperlink_leftIcon | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_documentHyperlink_onPress;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_coverList_slotBackgroundUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_coverList {
  percentCovered: number;
  monthlyCost: string;
  monthlyCostSuffix: string;
  monthlyPayout: string;
  productPreviewMarkdown: string;
  collapsingHeaderProductInfoHeading: string;
  coverType: CoverType;
  slotBackgroundUrl: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_coverList_slotBackgroundUrl;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_percentageBox {
  selectedValue: number;
  selectedCoverType: string;
  primaryColour: string;
  secondaryColour: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview {
  __typename: "ContentItemPersonalProductPreview";
  id: string;
  answerKey: string;
  answerKeyDefaultValue: number;
  documentHyperlink: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_documentHyperlink | null;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_styles[] | null;
  coverList: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_coverList[];
  coverExpirationDate: string;
  showYumoji: boolean;
  percentageBox: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_percentageBox | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetPersonalProductStep_getPersonalProductStep_body_ContentItemImage_image | null;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemImage_styles[] | null;
  wrapperStyles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemImage_wrapperStyles[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_options {
  value: number;
  coverType: CoverType;
  subheading: string;
  heading: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_coverPickerTitle_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_coverPickerTitle {
  id: string;
  textType: string;
  text: string;
  colour: string | null;
  textAlign: string | null;
  underline: boolean | null;
  numberOfLines: number | null;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_coverPickerTitle_styles[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_onPress | null;
  event: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_event | null;
  icon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_icon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_rightIcon | null;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_range {
  min: number;
  max: number;
  step: number;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_coverMap {
  coverType: CoverType;
  max: number;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_item {
  color: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_backdropStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay {
  backdropStyles:
    | GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_backdropStyles[]
    | null;
  highlightLabel: string;
  highlightLabelColor: string;
  overlayTitle: string;
  overlayTitleWrapperStyles:
    | GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay_overlayTitleWrapperStyles[]
    | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants {
  id: string;
  minVisibleIndex: number | null;
  maxVisibleIndex: number | null;
  item: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_item;
  overlay: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants_overlay;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker {
  id: string;
  answerKey: string;
  styles:
    | GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styles[]
    | null;
  range: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_range;
  coverMap: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_coverMap[];
  styleVariants:
    | GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker_styleVariants[]
    | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover {
  title: string;
  button: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_button;
  itemsPicker: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover_itemsPicker;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker {
  __typename: "ContentItemCoverPicker";
  id: string;
  answerKey: string;
  answerKeyDefaultValue: number;
  hasSelectedCustomCover: boolean;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_styles[] | null;
  options: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_options[] | null;
  coverPickerTitle: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_coverPickerTitle;
  customCover: GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker_customCover | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_range {
  min: number;
  max: number;
  step: number;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_coverMap {
  coverType: CoverType;
  max: number;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants_item {
  color: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants_overlay_backdropStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants_overlay_overlayTitleWrapperStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants_overlay {
  backdropStyles:
    | GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants_overlay_backdropStyles[]
    | null;
  highlightLabel: string;
  highlightLabelColor: string;
  overlayTitle: string;
  overlayTitleWrapperStyles:
    | GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants_overlay_overlayTitleWrapperStyles[]
    | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants {
  id: string;
  minVisibleIndex: number | null;
  maxVisibleIndex: number | null;
  item: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants_item;
  overlay: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants_overlay;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker {
  __typename: "ContentItemScrollableItemsPicker";
  id: string;
  answerKey: string;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styles[] | null;
  range: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_range;
  coverMap: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_coverMap[];
  styleVariants:
    | GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker_styleVariants[]
    | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker_pickerStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker_buttonStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker_buttonLeftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker_buttonRightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker {
  __typename: "ContentItemDatePicker";
  id: string;
  initialDate: string | null;
  maxDate: string;
  minDate: string;
  dateFormat: string;
  label: string;
  subLabel: string | null;
  pickerStyles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker_pickerStyles[] | null;
  buttonStyles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker_buttonStyles[] | null;
  buttonLeftIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker_buttonLeftIcon | null;
  buttonRightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker_buttonRightIcon | null;
  size: ContentItemButtonSize;
  answerKey: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiSelect_choices_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiSelect_choices {
  id: string;
  label: string;
  icon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiSelect_choices_icon | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiSelect {
  __typename: "ContentItemMultiSelect";
  id: string;
  answerKey: string;
  choices: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiSelect_choices[];
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_onPress | null;
  event: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_event | null;
  icon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_icon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_rightIcon | null;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_displayFormat {
  answerKey: string;
  plural: string | null;
  singular: string | null;
  singularValue: number | null;
  isDynamic: boolean | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_variants_wheels {
  answerKey: string;
  min: number;
  max: number;
  step: number;
  suffixPlural: string;
  suffixSingular: string;
  suffixSingularValue: number;
  /**
   * Used when the last value includes anything over that value. E.g 10+
   */
  suffixMax: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_variants {
  id: string;
  answerKey: string | null;
  toggleLabel: string | null;
  toggleIndex: number | null;
  wheels: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_variants_wheels[];
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker {
  __typename: "ContentItemScrollPicker";
  id: string;
  pickerConfirmButtonLabel: string;
  pickerCancelButtonLabel: string;
  button: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_button;
  answerKey: string;
  displayFormat: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_displayFormat[][];
  variants: GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker_variants[];
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductReviewItem_leftIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductReviewItem_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductReviewItem_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductReviewItem {
  __typename: "ContentItemPersonalProductReviewItem";
  id: string;
  text: string;
  subheading: string;
  stepKey: string;
  leftIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductReviewItem_leftIcon;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductReviewItem_rightIcon | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductReviewItem_onPress | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemRowIconTextBanner_bannerIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemRowIconTextBanner_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemRowIconTextBanner {
  __typename: "ContentItemRowIconTextBanner";
  id: string;
  /**
   * determines client-side style template e.g. error for red
   */
  bannerType: ContentItemRowIconTextBannerType;
  markdown: string;
  bannerIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemRowIconTextBanner_bannerIcon;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemRowIconTextBanner_styles[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemYugiConfirm_content {
  id: string;
  parsedMarkdown: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemYugiConfirm_buttonOnPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemYugiConfirm {
  __typename: "ContentItemYugiConfirm";
  id: string;
  yugiHeading: string;
  content: GetPersonalProductStep_getPersonalProductStep_body_ContentItemYugiConfirm_content;
  buttonText: string;
  buttonOnPress: GetPersonalProductStep_getPersonalProductStep_body_ContentItemYugiConfirm_buttonOnPress | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo_flatListItemOverlayStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo_providerImageUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo_productDescription {
  id: string;
  parsedMarkdown: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo {
  __typename: "ContentItemPersonalProductInfo";
  id: string;
  coverType: CoverType;
  productTitle: string;
  flatListItemOverlayStyles:
    | GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo_flatListItemOverlayStyles[]
    | null;
  providerImageUrl: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo_providerImageUrl | null;
  productDescription: GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo_productDescription;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemGpDetails_onSubmit {
  type: SduiActionType;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemGpDetails {
  __typename: "ContentItemGpDetails";
  id: string;
  answerKey: string;
  onSubmit: GetPersonalProductStep_getPersonalProductStep_body_ContentItemGpDetails_onSubmit;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_onPress | null;
  event: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_event | null;
  icon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_icon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_rightIcon | null;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton {
  __typename: "ContentItemMultiButton";
  id: string;
  buttons: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_buttons[];
  value: string | null;
  answerKey: string;
  styles: GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton_styles[] | null;
}

export type GetPersonalProductStep_getPersonalProductStep_body =
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemProgressBar
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemTextInput
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductSelectPaymentButton
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemConfirm
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemPad
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemMarkdown
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemRadio
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemLottie
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemText
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemButton
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemList
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoCard
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemInfoButton
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemSelectedPackageCard
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCards
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemPackageCardPower
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemImage
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemDatePicker
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiSelect
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollPicker
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductReviewItem
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemRowIconTextBanner
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemYugiConfirm
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductInfo
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemGpDetails
  | GetPersonalProductStep_getPersonalProductStep_body_ContentItemMultiButton;

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMarkdown {
  __typename:
    | "ContentItemMarkdown"
    | "ContentItemLottie"
    | "ContentItemText"
    | "ContentItemTextInput"
    | "ContentItemProgressBar"
    | "ContentItemHeaderBar"
    | "ContentItemRadio"
    | "ContentItemInfoCard"
    | "ContentItemInfoButton"
    | "ContentItemPad"
    | "ContentItemImage"
    | "ContentItemPersonalProductInfo"
    | "ContentItemYugiConfirm"
    | "ContentItemDatePicker"
    | "ContentItemScrollPicker"
    | "ContentItemMultiSelect"
    | "ContentItemPersonalProductConfirm"
    | "ContentItemPersonalProductReviewItem"
    | "ContentItemPersonalProductDocuments"
    | "ContentItemPersonalProductFaqs"
    | "ContentItemPackageCards"
    | "ContentItemSelectedPackageCard"
    | "ContentItemPersonalProductPreview"
    | "ContentItemCoverPicker"
    | "ContentItemScrollableItemsPicker"
    | "ContentItemConfirm"
    | "ContentItemCollapsingHeaderProductInfo"
    | "ContentItemList"
    | "ContentItemRowIconTextBanner"
    | "ContentItemFullScreenSwiper"
    | "ContentItemGpDetails"
    | "ContentItemPackageCardPower"
    | "ContentItemPersonalProductSelectPaymentButton"
    | "ContentItemSearchPostcode"
    | "ContentItemForm";
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton {
  __typename: "ContentItemButton";
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_onPress | null;
  event: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_event | null;
  icon: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_icon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_rightIcon | null;
  styles: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_onPress | null;
  event: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_event | null;
  icon: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_icon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_rightIcon | null;
  styles: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay {
  __typename: "ContentItemOverlay";
  id: string;
  markdown: string;
  buttons: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay_buttons[];
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_onPress | null;
  event: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_event | null;
  icon: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_icon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_rightIcon | null;
  styles: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons_styles[] | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton {
  __typename: "ContentItemMultiButton";
  id: string;
  buttons: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_buttons[];
  value: string | null;
  answerKey: string;
  styles: GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton_styles[] | null;
}

export type GetPersonalProductStep_getPersonalProductStep_footer =
  | GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMarkdown
  | GetPersonalProductStep_getPersonalProductStep_footer_ContentItemButton
  | GetPersonalProductStep_getPersonalProductStep_footer_ContentItemOverlay
  | GetPersonalProductStep_getPersonalProductStep_footer_ContentItemMultiButton;

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemLottie {
  __typename:
    | "ContentItemLottie"
    | "ContentItemText"
    | "ContentItemTextInput"
    | "ContentItemRadio"
    | "ContentItemInfoCard"
    | "ContentItemInfoButton"
    | "ContentItemButton"
    | "ContentItemMultiButton"
    | "ContentItemPad"
    | "ContentItemImage"
    | "ContentItemOverlay"
    | "ContentItemPersonalProductInfo"
    | "ContentItemYugiConfirm"
    | "ContentItemDatePicker"
    | "ContentItemScrollPicker"
    | "ContentItemMultiSelect"
    | "ContentItemPersonalProductConfirm"
    | "ContentItemPersonalProductReviewItem"
    | "ContentItemPersonalProductDocuments"
    | "ContentItemPersonalProductFaqs"
    | "ContentItemPackageCards"
    | "ContentItemSelectedPackageCard"
    | "ContentItemPersonalProductPreview"
    | "ContentItemCoverPicker"
    | "ContentItemScrollableItemsPicker"
    | "ContentItemConfirm"
    | "ContentItemCollapsingHeaderProductInfo"
    | "ContentItemList"
    | "ContentItemRowIconTextBanner"
    | "ContentItemFullScreenSwiper"
    | "ContentItemGpDetails"
    | "ContentItemPackageCardPower"
    | "ContentItemPersonalProductSelectPaymentButton"
    | "ContentItemForm";
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemHeaderBar_onLeftIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemHeaderBar_onRightIconPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemHeaderBar {
  __typename: "ContentItemHeaderBar";
  logo: string | null;
  heading: string | null;
  leftIcon: string | null;
  rightIcon: string | null;
  onLeftIconPress: GetPersonalProductStep_getPersonalProductStep_header_ContentItemHeaderBar_onLeftIconPress | null;
  onRightIconPress: GetPersonalProductStep_getPersonalProductStep_header_ContentItemHeaderBar_onRightIconPress | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemProgressBar {
  __typename: "ContentItemProgressBar";
  id: string;
  maxLength: number;
  currentPosition: number;
  progressType: ContentItemProgressBarType | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode_searchInputStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode_addressAnswerKeys {
  answerKey: string;
  addressKey: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode {
  __typename: "ContentItemSearchPostcode";
  id: string;
  label: string;
  headingText: string;
  searchTitle: string;
  onLoadPlaceholder: string;
  onLoadUnsuccessfulText: string;
  styles: GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode_styles[] | null;
  searchInputStyles:
    | GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode_searchInputStyles[]
    | null;
  icon: GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode_icon | null;
  addressAnswerKeys: GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode_addressAnswerKeys[];
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemMarkdown_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemMarkdown_markdownContainerStyle {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_header_ContentItemMarkdown {
  __typename: "ContentItemMarkdown";
  id: string;
  title: string | null;
  markdown: string;
  perkId: string | null;
  parsedMarkdown: string | null;
  styles: GetPersonalProductStep_getPersonalProductStep_header_ContentItemMarkdown_styles[] | null;
  markdownContainerStyle:
    | GetPersonalProductStep_getPersonalProductStep_header_ContentItemMarkdown_markdownContainerStyle[]
    | null;
}

export type GetPersonalProductStep_getPersonalProductStep_header =
  | GetPersonalProductStep_getPersonalProductStep_header_ContentItemLottie
  | GetPersonalProductStep_getPersonalProductStep_header_ContentItemHeaderBar
  | GetPersonalProductStep_getPersonalProductStep_header_ContentItemProgressBar
  | GetPersonalProductStep_getPersonalProductStep_header_ContentItemSearchPostcode
  | GetPersonalProductStep_getPersonalProductStep_header_ContentItemMarkdown;

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemMarkdown {
  __typename:
    | "ContentItemMarkdown"
    | "ContentItemLottie"
    | "ContentItemText"
    | "ContentItemTextInput"
    | "ContentItemProgressBar"
    | "ContentItemHeaderBar"
    | "ContentItemRadio"
    | "ContentItemInfoCard"
    | "ContentItemInfoButton"
    | "ContentItemButton"
    | "ContentItemMultiButton"
    | "ContentItemPad"
    | "ContentItemOverlay"
    | "ContentItemPersonalProductInfo"
    | "ContentItemYugiConfirm"
    | "ContentItemDatePicker"
    | "ContentItemScrollPicker"
    | "ContentItemMultiSelect"
    | "ContentItemPersonalProductConfirm"
    | "ContentItemPersonalProductReviewItem"
    | "ContentItemPersonalProductDocuments"
    | "ContentItemPersonalProductFaqs"
    | "ContentItemPackageCards"
    | "ContentItemSelectedPackageCard"
    | "ContentItemPersonalProductPreview"
    | "ContentItemCoverPicker"
    | "ContentItemScrollableItemsPicker"
    | "ContentItemConfirm"
    | "ContentItemList"
    | "ContentItemRowIconTextBanner"
    | "ContentItemGpDetails"
    | "ContentItemPackageCardPower"
    | "ContentItemPersonalProductSelectPaymentButton"
    | "ContentItemSearchPostcode"
    | "ContentItemForm";
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemImage_image {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemImage_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemImage_wrapperStyles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemImage {
  __typename: "ContentItemImage";
  id: string;
  image: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemImage_image | null;
  styles: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemImage_styles[] | null;
  wrapperStyles: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemImage_wrapperStyles[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemCollapsingHeaderProductInfo_coverList_slotBackgroundUrl {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemCollapsingHeaderProductInfo_coverList {
  percentCovered: number;
  monthlyCost: string;
  monthlyCostSuffix: string;
  monthlyPayout: string;
  productPreviewMarkdown: string;
  collapsingHeaderProductInfoHeading: string;
  coverType: CoverType;
  slotBackgroundUrl: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemCollapsingHeaderProductInfo_coverList_slotBackgroundUrl;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemCollapsingHeaderProductInfo {
  __typename: "ContentItemCollapsingHeaderProductInfo";
  id: string;
  answerKey: string;
  coverList: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemCollapsingHeaderProductInfo_coverList[];
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_theme {
  primaryColor: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_event {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_rightIcon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button {
  id: string;
  label: string;
  buttonType: ContentItemButtonType | null;
  value: string | null;
  disabledState: string | null;
  onPress: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_onPress | null;
  event: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_event | null;
  icon: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_icon | null;
  rightIcon: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_rightIcon | null;
  styles:
    | GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button_styles[]
    | null;
  buttonSize: ContentItemButtonSize | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_close_icon {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_close_onPress {
  type: SduiActionType;
  payload: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_close {
  icon: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_close_icon;
  onPress: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_close_onPress;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_items_backgroundImage {
  id: string;
  uri: string | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_items_styles {
  property: string;
  value: string;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_items {
  heading: string;
  paragraph: string;
  title: string;
  backgroundImage: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_items_backgroundImage;
  styles: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_items_styles[] | null;
}

export interface GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper {
  __typename: "ContentItemFullScreenSwiper";
  id: string;
  title: string;
  autoPlaySpeedMs: number;
  dismissMinVisibleIndex: number;
  ctaMinVisibleIndex: number | null;
  theme: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_theme;
  button: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_button;
  close: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_close;
  items: GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper_items[];
}

export type GetPersonalProductStep_getPersonalProductStep_absolute_item =
  | GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemMarkdown
  | GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemImage
  | GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemCollapsingHeaderProductInfo
  | GetPersonalProductStep_getPersonalProductStep_absolute_item_ContentItemFullScreenSwiper;

export interface GetPersonalProductStep_getPersonalProductStep_absolute {
  id: string;
  /**
   * If you want to have have top: 100 from the header - turn this on. Otherwise display on top of the header. Unlimited power.
   */
  shouldAccountForHeader: boolean | null;
  item: GetPersonalProductStep_getPersonalProductStep_absolute_item;
}

export interface GetPersonalProductStep_getPersonalProductStep {
  stepId: string;
  customerProductId: string;
  stepData: string | null;
  /**
   * Container styles go here
   */
  containerStyles: GetPersonalProductStep_getPersonalProductStep_containerStyles[] | null;
  /**
   * Content displayed inside the scrollview area
   */
  body: (GetPersonalProductStep_getPersonalProductStep_body | null)[] | null;
  /**
   * Content displayed on the bottom of the screen. sticky footer
   */
  footer: (GetPersonalProductStep_getPersonalProductStep_footer | null)[] | null;
  /**
   * Content displayed on the top of the screen. sticky header
   */
  header: (GetPersonalProductStep_getPersonalProductStep_header | null)[] | null;
  /**
   * Content that just sits on the screen. Anywhere you want. Be careful with this powerful tool.
   */
  absolute: (GetPersonalProductStep_getPersonalProductStep_absolute | null)[] | null;
}

export interface GetPersonalProductStep {
  getPersonalProductStep: GetPersonalProductStep_getPersonalProductStep | null;
}

export interface GetPersonalProductStepVariables {
  productId: string;
}
