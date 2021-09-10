import {
  GetPersonalProductStep_getPersonalProductStep_body,
  ContentItemScrollPicker as GqlScrollPicker,
} from "@graphql/_core/schema";
import { ProductStepDefaultFields, DynamicData } from "@redux/server-driven-ui/sdui.types";
import { createContext, Dispatch, SetStateAction } from "react";

type ScrollPickerNeededKeys =
  | "answerKey"
  | "displayFormat"
  | "variants"
  | "pickerCancelButtonLabel"
  | "pickerConfirmButtonLabel";

export type IProductStepScrollPicker = Pick<GqlScrollPicker, ScrollPickerNeededKeys> & {
  activeVariantIndex: number;
};

export interface IProductStepContext extends ProductStepDefaultFields {
  scrollPicker: IProductStepScrollPicker;
  setScrollPicker: Dispatch<SetStateAction<IProductStepScrollPicker>>;
  setDynamicData: Dispatch<SetStateAction<DynamicData>>;
  body: GetPersonalProductStep_getPersonalProductStep_body[];
}

export const DEFAULT_DYNAMIC_DATA = Object.freeze({});

export const ProductStepContext = createContext<IProductStepContext>({
  productId: null,
  customerProductId: null,
  stepId: null,
  dynamicData: DEFAULT_DYNAMIC_DATA,
  setDynamicData: () => ({}),
  body: [],
  scrollPicker: null,
  setScrollPicker: () => null,
});
