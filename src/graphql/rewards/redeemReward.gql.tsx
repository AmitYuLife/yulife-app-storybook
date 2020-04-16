import gql from "graphql-tag";
import { MutationTuple } from "@apollo/react-hooks";
import { RedeemReward, RedeemRewardVariables } from "@graphql/_core/schema";

export const GQL_MUTATION_REDEEM_REWARD = gql`
    mutation RedeemReward($id: String!, $amount: Float!, $metadata: ProductMetadata) {
        redeemReward(product: { id: $id, amount: $amount }, metadata: $metadata) {
            id
            userId
            rewardProviderId
            amount
            code
            currency_code
            pin
            expiry_date
            name
            yuCoinsSpent
            delivery_url
            updatedAt
            createdAt
            metadata {
                __typename
                avios {
                    __typename
                    firstName
                    lastName
                    loyaltyProgramme
                    accountNumber
                }
            }
            reward {
                __typename
                name
                description
                card_image_url
                terms_and_conditions_url
                loyalty_programme
                redeem_steps {
                    __typename
                    info
                    steps
                }
            }
        }
    }
`;

export type RedeemRewardMutationTuple = MutationTuple<RedeemReward, RedeemRewardVariables>;
