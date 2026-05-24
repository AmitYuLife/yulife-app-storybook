import { type FC, ReactNode, useContext } from "react";

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
  ContentItemStackedShadowWrapper,
  ContentItemBlurredRaysWrapper,
  ContentItemLoader,
} from "@components/sdui";
import { GetSduiJourneyQuery } from "@graphql/__generated";
import { mapDynamicProps } from "../_utils/mapDynamicProps";
import { SduiIdContext, SduiStateContext } from "../_context/SduiProvider";
import ContentItemScale from "../contentItemScale/contentItemScale";

let componentMap: Record<string, (props: unknown) => ReactNode>;

const getComponentMap = () => {
  if (componentMap) {
    return componentMap;
  }

  // Lazy init avoids circular dependency with contentItemWrapper during module evaluation.
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
    ContentItemStackedShadowWrapper,
    ContentItemBlurredRaysWrapper,
    ContentItemLoader,
  };

  return componentMap;
};

interface Props {
  item: NonNullable<NonNullable<GetSduiJourneyQuery["getSduiJourney"]>["body"]>[number];
}

export const Renderer: FC<Props> = ({ item }) => {
  const sduiState = useContext(SduiStateContext);
  const sduiId = useContext(SduiIdContext);

  const Component = getComponentMap()[item?.__typename];

  if (!Component) {
    return null;
  }

  const dynamicProps = mapDynamicProps(
    sduiId,
    sduiState,
    (item as { dynamicProps?: string | null }).dynamicProps ?? ""
  );

  /**
   * @TODO Add id fields to all ContentItems
   * for example: ContentItemForm
   */
  return <Component key={(item as { id: string }).id} {...item} {...dynamicProps} />;
};
