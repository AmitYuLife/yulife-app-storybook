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

export const GQL_FRAGMENT_GOAL_DETAILS = gql`
  fragment GoalDetails on GoalDetails {
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
    faq {
      text
      icon {
        id
        uri(options: { width: 56, height: 56 })
      }
    }
    infoCards {
      icon {
        id
        uri(options: { width: 56, height: 56 })
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
`;
