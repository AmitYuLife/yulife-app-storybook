import gql from "graphql-tag";
import { Mutation, MutationFn, MutationResult } from "react-apollo";
import { RedeemReward, RedeemRewardVariables } from "../_core/schema";

export const redeemRewardGql = gql`
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

export type RedeemRewardMutationType = MutationFn<RedeemReward, RedeemRewardVariables>;

export type RedeemRewardResultType = MutationResult<RedeemReward>;

export default class RedeemRewardMutation extends Mutation<RedeemReward, RedeemRewardVariables> {}
