import { gql } from "@apollo/client";
import client from "../_core/client";

import { SendWellbeingHubItemDocuments, SendWellbeingHubItemDocumentsVariables } from "../_core/schema";

export const GQL_MUTATION_SEND_WELLBEING_HUB_ITEM_DOCUMENTS = gql`
  mutation SendWellbeingHubItemDocuments($itemId: String!, $email: String!) {
    sendWellbeingHubItemDocuments(itemId: $itemId, email: $email)
  }
`;

export default (itemId: string, email: string) =>
  client().mutate<SendWellbeingHubItemDocuments, SendWellbeingHubItemDocumentsVariables>({
    mutation: GQL_MUTATION_SEND_WELLBEING_HUB_ITEM_DOCUMENTS,
    variables: { itemId, email },
  });
