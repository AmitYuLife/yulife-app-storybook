import { getIsJsonSchemaValid } from "@utils";
import { useContext } from "react";
import { SduiStateContext } from "../_context/SduiProvider";

export function useSduiValidField(disabledState: string, isValidationEnabled = true) {
  const sduiState = useContext(SduiStateContext);

  if (!isValidationEnabled || !disabledState) {
    return { isValid: true };
  }

  const validation = getIsJsonSchemaValid(disabledState, sduiState.dynamicData);
  const isValid = disabledState ? validation : true;

  return { isValid };
}
