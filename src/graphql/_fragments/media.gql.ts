import gql from "graphql-tag";

export const GQL_FRAGMENT_MEDIA = gql`
  fragment Media on Media {
    id
    title
    description
    shortDescription
    duration
    theme
    media {
      id
      uri
    }
    cover {
      id
      uri
    }
    thumbnail {
      id
      uri
    }
    logo {
      id
      uri
    }
  }
`;
