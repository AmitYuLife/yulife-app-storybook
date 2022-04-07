import { GQL_FRAGMENT_CONTENT_ITEM_LOTTIE } from "@graphql/_fragments/content.gql";
import { GQL_FRAGMENT_SDUI_ACTION } from "@graphql/_fragments/shared.gql";
import gql from "graphql-tag";
import client from "@graphql/_core/client";
import { GetUserProfile } from "@graphql/_core/schema";

export const GQL_QUERY_GET_USER_PROFILE = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_LOTTIE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  query GetUserProfile {
    getUserProfile {
      gameSettings {
        cyclingMeasurement
        maxStepsAnomalyWindowMs
      }
      surge {
        endDateTime
        multiplier
        title
        description
        lottie {
          ...ContentItemLottie
        }
      }
      earnRate
      avatar {
        isAvatarCreated
        avatarRemoteFiles {
          svgFull: image(options: { format: svg })
          pngFull: image
          pngMini: image(options: { width: 66.25, height: 138.25 })
        }
      }
      passiveChallengesLastUpdate {
        cycling
        meditation
        steps
      }
      endPointsVersion {
        getMobileCopy
        getMobileAssets
      }
      notification {
        hasDuels
        hasPendingForm
        hasMobileWhatsNewModal
        hasAppReview
        hasDailyScreenCustomIcon
        hasYuScreenNotification
      }
      events {
        id
        stageId
        title
        description
        descriptionImage {
          uri(options: { width: 530, height: 530 })
        }
        task
        taskImage {
          uri(options: { width: 530, height: 530 })
        }
        reward
        rewardImage {
          uri(options: { width: 530, height: 530 })
        }
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
      events {
        id
        stageId
        title
        description
        descriptionImage {
          uri(options: { width: 530, height: 530 })
        }
        task
        taskImage {
          uri(options: { width: 530, height: 530 })
        }
        reward
        rewardImage {
          uri(options: { width: 530, height: 530 })
        }
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
    }
  }
`;

export default function getUserProfile() {
  return client().query<GetUserProfile>({
    fetchPolicy: "network-only",
    query: GQL_QUERY_GET_USER_PROFILE,
    variables: {},
  });
}
