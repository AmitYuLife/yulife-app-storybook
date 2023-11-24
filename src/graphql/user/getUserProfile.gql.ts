import { GQL_FRAGMENT_CONTENT_ITEM_LOTTIE } from "@graphql/_fragments/content.gql";
import { GQL_FRAGMENT_SDUI_ACTION } from "@graphql/_fragments/shared.gql";
import { gql } from "@apollo/client";
import client from "@graphql/_core/client";
import { GetUserProfile } from "@graphql/_core/schema";
import { GQL_FRAGMENT_GOAL } from "@graphql/_fragments";

export const GQL_QUERY_GET_USER_PROFILE = gql`
  ${GQL_FRAGMENT_CONTENT_ITEM_LOTTIE}
  ${GQL_FRAGMENT_SDUI_ACTION}
  ${GQL_FRAGMENT_GOAL}

  query GetUserProfile {
    getUserProfile {
      gameSettings {
        cyclingMeasurement
        maxStepsAnomalyWindowMs
        blackListApps {
          steps
        }
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
      passiveHourlyActivityLastUpdate {
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
        hasAdBanners
      }
      events {
        ...UserProfileEvents
      }
      tabNotifications
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
