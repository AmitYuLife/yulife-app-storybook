import React from "react";

import {
  ContentItemMarkdown,
  ContentItemButton,
  ContentItemImage,
  ContentItemTextInput,
  ContentItemRowIconTextBanner,
  ContentItemLottieSdui,
  ContentItemPad,
  ContentItemRadio,
  ContentItemChoice,
  ContentItemHeaderBar,
  ContentItemProgressBar,
  ContentItemTextGroup,
  ContentItemAccordion,
  ContentItemBox,
  ContentItemDropdownInput,
  ContentItemMedia,
  ContentItemLinearGradient,
  ContentItemWrapper,
  ContentItemInfoCard,
  ContentItemBoxOptionCard,
  ContentItemSwitch,
  ContentItemShowHideBalance,
  ContentItemDatePickerSdui,
  ContentItemTextSdui,
  ContentItemHint,
  ContentItemSliderInput,
  ContentItemTextAreaInput,
} from "@components/sdui";
import { GetSduiJourneyQuery } from "@graphql/__generated";

export const componentMap = {
  ContentItemMarkdown,
  ContentItemButton,
  ContentItemImage,
  ContentItemText: ContentItemTextSdui,
  ContentItemTextInput,
  ContentItemRowIconTextBanner,
  ContentItemLottie: ContentItemLottieSdui,
  ContentItemPad,
  ContentItemRadio,
  ContentItemChoice,
  ContentItemHeaderBar,
  ContentItemProgressBar,
  ContentItemTextGroup,
  ContentItemAccordion,
  ContentItemBox,
  ContentItemDropdownInput,
  ContentItemMedia,
  ContentItemLinearGradient,
  ContentItemWrapper,
  ContentItemInfoCard,
  ContentItemBoxOptionCard,
  ContentItemSwitch,
  ContentItemShowHideBalance,
  ContentItemDatePicker: ContentItemDatePickerSdui,
  ContentItemHint,
  ContentItemSliderInput,
  ContentItemTextAreaInput,
} as Record<string, (props: any) => JSX.Element>;

export const renderItemContent = (item: GetSduiJourneyQuery["getSduiJourney"]["body"][number]): JSX.Element | null => {
  const Component = componentMap[item?.__typename];

  if (!Component) {
    return null;
  }

  /**
   * @TODO Add id fields to all ContentItems
   * for example: ContentItemForm
   */
  return <Component key={(item as any).id} {...item} />;
};
