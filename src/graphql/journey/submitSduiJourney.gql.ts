import { mapRefetchQueries } from "@graphql/_core/mapRefetchQueries";
import client from "../_core/client";
import { SubmitSduiJourneyMutationVariables, gql } from "@graphql/__generated";

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
  variables?: Partial<SubmitSduiJourneyMutationVariables>;
  refetchQueries?: string[];
}) =>
  client().mutate({
    mutation: gql("SubmitSduiJourneyDocument"),
    variables,
    refetchQueries: mapRefetchQueries(refetchQueries),
  });
