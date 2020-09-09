import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withProvider } from "@components/storybook/withProvider";
import LeaderboardLean from "./leaderboard-lean";

storiesOf("LeaderboardLean", module)
  .addDecorator(withProvider)
  .add("default", () => {
    return <LeaderboardLean />;
  });
