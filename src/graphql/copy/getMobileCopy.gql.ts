import gql from "graphql-tag";
import client from "../_core/client";
import { GetMobileCopy } from "../_core/schema";

export const getMobileCopyGql = gql`
    query GetMobileCopy {
        getMobileCopy {
            version
            screens {
                login {
                    heading
                    subheading
                    ctaLabel
                    secondaryCtaLabel
                }
                noAccess {
                    heading
                    subheading
                }
                resetPassword {
                    heading
                    ctaLabel
                }
                signupReward {
                    heading
                    subheading

                    ctaLabel
                }
            }
        }
    }
`;

export default function getMobileCopyWithClient() {
    return client.query<GetMobileCopy>({
        fetchPolicy: "network-only",
        query: getMobileCopyGql
    });
}
