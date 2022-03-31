import gql from "graphql-tag";

export const GQL_QUERY_GET_DAILY_SCREEN_CUSTOM_ICON = gql`
  query GetDailyScreenCustomIcon {
    getDailyScreenCustomIcon {
      position
      y
      x
      image {
        width
        height
        source {
          uri(options: { width: 64, height: 64 })
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
