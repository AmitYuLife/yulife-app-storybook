import gql from "graphql-tag";

export const GQL_QUERY_LEADERBOARD = gql`
  query GetLeaderboard($sortBy: String, $leaderboardId: String) {
    getLeaderboard(sortBy: $sortBy, leaderboardId: $leaderboardId) {
      __typename
      id
      firstName
      lastName
      name
      coins
      steps
      avatar {
        id
        hair {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
        facialHair {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
        head {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
        eyes {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
        body {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
        pants {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
        chest {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
        gloves {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
        boots {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
        glasses {
          part {
            partId
            elements {
              name
              attributes {
                name
                value
              }
            }
          }
          color {
            colorSchemeId
            colorScheme {
              main
              shadow
              light
              base
              eyebrows
              leftEar
              rightEar
              lips
              tongue
              nose
            }
          }
        }
      }
    }
    getCurrentUser {
      __typename
      id
    }
  }
`;
