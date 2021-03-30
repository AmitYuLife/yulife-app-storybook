import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { SignUpRewardScreen } from "@components/screens";

const voidFunc: () => void = () => null;

const copy = {
  heading: "heading",
  subheading: "subheading",
  ctaLabel: "ctaLabel",
};

storiesOf("Signup Reward Screen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => g())
  .add("default", () => <SignUpRewardScreen isLoading={false} onCollectPress={voidFunc} reward={100} copy={copy} />);
