import {
  GetPersonalProductStepQuery,
  GetPersonalProductStepDetachedQuery,
  ContentItemScrollPickerFragment as GqlScrollPicker,
} from "@graphql/__generated";
import { ProductStepDefaultFields, DynamicData } from "@redux/server-driven-ui/sdui.types";
import { createContext, Dispatch, SetStateAction } from "react";
import { Animated, LayoutChangeEvent } from "react-native";

type IComponentLayout = Record<string, LayoutChangeEvent["nativeEvent"]["layout"]>;
export type IStepComponentsLayout = Record<string, IComponentLayout>;

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
  body:
    | GetPersonalProductStepQuery["getPersonalProductStep"]["body"]
    | GetPersonalProductStepDetachedQuery["getPersonalProductStepDetached"]["body"];
  /**
   * this is the scroll value that comes from the ScrollView onScroll event in
   * src/components/containers/products/product-step/sections/body/body.tsx
   */
  scrollValue: Animated.Value;
  /**
   * this is the height value that comes from the View's onLayout event in
   * src/components/containers/products/product-step/sections/header/header.tsx
   */
  headerHeight: number;
  /**
   * Set to 0 when showing a fullscreen item from the header.
   * Set to null to go back to default behaviour.
   */
  headerBottom: number;
  setHeaderBottom: Dispatch<SetStateAction<number | null>>;
  isLoading: boolean;
  componentsLayout: IStepComponentsLayout;
  setComponentsLayout: Dispatch<SetStateAction<IStepComponentsLayout>>;
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

  scrollValue: null,
  headerHeight: 0,
  headerBottom: null,
  setHeaderBottom: () => null,
  isLoading: false,
  componentsLayout: {},
  setComponentsLayout: (_layout: IStepComponentsLayout) => null,
});
