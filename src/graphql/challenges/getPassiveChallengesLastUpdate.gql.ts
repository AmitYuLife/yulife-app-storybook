import client from "@graphql/_core/client";
import { GetPassiveChallengesLastUpdate } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_QUERY_GET_PASSIVE_CHALLENGES_LAST_UPDATE = gql`
  query GetPassiveChallengesLastUpdate {
    getPassiveChallengesLastUpdate {
      cycling
      meditation
      steps
    }
  }
`;

const getPassiveChallengesLastUpdate = () =>
  client().query<GetPassiveChallengesLastUpdate>({
    query: GQL_QUERY_GET_PASSIVE_CHALLENGES_LAST_UPDATE,
    fetchPolicy: "network-only",
  });

export default getPassiveChallengesLastUpdate;
