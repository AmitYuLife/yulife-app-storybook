import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { GetRewards } from "../_core/schema";

export const getRewardsGql = gql`
    query GetRewards {
        getRewards {
            __typename
            id
            reward_sticker
            loyalty_programme
            rewardProviderId
            availability
            progression_level
            available_denominations {
                __typename
                yuCoin
                value
                stock
            }
            card_image_url
            code
            currency_code
            denomination_type
            description
            e_code_usage_type
            expiry_date_policy
            maximum_value
            minimum_value
            name
            redeem_steps {
                __typename
                info
                steps
            }
            terms_and_conditions_url
            uiSettings {
                __typename
                logoWidth
                logoHeight
                ctaLabel
                alertHeading
                alertSubheading
                alertCancelLabel
                alertOkLabel
            }
        }
    }
`;

export type GetRewardsResultType = QueryResult<GetRewards>;

export default class GetRewardsQuery extends Query<GetRewards> {}
