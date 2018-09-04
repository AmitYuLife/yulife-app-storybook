import { action } from "@storybook/addon-actions";
import { boolean, number, object, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ChallengeTile } from "../molecules";
import {
    ActivityHistoryLevels,
    ChallengeFailedScreen,
    ChallengeProgressScreen,
    ChallengesListScreen,
    ChallengeSuccessScreen,
    DailyStepsScreen,
    FitKitConnectScreen,
    IntroScreen,
    LoginScreen,
    ResetPasswordScreen,
    ResetPasswordSuccessScreen,
    SignUpRewardScreen,
    StreaksScreen,
    WelcomeScreen
} from "./index";

storiesOf("Screens", module)
    .addDecorator(withKnobs)
    .add("1. Welcome", () => (
        <WelcomeScreen
            onSignUpPress={action("on sign-up press")}
            onLogInPress={action("on login press")}
        />
    ))
    .add("2. Login", () => (
        <LoginScreen
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
        />
    ))
    .add("3a. Reset Password", () => (
        <ResetPasswordScreen
            email=""
            emailError=""
            isSubmitting={boolean("Is Submitting?", false, "ResetPassword")}
            onCancelPress={action("on cancel press")}
            onEmailChange={action("on email change")}
            onSubmitPress={action("on submit press")}
        />
    ))
    .add("3b. Reset Password Success", () => (
        <ResetPasswordSuccessScreen
            onLogInPress={action("on login press")}
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
        />
    ))
    .add("5. SignUp Reward", () => (
        <SignUpRewardScreen
            onCollectPress={action("on collect press")}
            reward={number("Reward", 1000, {
                max: 2000,
                min: 0,
                range: true,
                step: 1
            }, "SignUp")}
        />
    ))
    .add("6. Daily Steps", () => (
        <DailyStepsScreen
            coinsToday={number("Coins", 4, {
                max: 12,
                min: 0,
                range: true,
                step: 1
            }, "DailySteps")}
            currentStreak={number("Current Streak", 2, {
                max: 4,
                min: 0,
                range: true,
                step: 1
            }, "DailySteps")}
            displayStreak={boolean("Display Streak?", true, "DailySteps")}
            fitKitAvailable={boolean("FitKit Available?", true, "DailySteps")}
            hasPermission={boolean("FitKit Permission?", true, "DailySteps")}
            isDoneToday={boolean("Done Today?", false, "DailySteps")}
            isLoading={boolean("Loading Daily Steps?", false, "DailySteps")}
            isOnline={boolean("Online?", true, "DailySteps")}
            maxStreak={4}
            onAuthoriseFitKitPress={action("on authorise fitkit press")}
            onCoinPress={action("on coin press")}
            onCtaPress={action("on cta press")}
            onStreakPress={action("on streak press")}
            steps={number("Steps", 1246, {
                max: 35000,
                min: 0,
                range: true,
                step: 1
            }, "DailySteps")}
        />
    ))
    .add("7. Challenges List", () => (
        <ChallengesListScreen
            challenges={object("Challenges", [
                {
                    challengeType: "brisk walk",
                    duration: "10 mins",
                    image: ChallengeTile.Images.SQUIRREL,
                    reward: "0-3"
                },
                {
                    challengeType: "long walk",
                    duration: "30 mins",
                    image: ChallengeTile.Images.OSTRICH,
                    reward: "0-6"
                },
                {
                    challengeType: "short stroll",
                    duration: "5 mins",
                    image: ChallengeTile.Images.ELEPHANT,
                    reward: "0-1"
                },
                {
                    challengeType: "meditation",
                    duration: "3-10 mins",
                    image: ChallengeTile.Images.BIRD,
                    reward: "0-3"
                }
            ], "ChallengesList")}
        />
    ))
    .add("8. Challenge Progress", () => (
        <ChallengeProgressScreen
            challengeType={select("Challenge Type", [
                "brisk walk",
                "short stroll",
                "long walk",
                "meditation"
            ], "brisk walk", "ChallengeDetails")}
        />
    ))
    .add("9. Challenge Success", () => (
        <ChallengeSuccessScreen
            onPressCta={action("on cta press")}
            score={number("Score", 246, {
                max: 35000,
                min: 0,
                range: true,
                step: 1
            }, "ChallengeSuccess")}
            unit={select("Unit", [
                "steps",
                "minutes"
            ], "steps", "ChallengeSuccess")}
            rating={number("Rating", 0, {
                max: 3,
                min: 0,
                range: true,
                step: 1
            }, "ChallengeSuccess")}
            reward={number("Reward", 0, {
                max: 3,
                min: 0,
                range: true,
                step: 1
            }, "ChallengeSuccess")}
        />
    ))
    .add("10. Challenge Failed", () => (
        <ChallengeFailedScreen
            onPress={action("on press")}
        />
    ))
    .add("11. Activity History w/ Levels", () => (
        <ActivityHistoryLevels
            items={object("Items", [
                {
                    challenges: [],
                    dayOfMonth: 14,
                    dayOfWeek: "SUN",
                    steps: 10098
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
                    dayOfMonth: 13,
                    dayOfWeek: "SAT",
                    level: 4,
                    steps: 4098
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
                    dayOfMonth: 12,
                    dayOfWeek: "FRI",
                    level: 3,
                    steps: 6098
                },
                {
                    challenges: [],
                    dayOfMonth: 11,
                    dayOfWeek: "THU",
                    steps: 10098
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
                    dayOfMonth: 10,
                    dayOfWeek: "WED",
                    level: 2,
                    steps: 10098
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
                    dayOfMonth: 9,
                    dayOfWeek: "TUE",
                    level: 1,
                    steps: 7890
                }
            ], "Items")}
            onPressClose={action("on press close")}
        />
    ))
    .add("12. Intro", () => (
        <IntroScreen />
    ))
    .add("13. Streaks", () => (
        <StreaksScreen
            streakCompleted={number("streakCompleted", 0, {
                max: 5,
                min: 0,
                range: true,
                step: 1
            })}
            streakMax={number("streakMax", 1, {
                max: 5,
                min: 1,
                range: true,
                step: 1
            })}
            isTodayDone={boolean("isTodayDone", true)}
            onPressCtaPrimary={action("pressed streak cta primary")}
            onPressCtaSecondary={action("pressed streak cta secondary")}
        />
    ));
