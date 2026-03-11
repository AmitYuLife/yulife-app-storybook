import { createContext } from "react";
import { SharedValue } from "react-native-reanimated";

export interface IProductDetailsContext {
  /**
   * this is the scroll value that comes from the ScrollView onScroll event in
   * src/components/containers/products/product-step/sections/body/body.tsx
   */
  scrollValue: SharedValue<number>;
}

export const UiContext = createContext<IProductDetailsContext>({
  scrollValue: null,
});
