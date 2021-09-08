import { createContext } from "react";

export interface IProductStepFaqsContext {
  history: string[];
  currentStepId: string;
  productId: string;
  setCurrentStep: (step: string) => void;
  pushNestedHistory: (history: string) => void;
  popNestedHistory: () => void;
  nestedHistory: string[];
}

export const ProductStepFaqsContext = createContext<IProductStepFaqsContext>({
  history: [],
  currentStepId: null,
  productId: null,
  setCurrentStep: () => ({}),
  pushNestedHistory: () => ({}),
  popNestedHistory: () => ({}),
  nestedHistory: [],
});
