import { COLOURS } from "@molecules/index";
import { StreakTypes } from "@molecules/streak/streak";
import { TopBarTypes } from "@molecules/top-bar/top-bar";
import Copy from "@redux/copy/copy.data.ts";
import { ICentredScreen } from "@redux/theme/theme.reducer";
import { action } from "@storybook/addon-actions";
import { boolean, number, object, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import moment from "moment";
import React from "react";

import {
    ActivityHistoryLevels,
    ChallengeFailedScreen,
    ChallengeProgressScreen,
    ChallengesHistoryScreen,
    ChallengesListScreen,
    ChallengeSuccessScreen,
    DailyStepsScreen,
    EmailSentScreen,
    FitKitConnectScreen,
    LoginScreen,
    NoAccessScreen,
    ResetPasswordScreen,
    SignUpRewardScreen,
    TodayYucoinScreen
} from "./index";

storiesOf("Screens", module)
    .addDecorator(withKnobs)
    .add("1. NoAccessScreen", () => <NoAccessScreen />)
    .add("2. Login", () => (
        <LoginScreen
            disabled={false}
            email=""
            emailError=""
            isLoggingIn={false}
            loginError=""
            onEmailChange={action("on email change")}
            onResetPasswordPress={action("forgotten password press")}
            onLogInPress={action("login press")}
            onPasswordChange={action("on password change")}
            onSignUpPress={action("on signup press")}
            password=""
            passwordError=""
            copy={Copy.login}
        />
    ))
    .add("3a. Reset Password", () => (
        <ResetPasswordScreen
            disableSubmit={boolean("Submit disabled?", false)}
            email=""
            emailError=""
            isSubmitting={boolean("Is Submitting?", false, "ResetPassword")}
            onCancelPress={action("on cancel press")}
            onEmailChange={action("on email change")}
            onSubmitPress={action("on submit press")}
            copy={Copy.needHelpLoggingIn}
        />
    ))
    .add("3b. Reset Password Success", () => (
        <EmailSentScreen
            email="test@yulife.com"
            onLogInPress={action("on login press")}
            onResendEmailPress={action("on resend email press")}
            copy={Copy.emailSent}
        />
    ))
    .add("4. FitKit Connect", () => (
        <FitKitConnectScreen
            connecting={boolean("Connecting?", false, "FitKit")}
            fitKitAvailable={boolean("FitKit Available?", true, "FitKit")}
            loading={boolean("FitKit Loading?", false, "FitKit")}
            onConnectPress={action("on connect press")}
            onPrivacyPolicyPress={action("on privacy policy press")}
            onSkipPress={action("on skip press")}
            copy={{
                blurb: "",
                heading: "",
                linkButtonLabel: "",
                primaryButtonConnecting: "",
                primaryButtonLabel: "",
                secondaryButtonLabel: "",
                unavailableAndroid: "",
                unavailableHeading: "",
                unavailableIOS: ""
            }}
        />
    ))
    .add("5. SignUp Reward", () => (
        <SignUpRewardScreen
            isLoading={false}
            onCollectPress={action("on collect press")}
            reward={number(
                "Reward",
                1000,
                {
                    max: 2000,
                    min: 0,
                    range: true,
                    step: 1
                },
                "SignUp"
            )}
            copy={{
                heading: "",
                subheading: "",
                ctaLabel: ""
            }}
        />
    ))
    .add("6. Daily Steps", () => (
        <DailyStepsScreen
            coinsToday={number(
                "Coins",
                4,
                {
                    max: 12,
                    min: 0,
                    range: true,
                    step: 1
                },
                "DailySteps"
            )}
            currentStreak={number(
                "Current Streak",
                2,
                {
                    max: 4,
                    min: 0,
                    range: true,
                    step: 1
                },
                "DailySteps"
            )}
            displayStreak={boolean("Display Streak?", true, "DailySteps")}
            fitKitAvailable={boolean("FitKit Available?", true, "DailySteps")}
            hasPermission={boolean("FitKit Permission?", true, "DailySteps")}
            isDoneToday={boolean("Done Today?", false, "DailySteps")}
            isLoading={boolean("Loading Daily Steps?", false, "DailySteps")}
            maxStreak={4}
            onAuthoriseFitKitPress={action("on authorise fitkit press")}
            onCoinPress={action("on coin press")}
            onCtaPress={action("on cta press")}
            onLeftMenuPress={action("on left menu press")}
            onStreakPress={action("on streak press")}
            steps={number(
                "Steps",
                1246,
                {
                    max: 35000,
                    min: 0,
                    range: true,
                    step: 1
                },
                "DailySteps"
            )}
            totalCoins={number(
                "TotalCoins",
                4,
                {
                    max: 999999,
                    min: 0,
                    range: true,
                    step: 1
                },
                "DailySteps"
            )}
            theme={{
                centredScreen: {
                    offline: { image: "gray_forest", style: { backgroundColor: "#FFF" } } as ICentredScreen,
                    online: { image: "large_forest", style: { backgroundColor: "#FFF" } } as ICentredScreen
                },
                hasWhiteGlow: false,
                isLight: false,
                navBar: {
                    offline: COLOURS.LIGHT,
                    online: COLOURS.LIGHT
                },
                streakType: "forest" as StreakTypes,
                textStyle: { color: "#333333" },
                topBarType: "default" as TopBarTypes
            }}
            copy={{
                copy: {
                    permission: "",
                    permissionCta: ""
                },
                popUpCopy: {
                    leaderboardHeading: "",
                    leaderboardSubheading: "",
                    surgeHeading: "",
                    surgeSubheading: ""
                }
            }}
        />
    ))
    .add("7. Challenges List", () => (
        <ChallengesListScreen
            challenges={object(
                "Challenges",
                [
                    {
                        challengeType: "brisk walk",
                        currentWorld: 0,
                        duration: "10 mins",
                        reward: "0-3"
                    },
                    {
                        challengeType: "long walk",
                        currentWorld: 0,
                        duration: "30 mins",
                        reward: "0-6"
                    },
                    {
                        challengeType: "short stroll",
                        currentWorld: 0,
                        duration: "5 mins",
                        reward: "0-1"
                    },
                    {
                        challengeType: "meditation",
                        currentWorld: 0,
                        duration: "3-10 mins",
                        reward: "0-3"
                    }
                ],
                "ChallengesList"
            )}
            labels={object(
                "Labels",
                [
                    {
                        name: "yucoin",
                        onPress: action("on first tab press")
                    },
                    {
                        name: "quests",
                        onPress: action("on second tab press")
                    },
                    {
                        name: "rewards",
                        onPress: action("on third tab press")
                    }
                ],
                "ChallengesList"
            )}
            name="level 1"
            onPressLeftIcon={action("on left icon press")}
            totalCoins={number(
                "TotalCoins",
                1246,
                {
                    max: 35000,
                    min: 0,
                    range: true,
                    step: 1
                },
                "ChallengesList"
            )}
        />
    ))
    .add("8. Challenge Progress", () => (
        <ChallengeProgressScreen
            onDismissPress={action("on dismiss press")}
            currentWorld={number("currentWorld", 1)}
            endDateTime={moment()
                .add(1, "hours")
                .format()}
            userProgress={number("userProgress", 1000)}
            onLeftMenuPress={action("on left menu press")}
            progressTargets={object("progressTargets", [2000, 4000, 6000])}
            unit={select("unit", ["steps", "minutes"], "steps")}
            challengeType={select(
                "Challenge Type",
                ["brisk walk", "short stroll", "long walk", "meditation"],
                "brisk walk",
                "ChallengeDetails"
            )}
            totalCoins={number(
                "TotalCoins",
                4,
                {
                    max: 999999,
                    min: 0,
                    range: true,
                    step: 1
                },
                "ChallengeDetails"
            )}
        />
    ))
    .add("9. Challenge Success", () => (
        <ChallengeSuccessScreen
            level={number(
                "Level",
                1,
                {
                    max: 49,
                    min: 1,
                    range: true,
                    step: 1
                },
                "ChallengeSuccess"
            )}
            onPressCta={action("on cta press")}
            score={number(
                "Score",
                246,
                {
                    max: 35000,
                    min: 0,
                    range: true,
                    step: 1
                },
                "ChallengeSuccess"
            )}
            unit={select("Unit", ["steps", "minutes"], "steps", "ChallengeSuccess")}
            rating={number(
                "Rating",
                0,
                {
                    max: 3,
                    min: 0,
                    range: true,
                    step: 1
                },
                "ChallengeSuccess"
            )}
            reward={number(
                "Reward",
                0,
                {
                    max: 3,
                    min: 0,
                    range: true,
                    step: 1
                },
                "ChallengeSuccess"
            )}
            copy={{
                ctaLabel: "",
                footer: ""
            }}
        />
    ))
    .add("10. Challenge Failed", () => (
        <ChallengeFailedScreen
            level={number(
                "Level",
                1,
                {
                    max: 49,
                    min: 1,
                    range: true,
                    step: 1
                },
                "ChallengeFailed"
            )}
            onPress={action("on press")}
            copy={{
                ctaLabel: "",
                footer: "",
                heading: ""
            }}
        />
    ))
    .add("11. Activity History w/ Levels", () => (
        <ActivityHistoryLevels
            items={object(
                "Items",
                [
                    {
                        challenges: [],
                        dayOfMonth: "14",
                        dayOfWeek: "SUN",
                        steps: 10098,
                        sources: {
                            device: 9000,
                            garmin: 10098
                        },
                        yucoin: 3
                    },
                    {
                        challenges: [
                            {
                                earned: 1,
                                milestones: 1,
                                name: "long walk",
                                score: "8000 steps"
                            },
                            {
                                earned: 3,
                                milestones: 2,
                                name: "meditation",
                                score: "08m 00s"
                            },
                            {
                                earned: 1,
                                milestones: 3,
                                name: "short stroll",
                                score: "1299 steps"
                            }
                        ],
                        dayOfMonth: "13",
                        dayOfWeek: "SAT",
                        level: 4,
                        steps: 4098,
                        sources: {},
                        yucoin: 3
                    },
                    {
                        challenges: [
                            {
                                earned: 4,
                                milestones: 3,
                                name: "long walk",
                                score: "9299 steps"
                            },
                            {
                                earned: 3,
                                milestones: 2,
                                name: "meditation",
                                score: "08m 00s"
                            }
                        ],
                        dayOfMonth: "12",
                        dayOfWeek: "FRI",
                        level: 3,
                        steps: 6098,
                        sources: {},
                        yucoin: 3
                    },
                    {
                        challenges: [],
                        dayOfMonth: "11",
                        dayOfWeek: "THU",
                        steps: 10098,
                        yucoin: 3
                    },
                    {
                        challenges: [
                            {
                                earned: 1,
                                milestones: 3,
                                name: "short stroll",
                                score: "08m 00s"
                            }
                        ],
                        dayOfMonth: "10",
                        dayOfWeek: "WED",
                        level: 2,
                        steps: 10098,
                        yucoin: 3
                    },
                    {
                        challenges: [
                            {
                                earned: 1,
                                milestones: 3,
                                name: "short stroll",
                                score: "05m 00s"
                            }
                        ],
                        dayOfMonth: "9",
                        dayOfWeek: "TUE",
                        level: 1,
                        steps: 7890,
                        yucoin: 3
                    }
                ],
                "Items"
            )}
            onPressClose={action("on press close")}
            onRefresh={action("on refresh")}
            loading={boolean("Loading?", false, "Items")}
            copy={{
                headerLeft: "",
                headerLevel: "",
                headerMid: "",
                headerRight: "",
                heading: ""
            }}
        />
    ))
    .add("12. Today Yucoin", () => (
        <TodayYucoinScreen
            steps={number("steps", 6543)}
            dailyStepsEarned={number("dailyStepsEarned", 3)}
            exchangeRate={{ steps: 2000, yucoin: 1 }}
            challenges={[]}
            activeChallenge={null}
            loading={false}
            showCta={true}
            ctaLabel="take a challenge"
            onPressCta={action("pressed cta")}
            onPressClose={action("pressed close")}
            isShowingPassiveMeditation={false}
        />
    ))
    .add("13. Challenges List Completed", () => (
        <ChallengesHistoryScreen
            onLeftMenuPress={() => null}
            totalCoins={604}
            level={{
                __typename: "Level",
                id: "aasqweq",
                level: 1,
                levelChestId: null,
                name: "name",
                rating: 2,
                slots: [
                    {
                        __typename: "LevelSlot",
                        availableAtLevel: 1,
                        id: "asda2",
                        milestones: [
                            {
                                XP: 100,
                                __typename: "LevelSlotMilestone",
                                coins: 123,
                                id: "dsadas",
                                target: {
                                    __typename: "MilestoneTarget",
                                    meditation: 0,
                                    steps: 0
                                }
                            }
                        ],
                        passive: true,
                        rating: 1,
                        subtype: "brisk walk",
                        timeLimit: 600,
                        type: "asdas",
                        unit: "ssda",
                        yuCoinAwarded: 3
                    },
                    {
                        __typename: "LevelSlot",
                        availableAtLevel: 1,
                        id: "asda3",
                        milestones: [
                            {
                                XP: 100,
                                __typename: "LevelSlotMilestone",
                                coins: 123,
                                id: "dsadas",
                                target: {
                                    __typename: "MilestoneTarget",
                                    meditation: 0,
                                    steps: 0
                                }
                            }
                        ],
                        passive: true,
                        rating: 3,
                        subtype: "short stroll",
                        timeLimit: 300,
                        type: "asdas",
                        unit: "ssda",
                        yuCoinAwarded: 1
                    },
                    {
                        __typename: "LevelSlot",
                        availableAtLevel: 1,
                        id: "asda4",
                        milestones: [
                            {
                                XP: 100,
                                __typename: "LevelSlotMilestone",
                                coins: 123,
                                id: "dsadas",
                                target: {
                                    __typename: "MilestoneTarget",
                                    meditation: 0,
                                    steps: 0
                                }
                            }
                        ],
                        passive: true,
                        rating: null,
                        subtype: "long walk",
                        timeLimit: 1800,
                        type: "asdas",
                        unit: "ssda",
                        yuCoinAwarded: 1
                    },
                    {
                        __typename: "LevelSlot",
                        availableAtLevel: 1,
                        id: "asda5",
                        milestones: [
                            {
                                XP: 100,
                                __typename: "LevelSlotMilestone",
                                coins: 123,
                                id: "dsadas",
                                target: {
                                    __typename: "MilestoneTarget",
                                    meditation: 180,
                                    steps: 0
                                }
                            },
                            {
                                XP: 100,
                                __typename: "LevelSlotMilestone",
                                coins: 123,
                                id: "dsadas",
                                target: {
                                    __typename: "MilestoneTarget",
                                    meditation: 600,
                                    steps: 0
                                }
                            }
                        ],
                        passive: true,
                        rating: 0,
                        subtype: "meditation",
                        timeLimit: 1800,
                        type: "asdas",
                        unit: "ssda",
                        yuCoinAwarded: 0
                    }
                ]
            }}
            onPressActivityHistory={() => null}
            onPressCta={() => null}
        />
    ));
