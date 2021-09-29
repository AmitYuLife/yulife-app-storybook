import convertToYup from "json-schema-yup-transformer";
import { DynamicData } from "@redux/server-driven-ui/sdui.types";

export const getIsJsonSchemaValid = (disabledState: string, dynamicData: DynamicData) => {
  try {
    const schema = JSON.parse(disabledState);
    const yupSchema = convertToYup(schema);
    return yupSchema.isValidSync(dynamicData);
  } catch (e) {
    return true;
  }
};
