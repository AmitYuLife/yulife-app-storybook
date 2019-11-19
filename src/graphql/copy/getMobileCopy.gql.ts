import gql from "graphql-tag";
import client from "../_core/client";
import { GetMobileCopy } from "../_core/schema";

export const getMobileCopyGql = gql`
    query GetMobileCopy {
        getMobileCopy {
            version
            screens {
                login {
                    heading
                    subheading
                    ctaLabel
                    ctaLabelSecondary
                }
                offline {
                    heading
                    subheading
                    ctaLabel
                }
                noAccess {
                    heading
                    subheading
                }
                resetPassword {
                    heading
                    ctaLabel
                }
                needHelpLoggingIn {
                    heading
                    subheading
                    ctaLabel
                    ctaLabelSecondary
                }
                emailSent {
                    heading
                    subheading
                    ctaLabel
                    ctaLabelSecondary
                }
                signupReward {
                    heading
                    subheading
                    ctaLabel
                }
                leaderboards {
                    heading
                    subheading
                    noLeaderBoard {
                        heading
                        subheading
                        ctaLabel
                    }
                    turnBoardOn {
                        heading
                        subheading
                        ctaLabel
                        ctaLabelSecondary
                    }
                    turnBoardOff {
                        ctaLabel
                        ctaLabelSecondary
                        heading
                        subheading
                    }
                    invite {
                        headingBeforeName
                        headingAfterName
                        subheadingBeforeName
                        subheadingAfterName
                        ctaLabel
                        ctaLabelSecondary
                    }
                }
                activityHistoryLevels {
                    headerLeft
                    headerLevel
                    headerMid
                    headerRight
                    heading
                }
                dailyStepsFitKitAuthorise {
                    permission
                    permissionCta
                }
                purchases {
                    empty {
                        heading
                        subheading
                        ctaLabel
                    }
                    lockedReward {
                        ctaLabel
                        heading
                        subheading
                    }
                    voucherNotAvailable {
                        ctaLabel
                        heading
                        subheading
                    }
                    offline {
                        ctaLabel
                        heading
                        subheading
                    }
                    notEnoughCoins {
                        ctaLabel
                        heading
                        subheading
                    }
                    aviosConfirmed {
                        title
                        message
                        cancelButtonText
                    }
                    newLockedReward {
                        ctaLabel
                        heading
                        subheading
                    }
                }
                fitkitConnect {
                    blurb
                    heading
                    linkButtonLabel
                    primaryButtonConnecting
                    primaryButtonLabel
                    secondaryButtonLabel
                    unavailableAndroid
                    unavailableHeading
                    unavailableIOS
                }
                challenges {
                    failed {
                        ctaLabel
                        footer
                        heading
                    }
                    completed {
                        ctaLabel
                        heading
                    }
                    exitChallenge {
                        heading
                        subheading
                        ctaLabel
                        ctaLabelSecondary
                    }
                    showChestModal {
                        ctaLabelIsNext
                        ctaLabelIsNotNext
                        headingIsNext
                        headingIsNotNext
                    }
                    success {
                        ctaLabel
                        footer
                    }
                    newExitChallenge {
                        heading
                        subheading
                        ctaLabel
                        ctaLabelSecondary
                    }
                }
                streak {
                    ctaLabelDone
                    ctaLabelCollect
                    ctaLabelTakeChallenge
                    subheadingCollected
                    subheadingCompleted
                    subheadingTodayStreakDone
                    subheadingInstrucion
                    headingCompleted
                    headingCompletedTodayStreak
                    headingStartStreakDay
                }
                pushNotification {
                    toSettings {
                        ctaLabel
                        ctaLabelSecondary
                        heading
                        subheading
                    }
                    fromChallenge {
                        ctaLabel
                        ctaLabelSecondary
                        heading
                        subheading
                    }
                    turnNotificationOn {
                        ctaLabel
                        ctaLabelSecondary
                        heading
                        subheading
                    }
                }
                popUp {
                    surgeHeading
                    surgeSubheading
                    leaderboardHeading
                    leaderboardSubheading
                }
                settingsInfo {
                    heading
                    subheading
                    ctaLabel
                }
                intro {
                    welcome {
                        heading
                        descriptionOne
                        descriptionTwo
                        descriptionThree
                        ctaLabel
                    }
                    yucoin {
                        heading
                        subheading
                        ctaLabel
                    }
                    yucoinWithMeditation {
                        heading
                        subheading
                        ctaLabel
                    }
                    dailyStepsCTA {
                        heading
                        subheading
                        ctaLabel
                    }
                    dailyStepsWithMeditationCTA {
                        heading
                        subheading
                        ctaLabel
                    }
                    questsNav {
                        heading
                        subheading
                        ctaLabel
                    }
                    todaysYucoin {
                        heading
                        subheading
                        ctaLabel
                    }
                    leaderboardsNav {
                        heading
                        subheading
                        ctaLabel
                    }
                    streaks {
                        heading
                        subheading
                        ctaLabel
                    }
                    rewardsNav {
                        heading
                        subheading
                        ctaLabel
                    }
                    surge {
                        heading
                        subheading
                        ctaLabel
                    }
                }
            }
        }
    }
`;

export default function getMobileCopyWithClient() {
    return client().query<GetMobileCopy>({
        fetchPolicy: "network-only",
        query: getMobileCopyGql
    });
}
