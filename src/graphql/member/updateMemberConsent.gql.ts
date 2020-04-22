import gql from "graphql-tag";
import client from "../_core/client";
import { UpdateMemberConsent, UpdateMemberConsentVariables } from "../_core/schema";
import { MobileConsentInput } from "../_core/schema/globalTypes";

const GQL_MUTATION_UPDATE_MEMBER_CONSENT = gql`
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

export default (consent: MobileConsentInput) =>
  client().mutate<UpdateMemberConsent, UpdateMemberConsentVariables>({
    mutation: GQL_MUTATION_UPDATE_MEMBER_CONSENT,
    variables: { consent },
  });
