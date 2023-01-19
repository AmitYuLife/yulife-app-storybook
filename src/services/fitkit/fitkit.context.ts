import { useFitKit } from "./fitkit.hooks";
import { createContext } from "react";

const fitkitInitialState: ReturnType<typeof useFitKit> = {
  authorise: () => null,
  authoriseFitKitTypes: () => null,
  authorised: false,
  available: false,
  loading: true,
};

export const FitkitContext = createContext(fitkitInitialState);
