import { gql } from "@apollo/client";
import { GQL_FRAGMENT_SOCIAL_GROUP } from "@graphql/_fragments/socialGroup.gql";

export const GQL_QUERY_SOCIAL_GROUP_LEADERBOARDS = gql`
  ${GQL_FRAGMENT_SOCIAL_GROUP}

  query GetMobileSocialGroupLeaderboards {
    getMobileSocialGroupLeaderboards {
      ...SocialGroup
    }
  }
`;
