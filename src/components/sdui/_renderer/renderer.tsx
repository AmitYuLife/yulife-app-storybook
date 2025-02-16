import React, { ReactNode, useContext } from "react";

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
  ContentItemConfirm,
} from "@components/sdui";
import { GetSduiJourneyQuery } from "@graphql/__generated";
import { mapDynamicProps } from "../_utils/mapDynamicProps";
import { SduiIdContext, SduiStateContext } from "../_context/SduiProvider";
import ContentItemScale from "../contentItemScale/contentItemScale";

let componentMap: Record<string, (props: unknown) => ReactNode>;

(() => {
  // Due to a circular dependency with contentItemWrapper (renderer->@components/sdui->contentItemWrapper->renderer)
  // we need to wait for the next tick to use these components, or anything exported after contentItemWrapper will be undefined
  setTimeout(() => {
    componentMap = {
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
      ContentItemWrapper,
      ContentItemMedia,
      ContentItemLinearGradient,
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
      ContentItemScale,
      ContentItemConfirm,
    };
  });
})();

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
