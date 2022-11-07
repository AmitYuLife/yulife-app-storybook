import { gql } from "@apollo/client";
import { SubmitSduiJourneyVariables } from "@graphql/_core/schema";
import client from "../_core/client";

export const GQL_MUTATION_SUBMIT_SDUI_JOURNEY = gql`
  mutation SubmitSduiJourney($journeyId: String!, $stepId: String!, $action: SubmitSduiJourneyAction!, $data: String!) {
    submitSduiJourney(journeyId: $journeyId, stepId: $stepId, action: $action, data: $data)
  }
`;

/**
 *
 * standardize all withClient gql ops
 * to accept 1 param with named keys
 * for clarity e.g. variables, refetchQueries,
 */
export const submitSduiJourney = ({
  variables = {},
  refetchQueries = [],
}: {
  variables?: Partial<SubmitSduiJourneyVariables>;
  refetchQueries?: string[];
}) =>
  client().mutate<SubmitSduiJourneyVariables>({
    mutation: GQL_MUTATION_SUBMIT_SDUI_JOURNEY,
    variables,
    refetchQueries,
  });
