import gql from "graphql-tag";
import client from "../_core/client";
import { UpdateLeaderboardConsent, UpdateLeaderboardConsentVariables } from "../_core/schema";

const GQL_MUTATION_UPDATE_LEADERBOARD_CONSENT = gql`
    mutation UpdateLeaderboardConsent($leaderboardId: String, $consent: Boolean) {
        updateLeaderboardConsent(leaderboardId: $leaderboardId, consent: $consent) {
            leaderboardId
            name
            consent
        }
    }
`;

export default (variables: UpdateLeaderboardConsentVariables) =>
    client().mutate<UpdateLeaderboardConsent, UpdateLeaderboardConsentVariables>({
        mutation: GQL_MUTATION_UPDATE_LEADERBOARD_CONSENT,
        variables
    });
