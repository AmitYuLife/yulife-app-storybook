import { createContext } from "react";
import { Animated } from "react-native";

export interface IProductDetailsContext {
  /**
   * this is the scroll value that comes from the ScrollView onScroll event in
   * src/components/containers/products/product-step/sections/body/body.tsx
   */
  scrollValue: Animated.Value;
}

export const UiContext = createContext<IProductDetailsContext>({
  scrollValue: null,
});
