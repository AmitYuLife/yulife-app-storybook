import Ajv from "ajv";
import { useEffect, useState } from "react";

const ajv = new Ajv();
const schemaRegistry = new Map<string, { timestamp: number }>();

const SCHEMA_TTL = 60 * 60 * 1000; // 1hr
const MAX_SCHEMAS = 10;

const cleanupSchemaRegistry = () => {
  const now = Date.now();

  let earliestSchemaKey: string;
  let earliestSchemaTimestamp = Number.MAX_SAFE_INTEGER;

  schemaRegistry.forEach(({ timestamp }, key) => {
    if (timestamp + SCHEMA_TTL < now) {
      ajv.removeSchema(key);
      schemaRegistry.delete(key);
      return;
    }

    if (timestamp < earliestSchemaTimestamp) {
      earliestSchemaKey = key;
      earliestSchemaTimestamp = timestamp;
    }
  });

  // We are calling this method before adding a schema, so at maximum, one schema needs to be removed
  if (schemaRegistry.size >= MAX_SCHEMAS && earliestSchemaKey) {
    ajv.removeSchema(earliestSchemaKey);
    schemaRegistry.delete(earliestSchemaKey);
  }
};

type Params = {
  schema: string;
  data: Record<string, any>;
  isValidationEnabled?: boolean;
};

export function useAjvSchemaValidation({ schema, data, isValidationEnabled }: Params) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!schema || !data) {
      return;
    }

    const schemaKey = schema; // Hashing is an overcomplication here

    let validate = ajv.getSchema(schemaKey);

    if (!validate) {
      try {
        const schemaJson = {
          ...JSON.parse(schema),
          $async: false,
        };

        cleanupSchemaRegistry();
        ajv.addSchema(schemaJson, schemaKey);
        schemaRegistry.set(schemaKey, {
          timestamp: Date.now(),
        });
      } catch {
        setIsValid(true);
        return;
      }

      validate = ajv.getSchema(schemaKey);
    }

    setIsValid(!!validate(data));
  }, [schema, data]);

  if (!isValidationEnabled || !schema) {
    return { isValid: true };
  }

  return { isValid };
}
