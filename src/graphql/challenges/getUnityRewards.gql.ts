import { gql } from "@apollo/client";

export const GQL_QUERY_GET_UNITY_REWARDS = gql`
  query GetUnityRewards($level: Int!, $yuniversalMap: Int, $yuniversalLevel: Int) {
    getUnityRewards(level: $level, yuniversalMap: $yuniversalMap, yuniversalLevel: $yuniversalLevel) {
      intro {
        heading
        subHeading
        cta
      }
      congratulatory {
        heading
        title
        description
        cta
      }
      chest {
        chestType
        title
        items {
          icon {
            id
            uri(options: { width: 180, height: 180 })
          }
          description
          backgroundColour
          shadowColour
          textColour
          starColour
          tooltip {
            title
            description
            cta
          }
        }
      }
      afterword {
        description
        cta
      }
    }
  }
`;
