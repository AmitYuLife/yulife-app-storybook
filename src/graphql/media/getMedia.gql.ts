import { gql } from "@apollo/client";
import client from "@graphql/_core/client";
import { GQL_FRAGMENT_MEDIA } from "@graphql/_fragments/media.gql";
import { GetMediaVariables, GetMedia_getMedia } from "@graphql/_core/schema";

export const GQL_QUERY_GET_VIDEOS_LIST = gql`
  ${GQL_FRAGMENT_MEDIA}
  query GetMedia($tags: [String]) {
    getMedia(tags: $tags) {
      ...Media
    }
  }
`;

export default function getVideosListQuery(tags?: string[]) {
  return client().query<GetMedia_getMedia, GetMediaVariables>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_VIDEOS_LIST,
    variables: {
      tags,
    },
  });
}
