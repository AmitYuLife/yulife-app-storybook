import { gql } from "@apollo/client";

export const GQL_QUERY_GET_REFERRAL_INFORMATION = gql`
  query GetReferralInformation($limit: Int, $offset: Int) {
    referralInformation(limit: $limit, offset: $offset) {
      rewardForReferral
      referralLink
      referralHistory {
        id
        name
        date
        avatarUrl
        coin
      }
      background {
        id
        uri
      }
      shareCTA
      shareMessage
      disclaimer
      markdown {
        header
        historyTitle
        historyEmptyMessage
      }
    }
  }
`;
