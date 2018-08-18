import gql from "graphql-tag";
import { MutationResult, Mutation, MutationFn } from "react-apollo";
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
        }
    }
`;

export type RedeemRewardMutationType = MutationFn<RedeemReward, RedeemRewardVariables>;

export type RedeemRewardResultType = MutationResult<RedeemReward>;

export default class RedeemRewardMutation extends Mutation<RedeemReward, RedeemRewardVariables> {}
