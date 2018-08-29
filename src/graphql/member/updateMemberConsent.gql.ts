import gql from "graphql-tag";
import client from "../_core/client";
import { MobileConsentInput, UpdateMemberConsent, UpdateMemberConsentVariables } from "../_core/schema";

const updateMemberConsentGql = gql`
    mutation UpdateMemberConsent($consent: MobileConsentInput) {
        upsertMobileConsent(consent: $consent) {
            mobileHealth
            marketing
            pushNotifications
            companyLeaderboard
            workspaceLeaderboard
        }
    }
`;

export default (consent: MobileConsentInput) => client.mutate<UpdateMemberConsent, UpdateMemberConsentVariables>({
    mutation: updateMemberConsentGql,
    variables: { consent }
});
