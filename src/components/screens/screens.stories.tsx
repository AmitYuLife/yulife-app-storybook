import { action } from "@storybook/addon-actions";
import {
    boolean,
    number,
    object,
    select,
    text,
    withKnobs
} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import moment from "moment";
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
    QuestsMovie,
    QuestsScreen,
    QuestsScreenOffline,
    ResetPasswordScreen,
    ResetPasswordSuccessScreen,
    SignUpRewardScreen,
    TodayYucoin,
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
            onLeftMenuPress={action("on left menu press")}
            onStreakPress={action("on streak press")}
            steps={number("Steps", 1246, {
                max: 35000,
                min: 0,
                range: true,
                step: 1
            }, "DailySteps")}
            totalCoins={number("TotalCoins", 4, {
                max: 999999,
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
            labels={object("Labels", [
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
            ], "ChallengesList")}
            name="level 1"
            onPressLeftIcon={action("on left icon press")}
            totalCoins={number("TotalCoins", 1246, {
                max: 35000,
                min: 0,
                range: true,
                step: 1
            }, "ChallengesList")}
        />
    ))
    .add("8. Challenge Progress", () => (
        <ChallengeProgressScreen
            onDismissPress={action("on dismiss press")}
            endDateTime={moment().add(1, "hours").format()}
            userProgress={number("userProgress", 1000)}
            onLeftMenuPress={action("on left menu press")}
            progressTargets={object("progressTargets", [2000, 4000, 6000])}
            unit={select("unit", ["steps", "minutes"], "steps")}
            challengeType={select("Challenge Type", [
                "brisk walk",
                "short stroll",
                "long walk",
                "meditation"
            ], "brisk walk", "ChallengeDetails")}
            totalCoins={number("TotalCoins", 4, {
                max: 999999,
                min: 0,
                range: true,
                step: 1
            }, "ChallengeDetails")}
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
                    dayOfMonth: "14",
                    dayOfWeek: "SUN",
                    steps: 10098,
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
            ], "Items")}
            onPressClose={action("on press close")}
        />
    ))
    .add("12. Intro", () => (
        <IntroScreen />
    ))
    .add("13a. QuestScreen", () => {
        const nextAvailable = moment().unix();
        return (
            <QuestsScreen
                currentLevel={number("CurrentLevel", 4, {
                    max: 99,
                    min: 0,
                    range: true,
                    step: 1
                }, "QuestScreen")}
                data={object("data", Array.from({ length: 7 }).map((_, i) => ({
                    id: `_${i + 1}`,
                    onPress: action(`@ pressed _${i + 1}`),
                    rating: 3
                })).concat({ isNext: true, nextAvailable, onPress: action(`@ pressed next`) } as any)) as any}
                onLeftMenuPress={action("on left menu press")}
                totalCoins={number("TotalCoins", 4, {
                    max: 999999,
                    min: 0,
                    range: true,
                    step: 1
                }, "QuestScreen")}
            />
        );
    })
    .add("13b. QuestScreenOffline", () => (
        <QuestsScreenOffline
            onLeftMenuPress={action("on left menu press")}
            totalCoins={number("TotalCoins", 4, {
                max: 999999,
                min: 0,
                range: true,
                step: 1
            }, "QuestScreenOffline")}
        />
    ))
    .add("13c. QuestsMovie", () => (
        <QuestsMovie />
    ))
    .add("14. Today Yucoin", () => (
        <TodayYucoin
            showStars={boolean("showStars", false)}
            steps={number("steps", 0)}
            activeChallengeEarnings={number("activeChallengeEarnings", 0)}
            activeChallengeLabel={text("activeChallengeLabel", "brisk walk / 1299 steps")}
            activeChallengeRating={number("activeChallengeRating", 3)}
            showCta={boolean("showCta", false)}
            onPressCta={action("pressed cta")}
            onPressClose={action("pressed close")}
        />
    ));
