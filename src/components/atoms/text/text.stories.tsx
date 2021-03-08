import React from "react";
import { ScrollView } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { TextTemplate } from "./text-template";

storiesOf("TextTemplate", module).add("all", () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <TextTemplate type="h1">Heading 1</TextTemplate>
      <TextTemplate type="h2">Heading 2</TextTemplate>
      <TextTemplate type="h3">Heading 3</TextTemplate>
      <TextTemplate type="b1">Body 1</TextTemplate>
      <TextTemplate type="b1b">Body 1 bold</TextTemplate>
      <TextTemplate type="b2">Body 2</TextTemplate>
      <TextTemplate type="b2b">Body 2 bold</TextTemplate>
      <TextTemplate type="l1">Label 1</TextTemplate>
      <TextTemplate type="l2">Label 2</TextTemplate>
    </ScrollView>
  );
});
