import { SduiStyleDynamic } from "@graphql/_core/schema";
import { useContext } from "react";
import { SduiStateContext } from "../_context/SduiProvider";
import { mapDynamicServerStyles } from "../_utils/mapServerStyles";

export function useDynamicServerStyles(dynamicStyles: Array<SduiStyleDynamic>) {
  const sduiState = useContext(SduiStateContext);

  return { dynamicServerStyles: mapDynamicServerStyles(dynamicStyles, sduiState.bus) };
}
