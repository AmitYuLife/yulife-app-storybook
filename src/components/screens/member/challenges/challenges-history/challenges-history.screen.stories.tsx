import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { ChallengesHistoryScreen } from "@components/screens";
import { withProvider } from "@components/storybook/withProvider";

const voidFunc: () => void = () => null;

storiesOf("ChallengesHistoryScreen", module)
  .addDecorator(withKnobs)
  .addDecorator(withProvider)
  .add("default", () => (
    <ChallengesHistoryScreen
      onPressCta={voidFunc}
      level={{ id: "1", level: 30, __typename: "QuestMapLevel", levelChest: "123", slots: [] }}
      onLeftMenuPress={voidFunc}
      onPressActivityHistory={voidFunc}
    />
  ));
