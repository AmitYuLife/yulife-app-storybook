import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
    FitKitConnectScreen,
    LoginScreen,
    ResetPasswordScreen,
    SignUpRewardScreen,
    WelcomeScreen,
} from "./screens";

storiesOf("Organisms", module)
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
            connecting={false}
            onConnectPress={action("on connect press")}
            onPrivacyPolicyPress={action("on privacy policy press")}
            onSkipPress={action("on skip press")}
        />
    ))
    .add("5. SignUp Reward", () => (
        <SignUpRewardScreen
            onCollectPress={action("on collect press")}
            reward={12345}
        />
    ));
