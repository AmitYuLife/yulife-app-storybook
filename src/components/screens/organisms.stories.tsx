import { action, HandlerFunction } from "@storybook/addon-actions";
import { boolean, number, object, select, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ChallengeTile, ILabel } from "../molecules";
import {
    ChallengeFailedScreen,
    ChallengeProgressScreen,
    ChallengesListScreen,
    ChallengeSuccessScreen,
    DailyStepsScreen,
    FitKitConnectScreen,
    LoginScreen,
    ResetPasswordScreen,
    ResetPasswordSuccessScreen,
    SignUpRewardScreen,
    WelcomeScreen,
} from "./index";

const labels: ILabel[] = [
    {
        name: "yucoin",
        onPress: (): HandlerFunction => action("on yucoin press"),
    },
    {
        name: "quest",
        onPress: (): HandlerFunction => action("on quest press"),
    },
    {
        name: "rewards",
        onPress: (): HandlerFunction => action("on rewards press"),
    },
];

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
            onCancelPress={action("on cancel press")}
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
                step: 1,
            }, "SignUp")}
        />
    ))
    .add("6. Daily Steps", () => (
        <DailyStepsScreen
            coinsToday={number("Coins", 4, {
                max: 12,
                min: 0,
                range: true,
                step: 1,
            }, "DailySteps")}
            coinsTotal={number("Coins Total", 246, {
                max: 35000,
                min: 0,
                range: true,
                step: 1,
            }, "DailySteps")}
            currentStreak={number("Current Streak", 2, {
                max: 4,
                min: 0,
                range: true,
                step: 1,
            }, "DailySteps")}
            hasNotification={boolean("Notification?", false, "NavBar")}
            isDoneToday={boolean("Done Today?", false, "NavBar")}
            labels={labels}
            maxStreak={4}
            onCtaPress={action("on cta press")}
            onMenuPress={action("on menu press")}
            onStreakPress={action("on streak press")}
            steps={number("Steps", 1246, {
                max: 35000,
                min: 0,
                range: true,
                step: 1,
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
                    reward: "0-3",
                },
                {
                    challengeType: "long walk",
                    duration: "30 mins",
                    image: ChallengeTile.Images.OSTRICH,
                    reward: "0-6",
                },
                {
                    challengeType: "short stroll",
                    duration: "5 mins",
                    image: ChallengeTile.Images.ELEPHANT,
                    reward: "0-1",
                },
                {
                    challengeType: "meditation",
                    duration: "3-10 mins",
                    image: ChallengeTile.Images.BIRD,
                    reward: "0-3",
                }
            ], "ChallengesList")}
            coinsTotal={number("Coins Total", 246, {
                max: 35000,
                min: 0,
                range: true,
                step: 1,
            }, "ChallengesList")}
            hasNotification={boolean("Notification?", false, "ChallengesList")}
            onMenuPress={action("on menu press")}
            labels={labels}
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
                step: 1,
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
    ));
