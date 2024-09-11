import { useContext } from "react";
import { SduiStateContext } from "../_context/SduiProvider";
import { useAjvSchemaValidation } from "@components/sdui/_hooks/useAjvSchemaValidation";

type Params = {
  schema: string;

  data?: Record<string, any>; // Defaults to useContext(SduiStateContext).dynamicData
  isValidationEnabled?: boolean;
};

export function useSduiValidField({ schema, data, isValidationEnabled }: Params) {
  const sduiState = useContext(SduiStateContext);
  const dataToValidate = data || sduiState.dynamicData;
  const { isValid } = useAjvSchemaValidation({ schema, data: dataToValidate, isValidationEnabled });

  if (!isValidationEnabled || !schema) {
    return { isValid: true };
  }

  return { isValid };
}
