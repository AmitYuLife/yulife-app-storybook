import gql from "graphql-tag";
import { Query, QueryResult } from "react-apollo";
import { GetAllPurchases } from "../_core/schema";

export const getAllPurchasesGql = gql`
    query GetAllPurchases {
        getAllPurchases {
            __typename
            id
            userId
            rewardProviderId
            amount
            code
            pin
            currency_code
            expiry_date
            name
            updatedAt
            createdAt
            yuCoinsSpent
            delivery_url
            status
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

export type GetAllPurchasesResultType = QueryResult<GetAllPurchases>;

export default class GetAllPurchasesQuery extends Query<GetAllPurchases> {}
