import gql from "graphql-tag";
import client from "@graphql/_core/client";
import { GetAdBanners } from "@graphql/_core/schema";

export const GQL_QUERY_GET_AD_BANNERS = gql`
  query GetAdBanners($place: String) {
    getAdBanners(place: $place) {
      id
      imageUrl {
        uri
      }
      navigateTo
      startDate
      endDate
      height
      width
    }
  }
`;

export default function getAdBannersQuery(place?: string) {
  return client().query<GetAdBanners>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_AD_BANNERS,
    variables: {
      place,
    },
  });
}
