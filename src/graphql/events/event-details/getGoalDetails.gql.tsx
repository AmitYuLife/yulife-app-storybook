import gql from "graphql-tag";

export const GQL_QUERY_GET_GOAL_DETAILS = gql`
  query GetGoalDetails($id: ID!, $stageId: String!) {
    getGoalDetails(id: $id, stageId: $stageId) {
      title
      labels
      headerImage {
        id
        uri
      }
      headerBackgroundColor
      headerTextColor
      rewards {
        id
        title
        description
        itemBackground {
          id
          uri
        }
        item {
          id
          uri
        }
        status
        stars {
          id
          uri
        }
        animated
        infoText
        infoBadgeUri {
          id
          uri(options: { width: 32, height: 32 })
        }
      }
      progressUnit
      currentProgress
      maxProgress
      progressIcon {
        uri
      }
      milestones
      about {
        title
        markdown
      }
      infoCards {
        icon {
          id
          uri
        }
        title
        description
        styles {
          property
          value
        }
      }
      banner {
        id
        icon {
          id
          uri
        }
        type
        styles {
          property
          value
        }
        markdown
      }
      button {
        label
        onPress {
          goalType
          sduiType
          payload
        }
        shadowColor
        backgroundColor
      }
    }
  }
`;
