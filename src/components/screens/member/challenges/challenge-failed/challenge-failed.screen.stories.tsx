import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ChallengeFailedScreen } from "@components/screens";

const voidFunc: () => void = () => null;

storiesOf("ChallengeFailedScreen", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <ChallengeFailedScreen
      copy={{ ctaLabel: "exit", heading: "heading", footer: "fooooter" }}
      currentWorld={0}
      loading={false}
      onPress={voidFunc}
    />
  ));
