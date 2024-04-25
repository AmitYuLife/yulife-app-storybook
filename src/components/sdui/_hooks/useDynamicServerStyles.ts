import { useContext } from "react";
import { SduiStateContext } from "../_context/SduiProvider";
import { mapDynamicServerStyles } from "../_utils/mapServerStyles";
import { SduiStyleDynamic } from "@graphql/__generated";

export function useDynamicServerStyles(dynamicStyles: Array<SduiStyleDynamic>) {
  const sduiState = useContext(SduiStateContext);

  return { dynamicServerStyles: mapDynamicServerStyles(dynamicStyles, sduiState.bus) };
}
