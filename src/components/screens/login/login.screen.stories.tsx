import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { LoginScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("LoginScreen", module)
  .addDecorator(withKnobs)
  .add("default", () => <LoginScreen {...loginScreenProps} />);

const loginScreenProps = {
  disabled: false,
  email: "andrico",
  isLoggingIn: false,
  emailError: "",
  loginError: "",
  onEmailChange: voidFunc,
  onResetPasswordPress: voidFunc,
  onLogInPress: voidFunc,
  onPasswordChange: voidFunc,
  password: "pass",
  passwordError: "",
  copy: {
    heading: "ss",
    subheading: "ddd",
    ctaLabel: "login",
    ctaLabelSecondary: "cancel",
  },
};
