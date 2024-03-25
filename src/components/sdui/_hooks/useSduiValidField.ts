import { validateJSONSchemaWithYup } from "@utils";
import { useContext } from "react";
import { SduiStateContext } from "../_context/SduiProvider";
import { useUserFeatures } from "@hooks";
import { useAjvSchemaValidation } from "@components/sdui/_hooks/useAjvSchemaValidation";

type Params = {
  schema: string;

  data?: Record<string, any>; // Defaults to useContext(SduiStateContext).dynamicData
  isValidationEnabled?: boolean;
};

export function useSduiValidField({ schema, data, isValidationEnabled }: Params) {
  const sduiState = useContext(SduiStateContext);
  const { tempEnableClientAjvValidation } = useUserFeatures();

  const dataToValidate = data || sduiState.dynamicData;

  const { isValid: isAjvValid } = useAjvSchemaValidation({ schema, data: dataToValidate, isValidationEnabled });

  if (!isValidationEnabled || !schema) {
    return { isValid: true };
  }

  if (!tempEnableClientAjvValidation) {
    return {
      isValid: validateJSONSchemaWithYup(schema, dataToValidate),
    };
  }

  return { isValid: isAjvValid };
}
