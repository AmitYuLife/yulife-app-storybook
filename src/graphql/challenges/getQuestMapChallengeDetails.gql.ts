import client from "@graphql/_core/client";
import { GetQuestMapLevelChallengeDetails, GetQuestMapLevelChallengeDetailsVariables } from "@graphql/_core/schema";
import { gql } from "@apollo/client";

export const GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS = gql`
  query GetQuestMapLevelChallengeDetails($levelSlotId: String!) {
    getQuestMapLevelChallengeDetails(levelSlotId: $levelSlotId) {
      id
      backgroundColour
      progressBar {
        name
        barColor
        goalTextColor
        progressColor
        progressGoalEmpty
        progressGoalFilled
        progressStarEmpty
        progressStarFilled
        progressTextColor
      }
      assets {
        backgroundImage {
          id
          uri
        }
        detailsImage {
          id
          uri
        }
        tileImage {
          id
          uri
        }
        historyImage {
          id
          uri
        }
      }
      topBarType
      actionStyles {
        primaryColour
        secondaryColour
      }
    }
  }
`;

export default (levelSlotId: string) =>
  client().query<GetQuestMapLevelChallengeDetails, GetQuestMapLevelChallengeDetailsVariables>({
    query: GQL_QUERY_GET_QUEST_MAP_CHALLENGE_DETAILS,
    variables: { levelSlotId },
    fetchPolicy: "cache-first",
  });
