import { createContext } from "react";

export interface IProductStepDetachedContext {
  history: string[];
  currentStepId: string;
  productId: string;
  setCurrentStep: (step: string) => void;
  pushNestedHistory: (history: string) => void;
  popNestedHistory: () => void;
  nestedHistory: string[];
}

export const ProductStepDetachedContext = createContext<IProductStepDetachedContext>({
  history: [],
  currentStepId: null,
  productId: null,
  setCurrentStep: () => ({}),
  pushNestedHistory: () => ({}),
  popNestedHistory: () => ({}),
  nestedHistory: [],
});
