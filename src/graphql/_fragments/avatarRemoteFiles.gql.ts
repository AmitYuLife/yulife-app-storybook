import gql from "graphql-tag";

export const GQL_FRAGMENT_AVATAR_REMOTE_FILES = gql`
  fragment YumojiRemoteFiles on AvatarRemoteFiles {
    __typename
    svgFull: image(options: { format: svg })
    pngFull: image
    pngMini: image(options: { width: 66.25, height: 138.25 })
  }
`;
