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
        uri
      }
    }
    tags {
      tag
      joined
      icon {
        uri
      }
    }
    joined
    badge {
      text
      icon {
        uri
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
        uri
      }
      animated
      rewardId
      rewardClaimed
      isClaimable
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
        uri
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
        uri
      }
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
`;
