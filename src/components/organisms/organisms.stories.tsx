import { action } from "@storybook/addon-actions";
import { boolean, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
    DailyStepsScreen,
    FitKitConnectScreen,
    LoginScreen,
    ResetPasswordScreen,
    SignUpRewardScreen,
    WelcomeScreen,
} from "./screens";

storiesOf("Organisms", module)
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
            onForgotPress={action("forgotten password press")}
            onLogInPress={action("login press")}
            onPasswordChange={action("on password change")}
            onSignUpPress={action("on signup press")}
            password=""
            passwordError=""
        />
    ))
    .add("3. Reset Password", () => (
        <ResetPasswordScreen
            onCancelPress={action("on cancel press")}
            onSubmitPress={action("on submit press")}
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
    ));
