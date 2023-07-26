import { gql } from "@apollo/client";

export const GQL_QUERY_AVATAR = gql`
  query Avatar($bodyType: AvatarBodyType, $partType: AvatarPartType, $colorSchemeIds: [String]) {
    listAvatarParts(bodyType: $bodyType, partType: $partType) {
      partId
      bodyType
      partType
      previewViewBox
      hidesPartTypes
      height
      width
      colors {
        default {
          colorSchemeId
          colorScheme {
            main
            shadow
            light
            base
            nose
            eyebrows
            leftEar
            rightEar
            lips
            tongue
          }
        }
        available
      }
      elements {
        id
        attributes {
          name
          value
        }
        name
        type
      }
    }

    getAvatarColors(colorSchemeIds: $colorSchemeIds, partType: $partType) {
      colorSchemeId
      colorScheme {
        main
        shadow
        light
        base
        nose
        eyebrows
        leftEar
        rightEar
        lips
        tongue
      }
    }
  }
`;
