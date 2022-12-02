import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ChallengeFailedScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("ChallengeFailedScreen", module)
  .addDecorator(withKnobs)
  .add("default", () => <ChallengeFailedScreen loading={false} onPress={voidFunc} />);
