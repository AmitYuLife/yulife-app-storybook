import { gql } from "@apollo/client";

export const GQL_FRAGMENT_GOAL = gql`
  fragment UserProfileEvents on UserProfileEvents {
    id
    stageId
    participationId
    title
    description
    startDate
    endDate
    status
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
    hideHint
    rewards {
      id
      goalId
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

export const GQL_FRAGMENT_WEEKLY_GOAL_PROGRESS = gql`
  fragment MobileWeeklyActivityProgress on MobileWeeklyActivityProgress {
    id
    activitySubTotal
    yuCoinSubTotal
    currentPosition
    maxLength
    isClaimable
    isClaimed
    isJoined
    iconUrl {
      id
      uri
    }
  }
`;
