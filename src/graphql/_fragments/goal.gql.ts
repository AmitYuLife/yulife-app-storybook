import gql from "graphql-tag";

export const GQL_FRAGMENT_GOAL = gql`
  fragment UserProfileEvents on UserProfileEvents {
    id
    stageId
    title
    description
    startDate
    endDate
    challenges {
      description
      icon {
        uri(options: { width: 32, height: 32 })
      }
    }
    tags {
      tag
      joined
      icon {
        uri(options: { width: 32, height: 32 })
      }
    }
    joined
    badge {
      text
      icon {
        uri(options: { width: 32, height: 32 })
      }
      backgroundColor
    }
    progressBar {
      max
      current
    }
    milestones {
      targetValue
      image {
        uri(options: { width: 530, height: 530 })
      }
      animated
      rewardId
      rewardClaimed
    }
  }
`;
