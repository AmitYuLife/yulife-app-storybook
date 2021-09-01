import { GetMobileCopy } from "@graphql/_core/schema";

export const UPDATE_COPY = "UPDATE_COPY";

export const updateCopy = (payload: GetMobileCopy) => ({
  payload,
  type: UPDATE_COPY,
});
