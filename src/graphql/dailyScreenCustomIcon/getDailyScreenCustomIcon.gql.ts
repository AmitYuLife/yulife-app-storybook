import { gql } from "@apollo/client";

export const GQL_QUERY_GET_DAILY_SCREEN_CUSTOM_ICON = gql`
  query GetDailyScreenCustomIcon {
    getDailyScreenCustomIcon {
      name
      position
      y
      x
      image {
        width
        height
        source {
          uri(options: { width: 116, height: 112 })
        }
      }
      text {
        x
        y
        type
        value
        colour
      }
      onPress {
        payload
        type
      }
    }
  }
`;
