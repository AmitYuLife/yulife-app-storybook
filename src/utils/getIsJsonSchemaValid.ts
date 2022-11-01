import convertToYup from "json-schema-yup-transformer";

export const getIsJsonSchemaValid = (validation: string, data: Record<string, any>) => {
  try {
    const schema = JSON.parse(validation);
    const yupSchema = convertToYup(schema);
    return yupSchema.isValidSync(data);
  } catch (e) {
    return true;
  }
};
