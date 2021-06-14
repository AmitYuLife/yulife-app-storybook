import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { FibDocumentsScreen } from "@components/screens";

let voidFunc: () => null;

storiesOf("FibDocumentsScreen", module).add("default", () => {
  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1, alignItems: "center", margin: 24 }}>
      <FibDocumentsScreen onNavigateBack={voidFunc} />
    </ScrollView>
  );
});
