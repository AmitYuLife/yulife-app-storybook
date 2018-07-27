import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import WelcomeScreen from "./welcome-screen";

storiesOf("Organisms - WelcomeScreen", module).add(
    "Default",
    () => (
        <WelcomeScreen
            onSignUpPress={action("click sign-up")}
            onLogInPress={action("click log-in")}
        />
    )
);
