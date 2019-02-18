import gql from "graphql-tag";
import * as React from "react";
import { Query, QueryProps, QueryResult } from "react-apollo";
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
            link_type
            maximum_value
            minimum_value
            name
            redeem_steps {
                __typename
                id
                info
                steps
            }
            terms_and_conditions_url
            uiSettings {
                __typename
                id
                logoWidth
                logoHeight
                ctaLabel
                alertHeading
                alertSubheading
                alertCancelLabel
                alertOkLabel
                offerHeading
                offerSubheading
            }
        }
    }
`;

export type GetRewardsResultType = QueryResult<GetRewards>;

export default function GetRewardsQuery({
    fetchPolicy = "cache-and-network",
    ...props
}: Partial<QueryProps<GetRewards>>) {
    return <Query {...props as any} query={getRewardsGql} fetchPolicy={fetchPolicy} />;
}
