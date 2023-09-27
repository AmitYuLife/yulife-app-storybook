import { InternalRefetchQueriesInclude, gql } from "@apollo/client";
import client from "../_core/client";
import {
  UpdateMobileSocialLeaderboardConsents,
  UpdateMobileSocialLeaderboardConsentsVariables,
} from "@graphql/_core/schema";

export const GQL_MUTATION_UPDATE_MOBILE_SOCIAL_LEADERBOARD_CONSENTS = gql`
  mutation UpdateMobileSocialLeaderboardConsents($consents: [SocialLeaderboardConstent]!) {
    updateMobileSocialLeaderboardConsents(consents: $consents)
  }
`;

const updateMobileSocialLeaderboardConsents = (
  variables: UpdateMobileSocialLeaderboardConsentsVariables,
  refetchQueries?: InternalRefetchQueriesInclude
) =>
  client().mutate<UpdateMobileSocialLeaderboardConsents>({
    mutation: GQL_MUTATION_UPDATE_MOBILE_SOCIAL_LEADERBOARD_CONSENTS,
    variables,
    refetchQueries,
  });

export default updateMobileSocialLeaderboardConsents;
