import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { YugiHeader } from "@atoms";
import { YugiDocumentsIcon } from "@atoms/icon/yugi-documents-icon";

storiesOf("YugiHeader", module).add("default", () => {
  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <YugiHeader title="Your policy docs, in one easy place." description="description" icon={<YugiDocumentsIcon />} />
    </ScrollView>
  );
});
