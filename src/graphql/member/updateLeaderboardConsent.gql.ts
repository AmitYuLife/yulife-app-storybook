import gql from "graphql-tag";
import client from "../_core/client";
import { UpdateLeaderboardConsent, UpdateLeaderboardConsentVariables } from "../_core/schema";

const updateLeaderboardConsentGql = gql`
    mutation UpdateLeaderboardConsent($leaderboardId: String, $consent: Boolean) {
        updateLeaderboardConsent(leaderboardId: $leaderboardId, consent: $consent) {
            leaderboardId
            name
            consent
        }
    }
`;

export default (variables: UpdateLeaderboardConsentVariables) =>
    client.mutate<UpdateLeaderboardConsent, UpdateLeaderboardConsentVariables>({
        mutation: updateLeaderboardConsentGql,
        variables
    });
