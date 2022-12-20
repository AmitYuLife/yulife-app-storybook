import gql from "graphql-tag";
import client from "@graphql/_core/client";
import { SubmitUserDebugData, SubmitUserDebugDataVariables } from "@graphql/_core/schema";
import { SampleDebugData } from "@graphql/_core/schema/globalTypes";

export const GQL_SUBMIT_USER_DEBUG_DATA = gql`
  mutation SubmitUserDebugData($id: String, $results: [SampleDebugData]!) {
    submitUserDebugData(id: $id, results: $results) {
      success
    }
  }
`;

export default function submitUserDebugData(id: string, results: SampleDebugData[]) {
  return client().mutate<SubmitUserDebugData, SubmitUserDebugDataVariables>({
    mutation: GQL_SUBMIT_USER_DEBUG_DATA,
    variables: {
      id,
      results,
    },
    errorPolicy: "ignore",
  });
}
