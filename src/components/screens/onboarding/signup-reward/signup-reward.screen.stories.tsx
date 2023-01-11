import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { SignUpRewardScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("Signup Reward Screen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => g())
  .add("default", () => (
    <SignUpRewardScreen hasNewCopy={false} isLoading={false} onCollectPress={voidFunc} yuCoin={100} />
  ));
