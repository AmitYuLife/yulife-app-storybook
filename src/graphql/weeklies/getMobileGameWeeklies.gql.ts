import gql from "graphql-tag";

export const GQL_QUERY_GET_GAME_WEEKLIES = gql`
  query GetMobileGameWeeklies {
    getMobileGameWeeklies {
      id
      endDateTime
      hasUnclaimedRewards
      activityProgress {
        id
        activitySubTotal
        yuCoinSubTotal
        currentPosition
        maxLength
        isClaimable
        isClaimed
        iconUrl {
          id
          uri
        }
      }
    }
  }
`;
