import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";

import { SendMagicLink, SendMagicLinkVariables } from "../_core/schema";

export const sendMagicLinkGql = gql`
    mutation SendMagicLink($email: String!) {
        sendMagicLink(email: $email) {
            message
        }
    }
`;

export type SendMagicLinkResultType = MutationResult<SendMagicLink>;
export type SendMagicLinkMutationFunction = MutationFn<SendMagicLink, SendMagicLinkVariables>;

export default class SendMagicLinkMutation extends Mutation<SendMagicLink, SendMagicLinkVariables> {}
