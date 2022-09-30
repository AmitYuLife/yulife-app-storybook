import client from "@graphql/_core/client";
import { GetGoalDetails, GetGoalDetailsVariables } from "@graphql/_core/schema/GetGoalDetails";
import { GQL_FRAGMENT_GOAL_DETAILS } from "@graphql/_fragments";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_GOAL_DETAILS = gql`
  ${GQL_FRAGMENT_GOAL_DETAILS}
  query GetGoalDetails($id: ID!, $stageId: String!) {
    getGoalDetails(id: $id, stageId: $stageId) {
      ...GoalDetails
    }
  }
`;

export default function getGoalDetails(variables: GetGoalDetailsVariables) {
  return client().query<GetGoalDetails>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_GOAL_DETAILS,
    variables,
  });
}
