import { gql } from "@apollo/client";
import client from "@graphql/_core/client";
import { GetQuestMapLevelChallengeContent, GetQuestMapLevelChallengeContentVariables } from "@graphql/_core/schema";
import { GQL_FRAGMENT_MEDIA } from "@graphql/_fragments/media.gql";

export const GQL_QUERY_GET_QUEST_MAP_CHALLENGE_CONTENT = gql`
  ${GQL_FRAGMENT_MEDIA}
  query GetQuestMapLevelChallengeContent($levelSlotId: String!, $contentTags: [String!]!) {
    getQuestMapLevelChallengeContent(levelSlotId: $levelSlotId, contentTags: $contentTags) {
      media {
        ...Media
      }
      reward
      stars
      formattedDuration
    }
  }
`;

export default function getQuestMapLevelChallengeContent(levelSlotId: string, contentTags: [string]) {
  return client().query<GetQuestMapLevelChallengeContent, GetQuestMapLevelChallengeContentVariables>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_QUEST_MAP_CHALLENGE_CONTENT,
    variables: {
      levelSlotId,
      contentTags,
    },
  });
}
