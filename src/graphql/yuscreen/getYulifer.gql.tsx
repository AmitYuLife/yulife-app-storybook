import gql from "graphql-tag";

export const GQL_QUERY_GET_YULIFER = gql`
  query GetYulifer {
    getYulifer {
      userId
      earnRate
      isAvatarCreated
      products {
        employer {
          policyNumber
          earnRate
          description
          active
          icon
          name
        }
        personal {
          policyNumber
          earnRate
          description
          active
          icon
          name
        }
        charms {
          policyNumber
          earnRate
          description
          active
          icon
          name
        }
      }
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
  }
`;
