import React, { useContext } from "react";

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
  ContentItemImageChoice,
  ContentItemSliderInput,
  ContentItemTextAreaInput,
  ContentItemFade,
  ContentItemScrollPicker,
  ContentItemPaymentButton,
} from "@components/sdui";
import { GetSduiJourneyQuery } from "@graphql/__generated";
import { mapDynamicProps } from "../_utils/mapDynamicProps";
import { SduiIdContext, SduiStateContext } from "../_context/SduiProvider";

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
  ContentItemImageChoice,
  ContentItemSliderInput,
  ContentItemTextAreaInput,
  ContentItemFade,
  ContentItemScrollPicker,
  ContentItemPaymentButton,
} as Record<string, (props: any) => JSX.Element>;

interface Props {
  item: GetSduiJourneyQuery["getSduiJourney"]["body"][number];
}

export const Renderer = ({ item }: Props): JSX.Element | null => {
  const sduiState = useContext(SduiStateContext);
  const sduiId = useContext(SduiIdContext);

  const Component = componentMap[item?.__typename];

  if (!Component) {
    return null;
  }

  const dynamicProps = mapDynamicProps(sduiId, sduiState, (item as any).dynamicProps);

  /**
   * @TODO Add id fields to all ContentItems
   * for example: ContentItemForm
   */
  return <Component key={(item as { id: string }).id} {...item} {...dynamicProps} />;
};
