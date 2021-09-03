import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { ConnectCheckList } from "@molecules";

storiesOf("ConnectCheckList", module).add("default", () => {
  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1, alignItems: "center", margin: 24 }}>
      <ConnectCheckList />
    </ScrollView>
  );
});
