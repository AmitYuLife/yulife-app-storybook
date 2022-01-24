import { createContext } from "react";

export interface IProductStepDetachedNavigationContext {
  pushNestedHistory: (history: string) => void;
  popNestedHistory: () => void;
  nestedHistory: string[];
}

export const ProductStepDetachedNavigationContext = createContext<IProductStepDetachedNavigationContext>({
  pushNestedHistory: () => ({}),
  popNestedHistory: () => ({}),
  nestedHistory: [],
});
