import { MutationTuple } from "@apollo/react-hooks";
import { SendMagicLink, SendMagicLinkVariables } from "@graphql/_core/schema";
import gql from "graphql-tag";

export const GQL_MUTATION_SEND_MAGIC_LINK = gql`
    mutation SendMagicLink($email: String!) {
        sendMagicLink(email: $email) {
            message
        }
    }
`;

export type SendMagicLinkMutationTuple = MutationTuple<SendMagicLink, SendMagicLinkVariables>;
